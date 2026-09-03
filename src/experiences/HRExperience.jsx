import React, { useState, useEffect } from 'react';

const HOME = {
  eyebrow: "GummyGum Executive Series",
  category: "HR & TALENT MANAGEMENT",
  title: "HR in Startups",
  sub: "Fire Fighting or Building Rockstars?",
  description: "25 real workplace scenarios detailing the strategic transition from reactive HR emergency management to building sustainable organizational systems where high performance is normal.",
  cta: "Start Experience",
  specs: ["⏱ 15–20 Mins", "🧠 25 Scenarios", "👥 Executive / Team"],
  outcomes: [
    { title: "Pattern Recognition", desc: "Identify culture drift and missing expectations before they turn into retention crises." },
    { title: "System Architecture", desc: "Shift from reactive fire-fighting to building repeatable organizational frameworks." },
    { title: "Managerial Agency", desc: "Equip team leaders to coach and set standards rather than delegating every hard conversation." }
  ]
};

const INTRO = [
  { text: "You've just joined HR at a fast-growing startup." },
  { text: "Most days, something is already on fire — a manager complaint, a confused new hire, or a founder asking you to ‘fix the culture.’" },
  { text: "Your instinct will be to solve each crisis fast. That is reactive fire fighting." },
  { text: "The strategic objective is different: understand why people behave the way they do, then build the operational conditions that make high performance natural.", highlight: true },
  { text: "Each scenario ahead breaks down what happens, the formal organizational pattern, root cause analysis, and the operational fix.", cta: "Begin Scenarios" }
];

const OUTRO = [
  { text: "HR in a startup is not about managing every employee individually." },
  { text: "It is about building an organizational architecture where high performance and psychological safety are the default." },
  { text: "Clear expectations over ambiguity. Direct feedback over hints. Managers who coach over managers who rescue." },
  { text: "Transformation doesn't happen in one dramatic workshop. It happens in a hundred quiet, deliberate decisions.", highlight: true },
  { final: true }
];

const CARD_LABELS = ["The Moment", "Pattern Name", "Root Cause", "Actionable Fix"];

const MOMENTS = [
  {
    name: "The Ownership Trap",
    situation: ["A day will come when the founder pulls you aside and says, ‘People just don't take ownership here.’", "You'll feel it too — a little frustration, almost like you're the only one who really cares."],
    punch: "This pattern is known as The Ownership Trap.",
    define: ["The Ownership Trap occurs when employees stop exercising decision-making authority on their own — even when fully capable."],
    why: ["Ownership is not a personality trait; it is a structural outcome. It only occurs when someone has clear decision rights, authority, and accountability for the outcome.", "Remove authority, and ownership quietly vanishes. When a manager overrides a team member's decisions three times in a row, that individual stops proposing solutions."],
    fix: ["Workshops cannot compel people to care more about overridden decisions.", "Operational fix: Audit where decision authority actually sits in your company, and ensure those responsible are empowered to make final calls."],
    transition: "Next Scenario: The New Hire Asking Repeating Questions"
  },
  {
    name: "The Missing Map",
    situation: ["A new hire continually asks basic operational questions: ‘Where's the client roster?’ ‘Who approves this expense?’", "The manager's patience wears thin, assuming the new hire lacks sharpness."],
    punch: "This pattern is known as The Missing Map.",
    define: ["The Missing Map occurs when new employees repeatedly ask basic questions because institutional knowledge was never documented."],
    why: ["When three consecutive hires ask the exact same question in week one, it signals an onboarding system failure, not a candidate quality issue.", "Relying on verbal answers creates fragmented standards across teams."],
    fix: ["Coaching the new hire to ‘be more proactive’ does not resolve missing documentation.", "Operational fix: Document the standard once in a searchable repository to eliminate the question permanently."],
    transition: "Next Scenario: The Vague Performance Complaint"
  },
  {
    name: "The Performance Guess",
    situation: ["A manager requests HR intervention for an employee who is ‘underperforming.’", "The immediate impulse is to issue a formal Performance Improvement Plan (PIP)."],
    punch: "This pattern is known as The Performance Guess.",
    define: ["The Performance Guess is diagnosing every performance issue as a effort failure without investigating root causes."],
    why: ["Performance gaps stem from five distinct causes: unclear expectations, misalignment, skill gaps, resource constraints, or effort.", "Managers frequently default to effort because it requires the least managerial self-reflection."],
    fix: ["Issuing a PIP without root cause diagnosis risks managing out talented staff over company communication gaps.", "Operational fix: Before taking disciplinary steps, verify whether the employee was given an explicit, objective definition of 'success'."],
    transition: "Next Scenario: Changing Standards Across Managers"
  },
  {
    name: "The Invisible Rulebook",
    situation: ["An employee transfers to a new team and suddenly struggles — delivering slower work and making unprecedented errors.", "Leadership assumes the employee's motivation dropped."],
    punch: "This pattern is known as The Invisible Rulebook.",
    define: ["The Invisible Rulebook refers to unwritten, idiosyncratic quality standards maintained in individual managers' heads."],
    why: ["Without company-wide quality standards, employees are managed by individual personality preferences rather than objective criteria.", "One manager values speed and rough drafts; another expects polished deliverables before review. Without alignment, performance drops."],
    fix: ["Coaching the employee won't fix unwritten manager expectations.", "Operational fix: Formalize acceptance criteria and definition-of-done across departments."],
    transition: "Next Scenario: Company-Wide Slip in Deadlines"
  },
  {
    name: "The Fake Deadline",
    situation: ["Project deadlines begin slipping across multiple teams simultaneously.", "Management defaults to diagnosing a lack of discipline."],
    punch: "This pattern is known as The Fake Deadline.",
    define: ["A Fake Deadline is a target completion date set without resource alignment or scope protection."],
    why: ["When scope expands two weeks prior to launch without extending the target date, the deadline becomes mathematically unachievable.", "Teams quietly stop treating dates as binding commitments."],
    fix: ["Time management seminars cannot fix unmanaged scope creep.", "Operational fix: Rigorously protect target dates when scope changes, or adjust target dates immediately."],
    transition: "Next Scenario: The Meeting Where Nobody Speaks"
  },
  {
    name: "The Silent Room",
    situation: ["During a key strategic meeting, a flawed decision is proposed. Everyone senses the issue, yet no one speaks up.", "Ten minutes later in private channels, multiple team members agree the plan will fail."],
    punch: "This pattern is known as The Silent Room.",
    define: ["The Silent Room occurs when past dissent was penalized, teaching team members that silence is safer than candor."],
    why: ["If a junior team member's early feedback was dismissed aggressively in public, the entire team learns to withhold constructive criticism.", "Risk-aversion quickly replaces candid collaboration."],
    fix: ["A general request to 'speak up more' cannot overcome psychological insecurity.", "Operational fix: Publicly reward constructive pushback during decision meetings."],
    transition: "Next Scenario: Downward-Only Feedback Loops"
  },
  {
    name: "Feedback Equals Trouble",
    situation: ["Feedback in the organization only flows downward, and only when errors occur.", "Excellence passes silently, while mistakes prompt immediate messaging."],
    punch: "This pattern is known as Feedback Equals Trouble.",
    define: ["This pattern occurs when corrective feedback is the sole form of feedback, causing feedback to feel like an existential threat."],
    why: ["When feedback is exclusively corrective, employees learn that visibility equals vulnerability. They minimize risk-taking and avoid executive attention.", "High performers disengage when good work is ignored."],
    fix: ["Empty praise does not solve feedback imbalance.", "Operational fix: Establish structured, consistent feedback loops for both recognition and alignment."],
    transition: "Next Scenario: Inability to Make Independent Calls"
  },
  {
    name: "The Permission Habit",
    situation: ["Employees routinely seek manager sign-off for routine operational decisions.", "Leadership expresses frustration over lack of initiative."],
    punch: "This pattern is known as The Permission Habit.",
    define: ["The Permission Habit forms after an independent call was publicly criticized, teaching employees to seek approval for everything."],
    why: ["When a reasonable decision is met with public second-guessing, team members protect themselves by seeking explicit sign-off every time."],
    fix: ["Exhortations to 'be more proactive' will not reverse defensive habits.", "Operational fix: Publish explicit decision-rights tiers detailing what requires approval versus what requires notification."],
    transition: "Next Scenario: Unaddressed Conflict Sitting for Months"
  },
  {
    name: "The Avoided Conversation",
    situation: ["An obvious operational issue persists for months while leadership talks around the problem without addressing the individual directly."],
    punch: "This pattern is known as The Avoided Conversation.",
    define: ["This occurs when leaders lack a structured framework for direct, constructive conflict — leading to postponement."],
    why: ["Without training in direct feedback, managers fear awkwardness or escalation, choosing passive avoidance instead.", "Unaddressed issues degrade team standards over time."],
    fix: ["Avoided conversations increase organizational debt.", "Operational fix: Train managers on direct SBI (Situation-Behavior-Impact) feedback models."],
    transition: "Next Scenario: Repeating Root Cause Errors"
  },
  {
    name: "The Repeating Mistake",
    situation: ["The same operational mistake recurs across different teams months apart.", "Each instance is treated as an isolated employee mistake."],
    punch: "This pattern is known as The Repeating Mistake.",
    define: ["A Repeating Mistake is a recurring issue driven by underlying process vulnerabilities rather than individual fault."],
    why: ["When different individuals make the exact same error, the system is designed to produce that error.", "Relying on memory instead of single-source-of-truth documentation guarantees repetition."],
    fix: ["Telling staff to 'be more careful' fails to solve system defects.", "Operational fix: Perform root-cause blameless post-mortems whenever an error repeats."],
    transition: "Next Scenario: High Performer Promoted to Manager"
  },
  {
    name: "The Manager Leap",
    situation: ["The top individual contributor is promoted to people manager.", "Six months later, team performance drops and the new manager is struggling."],
    punch: "This pattern is known as The Manager Leap.",
    define: ["The Manager Leap is assuming functional excellence automatically translates to people leadership."],
    why: ["Management is a distinct domain requiring coaching, delegation, and feedback skills.", "Without structured manager onboarding, new managers default to performing individual work themselves."],
    fix: ["Demoting the manager signals that leadership progression is a landmine.", "Operational fix: Provide formal management training and mentorship prior to and following promotion."],
    transition: "Next Scenario: Ambiguous Feedback"
  },
  {
    name: "The Vague Instruction",
    situation: ["An employee receives evaluation feedback to 'be more strategic' or 'take more initiative', but has no clear actionable steps."],
    punch: "This pattern is known as The Vague Instruction.",
    define: ["A Vague Instruction is feedback expressed as an abstract conclusion rather than observable behavior."],
    why: ["Managers often share their impressions without identifying the specific behaviors that formed those impressions.", "Employees waste energy guessing what leadership desires."],
    fix: ["Documenting abstract feedback creates frustration.", "Operational fix: Require managers to translate feedback into specific, observable behavioral examples."],
    transition: "Next Scenario: The Manager Who Rescues Everyone"
  },
  {
    name: "The Rescue Trap",
    situation: ["A manager works late every night fixing team deliverables while team members appear under-utilized."],
    punch: "This pattern is known as The Rescue Trap.",
    define: ["The Rescue Trap occurs when a manager fixes work themselves instead of coaching team members to standard."],
    why: ["Rescuers save ten minutes today while forfeiting team capability long-term.", "Team members learn to submit incomplete work knowing the manager will finish it."],
    fix: ["Manager burnout hides team capability gaps.", "Operational fix: Evaluate managers on team capability building rather than individual output."],
    transition: "Next Scenario: Crises Escalated at the Last Minute"
  },
  {
    name: "The Late Escalation",
    situation: ["A project issue is brought to HR or executive attention only after becoming a major crisis.", "Investigation reveals the issue was brewing for months."],
    punch: "This pattern is known as The Late Escalation.",
    define: ["Late Escalation happens when asking for help is perceived as a admission of incompetence."],
    why: ["If early requests for support were met with criticism, managers conceal emerging risks until containment fails."],
    fix: ["Crisis management is far costlier than early intervention.", "Operational fix: Normalize early risk flagging during weekly operational reviews."],
    transition: "Next Scenario: Single Point of Dependency"
  },
  {
    name: "The One Person Problem",
    situation: ["A key operational workflow relies entirely on one team member's memory.", "Team members joke that a vacation would halt operations."],
    punch: "This pattern is known as The One Person Problem.",
    define: ["The One Person Problem is single-point operational vulnerability caused by undocumented tribal knowledge."],
    why: ["High-speed growth often rewards speed over documentation, concentrating critical processes in key individuals."],
    fix: ["Unexpected departures create severe operational paralysis.", "Operational fix: Mandate cross-training and process documentation for all critical workflows."],
    transition: "Next Scenario: Constant Emergency Hiring"
  },
  {
    name: "The Emergency Hire",
    situation: ["Every staffing request is submitted as an urgent emergency required 'yesterday.'"],
    punch: "This pattern is known as The Emergency Hire.",
    define: ["An Emergency Hire is a position requested after team capacity has already collapsed."],
    why: ["Lack of headcount forecasting forces teams to recruit under extreme strain, compromising hiring bars."],
    fix: ["Emergency hiring increases bad-hire risk.", "Operational fix: Align hiring roadmaps with growth metrics quarterly."],
    transition: "Next Scenario: Inconsistent Onboarding Outcomes"
  },
  {
    name: "The Manager Lottery",
    situation: ["New hire success varies dramatically across departments despite identical hiring standards."],
    punch: "This pattern is known as The Manager Lottery.",
    define: ["The Manager Lottery is when employee success depends on manager effectiveness rather than standardized onboarding."],
    why: ["Without centralized onboarding frameworks, new hire experience is dictated by individual manager habits."],
    fix: ["Blaming candidate fit obscures manager execution gaps.", "Operational fix: Implement standardized 30-60-90 day onboarding playbooks across all teams."],
    transition: "Next Scenario: High Performers Experiencing Burnout"
  },
  {
    name: "The Overload",
    situation: ["The most reliable team members look exhausted while continuing to deliver under heavy volume."],
    punch: "This pattern is known as The Overload.",
    define: ["The Overload is the systematic routing of unassigned work to the most capable team members."],
    why: ["Managers default to assigning urgent work to proven performers, inadvertently penalizing efficiency."],
    fix: ["Wellness programs do not solve unbalanced workload distribution.", "Operational fix: Audit capacity distribution and reassign ad-hoc responsibilities."],
    transition: "Next Scenario: Inter-Departmental Blame"
  },
  {
    name: "The Blame Loop",
    situation: ["Department A blames Department B for delays; Department B claims Department A provides incomplete inputs."],
    punch: "This pattern is known as The Blame Loop.",
    define: ["The Blame Loop is recurring inter-team friction caused by undefined handoff criteria."],
    why: ["Without agreed Service Level Agreements (SLAs) between teams, each department evaluates the handoff by different standards."],
    fix: ["Team-building exercises do not resolve missing workflow specs.", "Operational fix: Define clear input/output requirements between interdependent teams."],
    transition: "Next Scenario: Dilution of Core Cultural Norms"
  },
  {
    name: "The Culture Drift",
    situation: ["Tenured employees note that the company culture 'doesn't feel the same as early days.'"],
    punch: "This pattern is known as Culture Drift.",
    define: ["Culture Drift occurs when cultural norms fail to transition from founder modeling to formal systems as headcount scales."],
    why: ["At 10 people, culture spreads by direct founder proximity. At 100 people, culture spreads through manager behavior."],
    fix: ["Values posters do not drive daily behaviors.", "Operational fix: Codify culture into hiring rubrics, performance reviews, and promotion criteria."],
    transition: "Next Scenario: Expecting HR to Unilaterally Fix Culture"
  },
  {
    name: "The Impossible Ask",
    situation: ["Executive leadership asks HR to 'fix the company culture' via programs."],
    punch: "This pattern is known as The Impossible Ask.",
    define: ["The Impossible Ask is treating culture as an HR initiative rather than the sum of daily leadership decisions."],
    why: ["Culture is shaped by who gets promoted, tolerated, or let go — decisions made primarily by business leaders, not HR."],
    fix: ["HR cannot unilaterally enforce culture without executive operational alignment.", "Operational fix: Hold business leaders accountable for culture metrics within their organizations."],
    transition: "Next Scenario: HR Absorbing Managerial Conflict"
  },
  {
    name: "The HR Bottleneck",
    situation: ["HR's schedule is consumed by mediating routine interpersonal conflicts between managers and direct reports."],
    punch: "This pattern is known as The HR Bottleneck.",
    define: ["The HR Bottleneck occurs when HR absorbs basic management responsibilities, stalling strategic HR initiatives."],
    why: ["When HR resolves manager conflicts directly, managers never build core conflict resolution skills."],
    fix: ["Absorbing routine management tasks creates institutional dependency.", "Operational fix: Coach managers to handle direct conversations while holding them accountable for team resolution."],
    transition: "Next Scenario: High Performers Departing Unexpectedly"
  },
  {
    name: "The Quiet Exit",
    situation: ["A key team member resigns unexpectedly; leadership expresses shock given competitive compensation."],
    punch: "This pattern is known as The Quiet Exit.",
    define: ["A Quiet Exit occurs when retention efforts focus exclusively on compensation while ignoring career progression and agency."],
    why: ["Competitive pay prevents active job hunting but does not retain talent lacking growth clarity and autonomy."],
    fix: ["Off-cycle salary bumps rarely reverse resignation decisions.", "Operational fix: Conduct quarterly career trajectory and impact reviews."],
    transition: "Next Scenario: Organizational Friction During Scaling"
  },
  {
    name: "The Growing Pain",
    situation: ["Headcount doubles rapidly, resulting in duplicated work, missed context, and communication friction."],
    punch: "This pattern is known as The Growing Pain.",
    define: ["The Growing Pain occurs when organizational scale outpaces operational communication infrastructure."],
    why: ["Informal communication habits that worked at 15 people break down predictably between 40 and 80 people."],
    fix: ["Adding headcount to a broken system accelerates confusion.", "Operational fix: Implement structured communication cadences and clear organizational design."],
    transition: "Final Scenario: Urgent Crises vs. Strategic Systems"
  },
  {
    name: "The Fire Or The Fix",
    situation: ["An urgent crisis demands immediate attention while a strategic process project remains on hold."],
    punch: "This pattern is known as The Fire Or The Fix.",
    define: ["The Fire Or The Fix is the ongoing operational trade-off between immediate urgencies and long-term systemic stability."],
    why: ["Urgent problems demand immediate action; systemic fixes require quiet, protected bandwidth. Without protected time, urgent tasks always win."],
    fix: ["Operating in perpetual fire-fighting mode guarantees perpetual crises.", "Operational fix: Dedicate protected bandwidth explicitly to operational system architecture."],
    isFinal: true
  }
];

// Build Slides list
const SLIDES = [{ type: 'home' }];
INTRO.forEach((s, i) => SLIDES.push({ type: 'intro', i }));
MOMENTS.forEach((m, mi) => {
  for (let c = 0; c < 4; c++) {
    SLIDES.push({ type: 'card', m: mi, c });
  }
});
OUTRO.forEach((s, i) => SLIDES.push({ type: 'outro', i }));

export default function HRExperience({ onBackToHub }) {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrent(c => Math.min(SLIDES.length - 1, c + 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrent(c => Math.max(0, c - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const go = (delta) => {
    setCurrent(c => Math.max(0, Math.min(SLIDES.length - 1, c + delta)));
  };

  const jumpToCard = (cardIdx) => {
    if (slide.type === 'card') {
      const targetIndex = 1 + INTRO.length + (slide.m * 4) + cardIdx;
      setCurrent(targetIndex);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-between py-4 px-3 sm:px-6 text-slate-900 bg-white selection:bg-purple-600 selection:text-white">
      
      {/* Main Content Stage */}
      <div className="w-full flex-1 flex flex-col items-center justify-center my-auto">
        {slide.type === 'home' && (
          <div className="w-full max-w-4xl p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xl shadow-slate-200/50 animate-fade-in flex flex-col gap-8 my-auto">
            
            {/* Top Badge & Header */}
            <div className="flex flex-col gap-3 text-left">
              <div className="inline-flex items-center gap-2 w-fit font-mono text-xs text-purple-700 bg-purple-100 border border-purple-200 px-3.5 py-1 rounded-full uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                {HOME.eyebrow}
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                {HOME.title}
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-purple-900 italic">
                {HOME.sub}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-slate-700 font-body leading-relaxed max-w-3xl text-left border-l-3 border-purple-600 pl-4">
              {HOME.description}
            </p>

            {/* Outcomes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {HOME.outcomes.map((item, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col gap-1.5 shadow-sm hover:border-purple-300 transition-all">
                  <span className="font-display font-bold text-purple-800 text-sm">{item.title}</span>
                  <span className="font-body text-xs text-slate-600 leading-relaxed">{item.desc}</span>
                </div>
              ))}
            </div>

            {/* CTA Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3 font-mono text-xs text-slate-600">
                {HOME.specs.map((spec, idx) => (
                  <span key={idx} className="bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                    {spec}
                  </span>
                ))}
              </div>
              <button
                onClick={() => go(1)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-semibold text-sm tracking-wide shadow-lg shadow-purple-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{HOME.cta}</span>
                <span>➔</span>
              </button>
            </div>

          </div>
        )}

        {slide.type === 'intro' && (
          <div className="w-full max-w-2xl p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl text-left space-y-6 animate-fade-in my-auto">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] text-amber-800 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-widest font-semibold">
              <span>STRATEGIC CONTEXT</span>
            </div>
            
            <p className={`text-lg sm:text-2xl font-display leading-relaxed ${INTRO[slide.i].highlight ? 'text-purple-900 font-bold' : 'text-slate-800 font-medium'}`}>
              {INTRO[slide.i].text}
            </p>

            {INTRO[slide.i].cta && (
              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => go(1)}
                  className="px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  {INTRO[slide.i].cta} ➔
                </button>
              </div>
            )}
          </div>
        )}

        {slide.type === 'card' && (
          <div className="w-full max-w-3xl bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-slate-200/50 flex flex-col justify-between space-y-6 animate-fade-in my-auto">
            
            {/* Card Header Row with Number & Title */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-xl bg-purple-100 text-purple-700 font-mono font-bold text-xs flex items-center justify-center border border-purple-200">
                  {slide.m + 1}
                </span>
                <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                  {MOMENTS[slide.m].name}
                </h2>
              </div>
              <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                Scenario {slide.m + 1} / 25
              </span>
            </div>

            {/* Segmented Control Pill Tabs */}
            <div className="bg-slate-100 p-1.5 rounded-2xl grid grid-cols-2 sm:grid-cols-4 gap-1.5 border border-slate-200/60">
              {CARD_LABELS.map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => jumpToCard(idx)}
                  className={`py-2 px-3 rounded-xl font-display text-xs font-semibold text-center transition-all cursor-pointer ${
                    slide.c === idx
                      ? 'bg-white text-purple-950 font-bold shadow-sm border border-slate-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Card Body Content */}
            {slide.c === 0 && (
              <div className="space-y-5 text-left py-2">
                <div className="space-y-3 text-base sm:text-lg text-slate-800 leading-relaxed font-body">
                  {MOMENTS[slide.m].situation.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <div className="p-5 rounded-2xl bg-purple-50/80 border border-purple-200/80 text-purple-950 font-display font-bold text-lg sm:text-xl shadow-xs">
                  {MOMENTS[slide.m].punch}
                </div>
              </div>
            )}

            {slide.c === 1 && (
              <div className="space-y-5 text-left py-2">
                <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-widest block">FORMAL PATTERN DIAGNOSIS</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                  {MOMENTS[slide.m].name}
                </h3>
                <div className="space-y-3 text-base sm:text-lg text-slate-800 leading-relaxed font-body">
                  {MOMENTS[slide.m].define.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {slide.c === 2 && (
              <div className="space-y-5 text-left py-2">
                <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest block">ROOT CAUSE MECHANICS</span>
                <div className="space-y-3 text-base sm:text-lg text-slate-800 leading-relaxed font-body">
                  {MOMENTS[slide.m].why.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            )}

            {slide.c === 3 && (
              <div className="space-y-5 text-left py-2">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">THE ACTIONABLE FIX</span>
                <div className="space-y-3 text-base sm:text-lg text-slate-800 leading-relaxed font-body">
                  {MOMENTS[slide.m].fix.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                {MOMENTS[slide.m].transition && (
                  <div className="text-xs font-mono italic text-slate-500 pt-3 border-t border-slate-100">
                    {MOMENTS[slide.m].transition}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {slide.type === 'outro' && (
          <div className="w-full max-w-xl p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-xl text-center space-y-6 animate-fade-in my-auto">
            {OUTRO[slide.i].final ? (
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-display">Fire fighting?</h2>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-purple-700 font-display">Or building rockstars?</h2>
                <button
                  onClick={onBackToHub}
                  className="mt-4 px-8 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-display font-semibold text-xs uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Return to Experience Hub
                </button>
              </div>
            ) : (
              <p className={`text-lg sm:text-2xl font-display leading-relaxed ${OUTRO[slide.i].highlight ? 'text-purple-900 font-bold' : 'text-slate-800'}`}>
                {OUTRO[slide.i].text}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Navigation Footer Controls (Hidden on Homepage) */}
      {slide.type !== 'home' && (
        <div className="w-full flex items-center justify-between shrink-0 pt-3 border-t border-slate-200 mt-2">
          <button
            onClick={() => go(-1)}
            disabled={current === 0}
            className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-semibold disabled:opacity-30 disabled:pointer-events-none hover:bg-slate-200 cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          <span className="text-[11px] font-mono text-slate-500 hidden sm:inline font-medium">
            Use ← / → arrow keys to navigate
          </span>

          <button
            onClick={() => go(1)}
            disabled={current === SLIDES.length - 1}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-display font-semibold tracking-wide cursor-pointer shadow-md transition-all flex items-center gap-1.5"
          >
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      )}
    </div>
  );
}
