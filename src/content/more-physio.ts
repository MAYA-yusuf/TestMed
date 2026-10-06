import type { Extra } from "./more-types";

export const physioExtras: Record<string, Extra> = {
  "physiotherapy-pht-101": {
    note: "Score the work by what the person can do again: stairs, class, or a walk to the bus, not by a perfect picture. Activity is the task. Participation is the life role. The environment and the person's goals change the plan, so two sprains are not one protocol. Chest pain with sweat, a hot swollen calf, or new bladder trouble with numbness is not a stretch class. Refer.",
    cards: [
      ["Activity", "A task, such as stairs or standing from a chair."],
      ["Environment", "The place and tools around the person, which change the plan."],
      ["Education", "Teaching that counts as treatment because it changes how someone moves."],
      ["Referral", "Sending the person for medical review when the pattern is outside physiotherapy."],
    ],
    questions: [
      ["Climbing stairs sits mainly in which ICF idea?", ["Activity", "A drug dose", "Atomic number", "Only the scan"], 0, "A task is activity. Missing the team because of it is participation."],
      ["Chest pain with sweating during a session means…", ["Add a heavier squat", "Stop and get urgent help", "Finish the set", "Call it a yellow flag and stretch"], 1, "That pattern is an emergency. It is not an exercise progression."],
      ["The edge of a student scope is…", ["Treat any neighbour from this app", "Know when a pattern needs a different profession", "Ignore red flags if they can walk", "Replace a medical review"], 1, "Scope includes the work you are trained to do and the work you must hand on."],
      ["Why can two people with the same sprain need different plans?", ["Goals, stairs, and support differ", "ICF bans exercise", "Sprains are identical in every life", "Only shoe colour matters"], 0, "Context is part of the model. The tissue is not the whole person."],
    ],
  },
  "physiotherapy-pht-103": {
    note: "A useful note can be followed tomorrow. Subjective is the story and the goal. Objective is the number you measured. Assessment is your reasoning today, including what you did not find. Plan is the dose and the review date. 'Pain 6 out of 10, knee bend about 90 degrees, review in two days' beats a vague 'better'. If the exercise ignores traffic, school, and stairs in Lagos, it will stay in the bag.",
    cards: [
      ["Review date", "The day you will look again. It belongs in the plan."],
      ["Working explanation", "What you think is going on today, written so the next person can see it."],
      ["Handover", "Passing the reasoning, not only a list of exercises."],
      ["Exercise dose", "What to do, how hard, how often, and when to progress it."],
    ],
    questions: [
      ["'No red flags seen today' belongs with…", ["The assessment, as a pertinent negative", "The letterhead only", "A hidden line you skip", "The person's shoe size"], 0, "Writing what you looked for and did not find is part of safe handover."],
      ["A plan without a review date is weak because…", ["Nobody knows when to judge the dose", "Dates are decorative", "Review replaces consent", "SOAP bans dates"], 0, "You cannot tell if the dose worked if you never look again."],
      ["Which line is objective?", ["Pain started in the match", "Single-leg stand 4 seconds", "I want to play next month", "Please be gentle"], 1, "A timed measurement is objective. The story and the goal are subjective."],
      ["Adherence fails most often when…", ["The plan cannot be lived in the person's real day", "The page is short", "You used a number", "You compared both sides"], 0, "Traffic, stairs, and school time are part of whether the exercise happens."],
    ],
  },
  "physiotherapy-ana-111": {
    note: "Say the joint, the direction, and the plane. Elbow bend is sagittal flexion. Arm out to the side is frontal abduction. Turning the head to say no is transverse rotation. A squat flexes hips and knees. A side step abducts the hip. Naming the plane before the exercise keeps later assessment honest. Watching a classmate walk is vocabulary practice, not a corridor diagnosis.",
    cards: [
      ["Extension", "Straightening that, at most limb joints, opens the joint angle."],
      ["Rotation", "Turning around an axis. It lives in the transverse plane."],
      ["Side bend", "A frontal-plane movement of the trunk."],
      ["Midline", "The imaginary centre line. Abduction moves away from it."],
    ],
    questions: [
      ["Nodding yes is mainly…", ["Sagittal flexion and extension", "Transverse rotation", "Frontal abduction of the jaw only", "A heart-valve motion"], 0, "Yes is a sagittal nod. No is rotation in the transverse plane."],
      ["A step out to the side at the hip is…", ["Abduction in the frontal plane", "Elbow flexion", "Only rotation", "A quiet breath"], 0, "Away from the midline, frontal plane."],
      ["Extension of the knee means the knee is…", ["Straightening", "Bending further by definition", "Leaving the body", "Rotating as its only motion"], 0, "Extension opens the knee toward straight. Flexion bends it."],
      ["Before you name an exercise you should be able to name…", ["The joint, the direction, and the plane", "Only the song in the gym", "The person's password", "A drug dose"], 0, "Sloppy direction words make sloppy assessment later."],
    ],
  },
  "physiotherapy-ana-211": {
    note: "Watch first, then name the phase. One cycle is heel strike back to the same heel. Stance is about 60 percent, swing about 40 percent. An antalgic gait hurries off the painful leg. A slapping foot or a dragging toe may mean the ankle is not lifting. Look at the trunk and pelvis as well as the sore joint. Cadence is steps per minute. Step length is the forward distance of one step.",
    cards: [
      ["Heel strike", "The moment the heel meets the ground. One cycle starts here."],
      ["Foot clearance", "Lifting the foot so the toes do not drag in swing."],
      ["Pelvis", "Watch it during gait. The limp is not always in the sore joint alone."],
      ["Symmetry", "Similar time and step length on the left and the right."],
    ],
    questions: [
      ["Pre-swing is part of…", ["Stance", "A sitting test", "Only the arms", "A blood test"], 0, "The foot is still on the ground as weight moves off it. That is late stance."],
      ["Less time on the painful leg is called…", ["Antalgic gait", "Perfect symmetry", "A longer step on the sore side as the definition", "Swing only"], 0, "People unload a painful limb. Stance on that side shortens."],
      ["You should name the phase…", ["After you have watched the walk", "Before you look, from the diagnosis word alone", "Only from a scan", "Never"], 0, "Eyes first. The label comes after you see which piece looks wrong."],
      ["Step length is…", ["The forward distance of one step", "Steps per minute", "Pain out of 10", "A plane of the elbow"], 0, "Cadence is the rate. Step length is the distance."],
    ],
  },
  "physiotherapy-pht-201": {
    note: "Write exercise the way you would respect a medicine. Mobility visits range without pain that lingers. Strength is hard on the last repetitions, then recovery so the tissue adapts. Balance is just unstable enough, near a support at first. You improve the task you practise, so stairs must appear in a stair plan. Change one variable at a time. Pain that is sharply worse the next morning means the dose was too high. Two exercises done well beat twelve left in a bag.",
    cards: [
      ["Mobility work", "Movement through range without forcing pain that lingers."],
      ["Balance dose", "Practice just unstable enough, with a support nearby at first."],
      ["One variable", "Change load, or reps, or speed, or complexity — not all at once."],
      ["Next-morning pain", "A study rule: a clear flare the next day means the dose was too much."],
    ],
    questions: [
      ["Seated knee extensions alone will not teach stairs because of…", ["Specificity", "The mole", "A buffer", "An expiry date"], 0, "You improve the task you practise. Stairs have to be in the plan."],
      ["Changing load, speed, and a new skill on the same day makes it hard to know…", ["Which change helped or hurt", "The person's name", "The plane of the elbow", "Nothing. More is always better"], 0, "One variable at a time tells you what the tissue tolerated."],
      ["Strength work needs recovery because…", ["Tissue adapts between hard sessions", "Muscle should forget the movement", "Pain must last all week", "Rest removes all future load"], 0, "The adaptation is not only during the set."],
      ["A useful study rule about pain is…", ["A next-day flare means reduce the dose", "Maximal pain is the goal", "Any warmth means stop forever", "Ignore the next morning"], 0, "Settling quickly may be acceptable. A flare the next day was too much. It is a study rule, not a personal prescription."],
    ],
  },
  "physiotherapy-kin-201": {
    note: "A lever turns on a fulcrum. Torque is the turning effect, and a longer moment arm means more torque for the same force, which is why posture can unload a painful joint. The centre of mass must stay over the base of support or the person steps or falls. A stick adds a contact and widens that base. A soft knee bend on landing spreads the ground reaction force over more time. You are learning safety, not designing an implant.",
    cards: [
      ["Fulcrum", "The pivot a lever turns on."],
      ["Moment arm", "The distance that lets a force create torque."],
      ["Soft landing", "Bending to spread landing force over more time."],
      ["Walking stick", "An extra ground contact that widens the base of support."],
    ],
    questions: [
      ["A longer moment arm with the same force produces…", ["More torque", "No turning effect", "A lower atomic number", "Less balance always"], 0, "Torque is force times the moment arm. Lengthen the arm and the turning effect rises."],
      ["If the centre of mass leaves the base of support, the person must…", ["Step, or they fall", "Gain haemoglobin", "Stop all muscle work by law", "Become pain-free"], 0, "Balance is that relationship. A wider base gives more room."],
      ["A stick helps mainly by…", ["Adding a contact with the ground", "Replacing the heart", "Diagnosing a clot", "Changing pH"], 0, "The extra contact widens the base of support."],
      ["Landing with a giving knee tends to…", ["Spread force over more time", "Remove gravity", "Lock every joint as the only safe choice", "Stop ground reaction force existing"], 0, "The floor still pushes back. The bend absorbs that push."],
    ],
  },
  "physiotherapy-pht-301": {
    note: "Keep the order: history, look, active movement, passive movement, resisted tests, then palpation. Special tests come last and only if they change the plan. Compare with the other side. Record degrees when you can, and the end-feel in words. An empty, very painful end-feel is a reason to stop forcing, not to push through. Inability to bear weight after trauma needs a clinician. Ottawa ankle rules are an imaging guide from a current source, not a pitch-side guess.",
    cards: [
      ["Observation", "Looking for swelling, wasting, and how the person stands, before you push."],
      ["Palpation", "Feeling the part, after movement tests, not instead of the history."],
      ["Asymmetry", "A difference from the other side. It is often the finding."],
      ["Empty end-feel", "Pain stops the movement before a tissue barrier. Do not force it."],
    ],
    questions: [
      ["The first step of this assessment is…", ["The history", "The rarest special test", "A maximal push", "The discharge letter"], 0, "The story decides what you touch and what you must not force."],
      ["You perform passive movement while the person…", ["Relaxes", "Sprints", "Holds a maximal contraction", "Leaves the room"], 0, "Passive means you move it. Active means they do. Resisted means they contract against you."],
      ["A special test you cannot explain should be…", ["Left undone", "Done harder", "The opening of every session", "Used to impress"], 0, "If it does not change the plan, it is theatre."],
      ["After trauma, inability to bear weight should…", ["Go to a clinician, and imaging rules may apply", "Be graded by memory on the pitch", "Be stretched until the range returns today", "Be ignored if the other ankle is fine"], 0, "That is not a student return-to-play decision."],
    ],
  },
  "physiotherapy-pht-303": {
    note: "Early soft-tissue care is often taught as POLICE: protect, optimally load, ice for comfort, compression, and elevation. Optimal loading is not complete rest and not a heroic workout. A locked joint or a joint that gives way needs review, not another lap. Osteoarthritis is a movement problem as well as a joint problem: sensible exercise is treatment. Do not heat a fresh, hot, swollen joint. Do not decide a fracture from a textbook sentence.",
    cards: [
      ["Protection", "Shield the injured part from a second knock while it settles."],
      ["Compression", "A firm wrap that limits swelling. It must not cut off circulation."],
      ["Elevation", "Raising the part to help swelling settle."],
      ["Giving way", "The joint buckles. It needs review, not another hard session."],
    ],
    questions: [
      ["POLICE includes optimal loading, which means…", ["Early safe load, not bed rest and not a maximal workout", "No movement for a month as the only choice", "Heat on a fresh hot swelling", "Ignoring a locked joint"], 0, "Protect, then load the tissue at a dose it can accept."],
      ["Ice in this teaching is for…", ["Comfort", "Proving the diagnosis", "Replacing a review of a locked joint", "Heating the swelling"], 0, "It is a comfort measure. It is not a diagnosis and not a reason to skip red flags."],
      ["A joint that locks and will not move fully should…", ["Be reviewed", "Be forced to the end of range", "Be called perfect loading", "Wait until 500 level"], 0, "Locking is not a simple stretch target."],
      ["For osteoarthritis, exercise is…", ["Part of treatment", "Always forbidden", "Only for athletes", "A replacement for red-flag checks"], 0, "Sensible movement helps. The dose still has to fit the person."],
    ],
  },
  "physiotherapy-pht-305": {
    note: "Most low back pain changes with posture and movement and has no dangerous disease behind it. The useful advice is to keep moving in a way the person can actually do. Red flags change the pathway: pain that wakes them, unexplained weight loss, a history of cancer, fever with back pain, progressive leg weakness, or new trouble with bladder control. Those are for urgent medical review. Do not stretch through them and do not announce a diagnosis.",
    cards: [
      ["Progressive weakness", "Leg strength getting worse. It is a reason to refer, not to add load."],
      ["Night pain", "Back pain that wakes the person. It needs a medical look, not a harder stretch."],
      ["Fever with back pain", "A combination that can mean infection. Refer."],
      ["Keep moving", "The usual advice when back pain is mechanical and red flags are absent."],
    ],
    questions: [
      ["Most simple low back pain is helped by…", ["Staying gently active", "Complete bed rest for weeks as the first plan", "Ignoring weakness that is spreading", "A private diagnosis from an app"], 0, "Movement that the person can manage beats prolonged rest, once serious patterns are excluded."],
      ["Unexplained weight loss with back pain should…", ["Trigger medical review", "Be stretched daily with no questions", "Be called a yellow flag only and ignored", "Wait for a sports season"], 0, "It is a red flag. You do not exercise through it as if it were ordinary ache."],
      ["New trouble controlling the bladder with back pain is…", ["An emergency pathway", "A reason to add sit-ups", "Normal after a long walk", "A balance score"], 0, "That pattern needs urgent medical review, not a home exercise upgrade."],
      ["A red flag is…", ["A feature that changes the pathway toward medical review", "Proof you may name the disease", "A cue to push harder", "Only a sports term"], 0, "It is a warning to refer. It is not a diagnosis you announce."],
    ],
  },
  "physiotherapy-pht-401": {
    note: "A stroke is a sudden problem of blood flow in the brain. Face, arm, or speech change is an emergency first, not a rehabilitation session. After the person is medically stable, practice is task-specific: sitting, standing, and reaching that look like real life, little and often. The weak side may be ignored (neglect). The weak shoulder needs protection, not a yank. Swallowing trouble is a medical safety issue. This page does not clear anyone to start exercises at home after a new stroke.",
    cards: [
      ["Sudden onset", "Stroke symptoms start fast. New ones are an emergency."],
      ["Task practice", "Repeating a real action, such as standing up, so the brain rehearses that action."],
      ["Weak shoulder", "Support it. Do not pull the arm to 'stretch it out'."],
      ["Medical stability", "The person must be safe to practise. Ambition waits for that."],
    ],
    questions: [
      ["A new facial droop and muddled speech should…", ["Start with heavy weights", "Get emergency care first", "Wait for the next placement", "Be treated as ordinary stiffness"], 1, "Sudden face, arm, or speech change is an emergency. Rehabilitation comes after medical care."],
      ["Task-specific practice means…", ["Practising the real action you want back", "Only mental arithmetic", "Pulling the weak arm overhead", "Rest until tone is zero"], 0, "The brain learns the task you repeat. Sitting practice builds sitting."],
      ["Neglect means the person may…", ["Miss one side of space", "Have a perfect scan and no weakness", "Need no supervision", "Be cured by a shoulder yank"], 0, "They may not notice the weak side. Set up the room so that side is not forgotten."],
      ["The weak shoulder should be…", ["Supported, not pulled", "Yanked to regain range today", "Ignored because it is painless", "Used as a hinge for someone else to hang on"], 0, "A heavy pull can injure a shoulder that has lost muscle support."],
    ],
  },
  "physiotherapy-pht-403": {
    note: "Airway clearance uses position, relaxed breathing, and a huff or cough to move sputum. After abdominal surgery a supported cough, with hands or a pillow on the wound, hurts less and still clears the chest. Breathlessness is often easier sitting up and leaning forward. Cardiac rehabilitation is supervised and graded, and it starts only when a clinician has cleared the person. Chest pain on effort is a stop rule. Do not invent an exercise test at home after a heart event.",
    cards: [
      ["Supported cough", "Hands or a pillow on a surgical wound so the cough can still clear sputum."],
      ["Forward lean", "Sitting and leaning forward often eases breathlessness."],
      ["Sputum", "Mucus in the airways. Clearance work aims to move it."],
      ["Supervised rehab", "Heart and lung exercise that a clinician has cleared and a team watches."],
    ],
    questions: [
      ["A huff is used to…", ["Move sputum with an open throat", "Replace emergency care", "Test blood sugar", "Stretch the ankle"], 0, "It is a forced breath out that shifts mucus. It is part of airway clearance, not a cure-all."],
      ["After abdominal surgery, supporting the wound during a cough…", ["Lets the person cough with less pain", "Is forbidden", "Replaces walking", "Stops all sputum moving"], 0, "The cough still needs to happen. Support makes it possible."],
      ["Someone very breathless often feels easier…", ["Sitting up, perhaps leaning forward", "Lying flat with no pillow", "Holding their breath for a minute", "Face down after a big meal"], 0, "Upright posture helps the mechanics of breathing. Lying flat can worsen it."],
      ["Chest pain that comes on with effort during rehab means…", ["Stop and get the agreed medical help", "Add speed", "Ignore it if the watch looks fine", "Switch to a maximal test"], 0, "That is a stop rule. Cardiac rehab is supervised for this reason."],
    ],
  },
  "physiotherapy-pht-405": {
    note: "Falls are usually several risks at once: weak legs, poor vision, dizzy spells, medicines, a loose mat, dim stairs. Physiotherapy can train strength, balance, gait, and confidence. The Berg Balance Scale scores balance out of 56, and under 45 is a teaching flag for higher risk, not a label you shout across a room. Practise the task that fails: turns, steps, reaching. A near-fall is data. Stay within arm's reach when the task is new.",
    cards: [
      ["Home hazard", "A loose mat, dim stair, or trailing wire that adds to fall risk."],
      ["Ankle strategy", "Small balance corrections at the ankle when the sway is small."],
      ["Supervision", "Staying close enough to help when balance practice is new."],
      ["Turns", "A common moment of falling. Practise them, do not only practise standing still."],
    ],
    questions: [
      ["The Berg Balance Scale is scored out of…", ["56", "10", "100 always", "6 minutes"], 0, "56 is the maximum. Under 45 is a teaching flag for fall risk, used with the whole picture."],
      ["A loose mat in the hallway is…", ["A home hazard worth changing", "Irrelevant to falls", "A balance score", "A drug"], 0, "Environment is part of the fall story, not only the legs."],
      ["Balance practice should emphasise…", ["The task that actually fails, such as turning", "Only sitting with the eyes closed for an hour", "Removing all walking aids forever on day one", "A dark stair with no rail"], 0, "Specificity again. Train the moment they lose balance."],
      ["When a new balance task looks unsteady you should…", ["Stay close enough to steady them", "Watch from the next room", "Add a second task immediately", "Close the curtains and turn off the light"], 0, "Supervision is part of the dose."],
    ],
  },
  "physiotherapy-pht-501": {
    note: "Reason in a loop: facts, a likely pattern, the finding that would prove you wrong, an action, then a review. An outcome measure turns the story into a number you can repeat, such as a six-minute walk. Use the same measure the same way or the change is noise. A better score that misses the life task is not success. Agree the goal with the person. Consent can be withdrawn.",
    cards: [
      ["Repeatable test", "The same measure, done the same way, so a change means something."],
      ["Life task", "The real goal, such as the school run. A score that ignores it is incomplete."],
      ["Review loop", "Act, then look again. Reasoning does not stop at the first guess."],
      ["Withdrawn consent", "The person can stop. Agreement is not permanent."],
    ],
    questions: [
      ["A finding that would prove your idea wrong is worth naming because…", ["It stops you seeing only what you hoped", "It lengthens the note for show", "It replaces measurement", "Hypotheses must never change"], 0, "Look for the disconfirming fact on purpose."],
      ["Changing the test each week makes progress…", ["Hard to trust", "More accurate by magic", "Unnecessary to record", "A legal requirement"], 0, "Use the same measure the same way."],
      ["The goal should be agreed with…", ["The person", "Only the timetable", "A stranger on the internet", "Nobody"], 0, "It is their life task. Consent includes knowing what you are aiming at."],
      ["A higher balance score with no change in the feared walk means…", ["You have not finished the job", "Success by definition", "The measure was illegal", "You should hide the walk"], 0, "The number serves the life task. It does not replace it."],
    ],
  },
  "physiotherapy-pht-503": {
    note: "A sports history is the same assessment at match speed. Ask how it happened, whether they can bear weight, and where it is tender. Cannot bear weight is not your solo return-to-play decision. A sprain is a ligament. A strain is a muscle or tendon. If you suspect concussion — a blow to the head with confusion, headache, dizziness, or they just 'do not feel right' — they leave the field and do not return the same day. Load comes back in steps, not in one heroic session.",
    cards: [
      ["Leave the field", "The first action when concussion is suspected."],
      ["Same-day return", "Not allowed when concussion is suspected."],
      ["Tenderness", "Where it hurts to touch. It guides whether a guideline x-ray rule applies."],
      ["Stepwise load", "Return effort in stages, not all at once."],
    ],
    questions: [
      ["A muscle or tendon injury is a…", ["Strain", "Sprain", "Concussion", "Fracture by definition"], 0, "Strain is muscle or tendon. Sprain is ligament."],
      ["Suspected concussion means…", ["Off the field and no same-day return", "Finish the match if the score is close", "A brisk header drill to test them", "Ignore headache"], 0, "Remove them and have them assessed. Same-day return is not the plan."],
      ["Someone who cannot bear weight after a twist should…", ["Be reviewed, not cleared by you alone", "Sprint to prove the ankle", "Ice it and play the final", "Stretch into the pain for ten minutes"], 0, "Weight-bearing failure can mean a fracture. It is not a sideline clearance."],
      ["Load management after injury means…", ["Raising effort in steps while you watch the response", "Maximum pain on day one", "Rest forever", "A new sport every session"], 0, "The tissue adapts to the dose you actually give, not the dose you wish."],
    ],
  },
  "physiotherapy-pht-507": {
    note: "On placement, introduce yourself, say what you will do, and stop if the person says stop. Keep stories off social media, including details that could identify someone. Stay inside what your supervisor has allowed. If you make an error, say so early. Wash your hands. Dignity means explaining, covering, and not talking about the person as if they were not there. This hall is not permission to treat a neighbour.",
    cards: [
      ["Introduction", "Your name and role, before you touch anyone."],
      ["Social media", "Not a place for placement stories that could identify a person."],
      ["Early report", "Tell your supervisor about an error as soon as you know."],
      ["Privacy in the room", "Explain, cover, and do not talk over the person."],
    ],
    questions: [
      ["If the person says stop, you…", ["Stop", "Finish the technique because you started", "Argue", "Film it"], 0, "Consent can be withdrawn in the moment."],
      ["A placement story on social media is unsafe when…", ["Someone could be identified", "You used no names but the ward and the day are obvious", "You think it is funny", "All of these"], 3, "Confidentiality includes details, not only the full name. Do not post the story."],
      ["Work beyond what your supervisor allowed is…", ["Outside your scope that day", "Fine if you are confident", "Required to look keen", "A private favour"], 0, "Supervision draws the line. Keen is not the same as safe."],
      ["Hand hygiene is…", ["Part of professional care", "Optional if you are late", "Only for surgeons", "A replacement for consent"], 0, "It protects the person and the next person."],
    ],
  },
};
