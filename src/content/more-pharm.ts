import type { Extra } from "./more-types";

export const pharmacyExtras: Record<string, Extra> = {
  "pharmacy-pct-101": {
    note: "A medicine is the drug plus its form and its route. Tablets, liquids, creams, inhalers, and injections are not automatically interchangeable. The generic name is the one to read when packs look alike. A modified-release tablet must not be crushed unless a pharmacist says that exact product allows it. Even as a student, the honest job is explanation. A person can refuse after they understand. This hall never tells you to take or give a drug.",
    cards: [
      ["Interchange", "Swapping one form or brand for another. It is not automatic."],
      ["Crushing", "Breaking a tablet. It can dump a modified-release dose all at once."],
      ["Explanation", "Telling the person what the medicine is for, in words they can use."],
      ["Refusal", "The person may decline after a real explanation."],
    ],
    questions: [
      ["A capsule and an injection of the same drug are…", ["Not automatically the same in speed and risk", "Always identical", "Illegal to label", "Isotopes"], 0, "The form changes how the drug arrives. Do not swap them on a guess."],
      ["You trust which name when two boxes look alike?", ["The generic name", "The brightest colour", "The slogan", "The cap shape"], 0, "Brands mislead. The generic name identifies the drug."],
      ["Crushing a modified-release tablet can…", ["Release the dose too fast", "Always make it safer", "Remove the need for a label", "Turn it into a vaccine"], 0, "The slow design is the point. Destroy it and the dose can arrive at once."],
      ["After a real explanation, a person…", ["May refuse the medicine", "Must take it", "Loses the right to ask", "Must sign a blank page"], 0, "Refusal is part of care. You do not pressure someone who has understood and said no."],
    ],
  },
  "pharmacy-chm-111": {
    note: "Acids donate protons. Bases accept them. pKa is the pH where half of a weak acid or base is ionised. The charged form likes water and crosses fatty membranes less easily, so a small pH change can change absorption. Light, heat, and moisture speed oxidation and hydrolysis, which is why some bottles are amber and some medicines are kept cool. An expiry date assumes the pack was stored as the label says. Do not keep medicines above a cooker.",
    cards: [
      ["Proton", "The particle an acid donates. pH tracks how many are free."],
      ["Uncharged form", "Usually crosses a fatty membrane more easily than the charged form."],
      ["Amber bottle", "Tinted to protect the contents from light."],
      ["Moisture", "Speeds hydrolysis. Bathrooms and steamy kitchens are poor cupboards."],
    ],
    questions: [
      ["An acid, in this lesson, is a substance that…", ["Donates a proton", "Is always a tablet", "Accepts protons as the definition of an acid", "Has no pH behaviour"], 0, "Acids give up protons. Bases accept them."],
      ["The uncharged form of a drug usually…", ["Crosses lipid membranes more easily", "Cannot exist", "Is always the injectable form", "Has no relation to pKa"], 0, "Charge likes water. Losing the charge helps the molecule cross fat-like barriers."],
      ["Storing a light-sensitive medicine in the sun can…", ["Spoil it before the expiry date", "Improve the assay", "Be required", "Remove all side effects"], 0, "Expiry assumes correct storage. Heat, light, and water can ruin a pack early."],
      ["Hydrolysis is breakdown by…", ["Water", "Sound", "A walking stick", "A spacer"], 0, "Water is the reactant. That is why moisture matters."],
    ],
  },
  "pharmacy-mat-101": {
    note: "Write the unit at every step. 1 gram is 1000 milligrams. 1 milligram is 1000 micrograms. A thousand-fold slip is how serious errors are born. Percent weight in volume means grams in 100 millilitres, so 0.9% w/v is 0.9 g in 100 mL. Volume needed is wanted amount divided by the stock amount, times the stock volume. If the answer is a bucket when you expected a spoon, convert again. These are practice numbers, never a dose for a person.",
    cards: [
      ["Milligram", "One thousandth of a gram. 1 g = 1000 mg."],
      ["Thousand-fold", "The size of a milligram versus microgram mistake."],
      ["5 mL", "A common stock volume on a practice label. Confirm it. Do not assume a kitchen spoon."],
      ["Unit check", "If the answer's unit looks absurd, do the conversion again."],
    ],
    questions: [
      ["2 grams equal how many milligrams?", ["200", "2000", "20", "2"], 1, "1 g is 1000 mg, so 2 g is 2000 mg. Practice arithmetic only."],
      ["1 milligram equals how many micrograms?", ["1000", "100", "10", "1"], 0, "The microgram is a thousandth of a milligram. Mixing them is a thousand-fold error."],
      ["5% w/v means…", ["5 g in 100 mL", "5 mg in a bath", "5 tablets", "50 percent of a person"], 0, "Percent w/v is grams per 100 mL."],
      ["A practice label says 250 mg in 5 mL. How many mL contain 500 mg?", ["5 mL", "10 mL", "2 mL", "500 mL"], 1, "500 is twice 250, so twice 5 mL. This is practice, not a dose to give."],
    ],
  },
  "pharmacy-pct-201": {
    note: "Solutions are already dissolved. Suspensions settle, so you shake them. Syrups help someone who cannot swallow a tablet. Ointments are greasier than creams and stay on the skin longer. Enteric coats are meant to pass the stomach. Crushing them misses the point. Inhaler mist reaches the lungs only if the technique is right, and a spacer often helps. Injections must be sterile. You do not sterilise a kitchen spoon. A cloudy bottle that should be clear is not a guess.",
    cards: [
      ["Syrup", "A sweet solution that can help someone who cannot swallow a tablet."],
      ["Cream", "A skin product that is less greasy than an ointment and usually stays less long."],
      ["Shake", "What you do to a suspension so the particles are even before a dose is measured."],
      ["Cloudy surprise", "A product that should be clear and is not. Do not guess that it is fine."],
    ],
    questions: [
      ["Particles that settle in a liquid describe a…", ["Suspension", "True solution", "Gas", "Enteric coat"], 0, "Suspensions are not fully dissolved. Shake them."],
      ["An enteric coat is meant to…", ["Delay release until the tablet has passed the stomach", "Make the tablet chewable by habit", "Replace sterility", "Turn a tablet into an inhaler"], 0, "Crushing or chewing removes that protection."],
      ["A spacer helps an inhaler by…", ["Getting more of the mist to the lungs", "Making the device louder", "Replacing the drug", "Measuring blood pressure"], 0, "Technique decides whether the drug arrives. The spacer is part of that technique."],
      ["A kitchen spoon is not a way to…", ["Sterilise an injection", "Stir tea", "Exist in a drawer", "Hold sugar"], 0, "Injections must be sterile from a proper process. Home spoons are not that process."],
    ],
  },
  "pharmacy-pha-201": {
    note: "Follow the drug: absorption into blood, distribution around the body, metabolism mostly in the liver, excretion often in urine. Bound drug on plasma protein cannot act. Half-life is the time for the plasma amount to fall by half. With regular dosing a plateau is approached after about four to five half-lives. Swallowed drugs may lose a large share to first-pass metabolism. Agonists turn a receptor on. Antagonists block it. Do not adjust a real dose from this page.",
    cards: [
      ["Distribution", "Where the drug goes after it is in the blood."],
      ["Plasma protein binding", "Drug stuck to protein in blood. Bound drug is not free to act."],
      ["Excretion", "Removal of the drug, often in urine."],
      ["Beta-agonist", "A drug that activates beta receptors. Salbutamol opens airways this way."],
    ],
    questions: [
      ["Metabolism of many drugs happens mainly in the…", ["Liver", "Fingernail", "Spacer", "Label"], 0, "The liver changes the drug. The kidney often removes it."],
      ["Drug bound to plasma protein is…", ["Not free to act while it stays bound", "The only form that works", "Already excreted", "A receptor antagonist by definition"], 0, "Only free drug can reach the receptor. Binding is a reservoir."],
      ["About four to five half-lives of regular dosing brings you near…", ["Steady state", "The first tablet's expiry", "A single missed dose's total loss always", "Zero drug by law"], 0, "Input and output then roughly match. That is the teaching estimate, not a personal chart."],
      ["A beta-blocker can be a problem in asthma because it may…", ["Tighten airways in some people", "Be the same word as salbutamol", "Replace oxygen", "Have no receptor"], 0, "Blocking beta receptors is not the same as opening the airway. The choice belongs to a prescriber who knows the person."],
    ],
  },
  "pharmacy-phg-201": {
    note: "A crude drug is a dried plant or other natural part used as a starting material. Alkaloids, glycosides, and volatile oils are examples of constituents. The same market nickname can mean different plants, so the scientific name matters. Traditional use is not a measured dose. Natural does not mean safe: herbs can be toxic, contaminated, or able to change the effect of a prescribed medicine. Do not swap a prescribed medicine for an unnamed leaf.",
    cards: [
      ["Alkaloid", "A nitrogen-containing plant constituent. Some are potent medicines or poisons."],
      ["Glycoside", "A plant constituent with a sugar attached. Some are pharmacologically active."],
      ["Market nickname", "An unreliable name. Two sellers may mean two different plants."],
      ["Contamination", "Dirt, microbes, or the wrong material in a natural product."],
    ],
    questions: [
      ["A scientific name is preferred because…", ["Market names can point to different plants", "Latin removes all toxicity", "It is only decoration", "It sets the dose"], 0, "Identity comes before any talk of effect."],
      ["'Natural' means…", ["It can still harm or interact", "It is always safe", "It can replace prescribed insulin", "It needs no label"], 0, "Nature includes poisons. Safety is not a slogan."],
      ["Adulteration is…", ["Mixing in the wrong or cheaper material", "A perfect identity test", "A sterile injection", "A correct assay"], 0, "If the contents are not what was promised, the product has failed."],
      ["A herb offered in place of a prescribed malaria or diabetes medicine should…", ["Not replace that medicine", "Be taken secretly", "Be injected", "Be assumed pure"], 0, "Do not swap a prescribed treatment for an unnamed product."],
    ],
  },
  "pharmacy-pct-301": {
    note: "Excipients are not the drug, but they have jobs: fillers, binders, disintegrants, and lubricants. If a tablet does not break apart, it may not dissolve, and what does not dissolve may not be absorbed. Identify a tablet by the label and the imprint, never by colour alone. Measure liquids with an oral syringe or a marked cup. Household spoons vary. Some liquids expire sooner after opening. Write the opened-on date when the label says to.",
    cards: [
      ["Binder", "Helps a tablet hold together during making."],
      ["Lubricant", "Helps the powder move through the tablet machine. It is not the drug."],
      ["Marked cup", "A real measure. A household spoon is not."],
      ["Look-alike colour", "Shared by many tablets. Colour is not identification."],
    ],
    questions: [
      ["A tablet that never disintegrates may…", ["Pass through without releasing the drug", "Work faster by definition", "Become sterile", "Change its generic name"], 0, "Break-up comes before dissolution, and dissolution comes before absorption."],
      ["The safe way to identify a tablet is…", ["The label and imprint, not colour alone", "Colour only", "The size of the bottle cap", "A guess from memory"], 0, "Colours are shared. Read the name and the strength."],
      ["A household spoon is a poor measure because…", ["Its volume varies", "It is always exactly 5 mL", "It sterilises the liquid", "It shakes a solution into a suspension"], 0, "Use an oral syringe or a marked cup."],
      ["An opened multi-dose liquid may…", ["Expire sooner than the factory date alone", "Last forever once opened", "Need to be frozen on the label's behalf always", "Become an injection"], 0, "Write the opened date when the label tells you the in-use life is shorter."],
    ],
  },
  "pharmacy-pha-301": {
    note: "Learn the name endings as hints, not as a prescription. Many ACE inhibitors end in -pril. They relax vessels and are used in high blood pressure and some heart failure. A dry cough is a known effect. Many ARBs end in -sartan and are a related class. Beta-blockers slow the heart. Statins are a cholesterol class. Diuretics increase urine and can lower blood pressure. Do not stop a heart medicine because a summary made sense, and do not share these tablets.",
    cards: [
      ["-pril", "A common ending for ACE inhibitor names. It is a hint, not a dose."],
      ["-sartan", "A common ending for angiotensin receptor blocker names."],
      ["Cholesterol class", "Statins lower cholesterol. They are not tablets to share."],
      ["Do not stop", "Heart medicines are not paused because a revision note sounded clear."],
    ],
    questions: [
      ["A dry cough is a known effect of many…", ["ACE inhibitors", "Spacers", "Vitamins by definition", "Inhaler plastics"], 0, "The -pril class is associated with that cough. A prescriber decides what to do about it."],
      ["Names ending in -sartan are often…", ["ARBs, a blood-pressure class", "Antibiotics", "Inhaled steroids", "Vaccines"], 0, "The ending is a study hint. It does not replace reading the generic name."],
      ["A diuretic's teaching effect is to…", ["Increase urine output", "Thicken blood on purpose", "Replace insulin", "Open an airway like salbutamol"], 0, "More urine can help blood pressure and fluid overload. The dose is not yours to set."],
      ["Stopping a heart tablet because you feel fine can be…", ["Dangerous. Do not stop it on your own", "Always the right student plan", "Required after one normal reading", "The same as refusing to listen"], 0, "Some conditions are silent. Changes belong to the prescriber who knows the person."],
    ],
  },
  "pharmacy-pmc-301": {
    note: "Pharmaceutical microbiology is about products staying safe. A preservative slows growth in a multi-dose liquid. It is not an excuse for dirty preparation. Sterile means a validated process, not a quick boil in a kitchen. Contamination can be microbes, or the wrong product in the wrong bottle. An in-use period is how long a product may be used after it is opened or made. Do not share leftover antibiotics. Ordinary antibiotics do not treat viruses, and careless use breeds resistance.",
    cards: [
      ["Validated process", "A checked method for sterility. Boiling a spoon is not it."],
      ["After opening", "A product can become unsafe before the factory date. Respect the shorter life."],
      ["Leftover antibiotic", "Not a medicine to share or to save for the next fever."],
      ["Resistance", "Microbes that no longer respond. It follows careless antibiotic use."],
    ],
    questions: [
      ["A preservative in a multi-dose liquid…", ["Slows growth but does not excuse dirty work", "Sterilises any kitchen", "Replaces handwashing", "Kills every virus"], 0, "It is a backup for a clean product, not a permit to be careless."],
      ["Sterile, in production, means…", ["Made by a validated process that removes living microbes", "Boiled at home for a minute", "Shaken", "Sweetened"], 0, "Injections and eye products need that standard. A kitchen cannot invent it."],
      ["Sharing a leftover antibiotic is poor because…", ["The drug, the dose, and the organism may all be wrong", "Sharing is efficient", "Viruses need the same leftover", "Expiry does not apply once shared"], 0, "It also spreads resistance. Stewardship starts with not handing the packet on."],
      ["An in-use period matters because…", ["The product can become unsafe after opening even before the factory date", "Opened bottles last forever", "It is only a barcode", "It replaces the label"], 0, "Write the opened date and respect the shorter life."],
    ],
  },
  "pharmacy-pha-401": {
    note: "Antibacterial drugs attack bacteria in different ways. Match the likely organism. Do not use them for a typical virus, and do not stop early just because the person feels better unless the prescriber said so. Pain medicines are classes, not household sweets. Do not combine two NSAIDs. Do not share opioid painkillers. A suspected paracetamol overdose is an emergency now. This page has no amounts and no doses. Stewardship means using the right drug for the right reason, and sometimes using none.",
    cards: [
      ["Virus versus bacterium", "Ordinary antibiotics are for bacteria, not a typical viral cold."],
      ["Two NSAIDs", "Do not stack them. The harms add up. This is not a dose."],
      ["Do not share", "Opioid painkillers stay with the person they were prescribed for."],
      ["Overdose emergency", "Suspected paracetamol overdose needs emergency care now. No amounts are taught here."],
    ],
    questions: [
      ["A typical cold virus is treated with…", ["Supportive care, not an ordinary antibiotic", "Any leftover antibiotic", "Two NSAIDs together", "A shared opioid"], 0, "Antibiotics do not treat viruses. Using them anyway drives resistance."],
      ["Stopping an antibiotic early because you feel better…", ["Can leave the plan unfinished unless the prescriber said to stop", "Is always clever", "Prevents resistance for certain", "Is the same as stewardship"], 0, "The course is the prescriber's plan. Do not rewrite it from how you feel."],
      ["Combining two NSAID pain medicines…", ["Adds harm and is not a student plan", "Is safer than one", "Replaces a malaria test", "Is required"], 0, "One class is enough to cause stomach and kidney trouble. Do not stack them."],
      ["If someone may have taken too much paracetamol, you…", ["Get emergency help now", "Wait to see if they feel sleepy tomorrow", "Calculate a home antidote from this app", "Offer a second painkiller"], 0, "It is an emergency. This hall deliberately gives no amounts and no home antidote."],
    ],
  },
  "pharmacy-pha-403": {
    note: "Metformin is a common tablet for type 2 diabetes. It is not insulin, and it does not replace insulin for type 1 diabetes. Do not stop insulin because a meal was small. Low blood sugar can look like sweating, shaking, and confusion. If the person is awake and can swallow safely, a sweet drink is the first help people are taught. If they are drowsy, do not force a drink. Get emergency help. Asthma: preventer daily, reliever for symptoms now, and a spacer if they have one. Rising reliever use means the plan needs review.",
    cards: [
      ["Type 1 diabetes", "Needs insulin. A tablet such as metformin does not replace it."],
      ["Awake and able to swallow", "The situation in which a sweet drink is the first teaching step for low blood sugar."],
      ["Drowsy", "Do not force a drink. Get emergency help."],
      ["Rising reliever use", "A sign that asthma control is slipping and the plan needs review."],
    ],
    questions: [
      ["Metformin is…", ["Not insulin", "The same injection as insulin", "A reliever inhaler", "An antibiotic"], 0, "It is a tablet used in type 2 diabetes. Type 1 diabetes still needs insulin."],
      ["A person with type 1 diabetes who feels like skipping insulin after a small meal should…", ["Not stop insulin on that guess", "Stop for the day", "Double a friend's dose", "Switch to a herb"], 0, "Insulin changes are a prescriber's job. Skipping can be dangerous."],
      ["Sweating, shaking, and confusion in someone on diabetes treatment can be…", ["Low blood sugar", "Proof of perfect control", "A reason to force a drink if they are unconscious", "Asthma by definition"], 0, "If they are awake and can swallow, a sweet drink is the first teaching step. If drowsy, do not force anything. Get help."],
      ["A preventer inhaler is taken…", ["Regularly, to reduce swelling", "Only on match day", "Instead of emergency care when they cannot speak", "As a malaria treatment"], 0, "Daily prevention. The reliever is for symptoms now."],
    ],
  },
  "pharmacy-pcl-401": {
    note: "Pause before a medicine moves: right patient, right drug, right dose, right route, right time. Many teachers add right documentation. If it was not written, it is hard to know it happened. Strength on the bottle is not the same as the dose on the prescription. OD means once a day, BD twice, TDS three times, PRN when required, PO by mouth. If a frequency is a scribble, you ask. You do not guess. You do not supply a prescription-only medicine as a favour.",
    cards: [
      ["Right patient", "The person named on the prescription, checked, not assumed."],
      ["Documentation", "The record that the check happened. Unwritten care is hard to trust."],
      ["Strength", "How much drug is in the product. It is not automatically the dose."],
      ["Scribble", "Unclear writing. Ask. Do not invent the frequency."],
    ],
    questions: [
      ["The five rights include patient, drug, dose, route, and…", ["Time", "The student's mood", "The cap colour", "The advert"], 0, "Right time is the fifth. Documentation is often added as well."],
      ["OD on a prescription means…", ["Once a day", "Every hour", "Into the eye", "When required"], 0, "BD is twice a day. TDS is three times. PRN is when required. PO is by mouth."],
      ["The strength printed on a bottle…", ["Is not the same thing as the prescribed dose", "Is always the dose", "Replaces the patient's name", "Tells you to crush the tablet"], 0, "You still calculate what volume or how many tablets match the prescribed dose. Practice maths is not a real dose."],
      ["An unclear frequency should be…", ["Queried, not guessed", "Supplied as the most common guess", "Ignored", "Doubled to be safe"], 0, "Guessing a scribble is how the wrong day's dose is born."],
    ],
  },
  "pharmacy-pct-501": {
    note: "Hospital pharmacy meets charts, ward rounds, and sterile supply. Community pharmacy meets people who walked in, often with a symptom and little time. In both places, counselling is part of the supply, not an optional speech. Expired or doubtful stock stays off the shelf. A substandard or suspicious pack is not a bargain. Repeat medicines still need a check that the person is well enough to continue. Danger signs — chest pain, trouble breathing, confusion, a child who will not wake — are a referral, not a sale.",
    cards: [
      ["Counselling", "The explanation that belongs with the supply."],
      ["Expired stock", "Comes off the shelf. The date is not a suggestion."],
      ["Suspicious pack", "Wrong print, broken seal, or a deal that looks too cheap. Do not supply it."],
      ["Ward round", "Where hospital pharmacists meet the chart and the team."],
    ],
    questions: [
      ["Counselling is…", ["Part of supplying a medicine", "Optional if the queue is long", "Only for injections", "A replacement for the label"], 0, "The person has to know how to use what they were given."],
      ["A broken seal or a strangely cheap pack should…", ["Stay off the shelf", "Be sold if the colour looks right", "Be crushed and repacked", "Be called generic automatically"], 0, "Substandard and falsified medicines are a real harm. Doubt means do not supply."],
      ["A repeat medicine still needs…", ["A check that it is still right for the person", "No questions if they used it last year", "A double dose as a welcome", "The student's own diagnosis"], 0, "People change. The old box is not a permanent order."],
      ["Trouble breathing or chest pain in the shop means…", ["Urgent referral, not a painkiller sale", "A vitamin", "A longer counselling script first", "A guess at a heart tablet"], 0, "Danger signs leave the counter. You do not invent a treatment."],
    ],
  },
  "pharmacy-pha-501": {
    note: "Therapeutics joins a drug class to an illness without making you the prescriber. High blood pressure is often silent, so it is measured, not guessed from a headache. Lifestyle measures such as less salt, movement, and not smoking sit beside medicines, they do not secretly replace a prescribed plan. Sometimes the correct supply is no supply: a viral cold, a request for two NSAIDs, or a person who needs emergency care instead. Never invent a milligram for a real person. An asthma plan should be written, with the preventer and the reliever named.",
    cards: [
      ["Silent pressure", "High blood pressure often has no symptom. Measure it. Do not guess from a headache."],
      ["No supply", "Sometimes the right professional act is not to hand over a medicine."],
      ["Salt and movement", "Support for blood pressure. They do not secretly cancel a prescribed medicine."],
      ["Written plan", "Asthma actions written down, so reliever and preventer are not confused."],
    ],
    questions: [
      ["A headache alone does not prove…", ["High blood pressure", "That the person is in the shop", "That you should listen", "That referral exists"], 0, "Blood pressure is a measurement. Symptoms are a poor ruler."],
      ["The correct act can be to supply nothing when…", ["The person needs emergency care, or the request would cause harm", "You are bored", "The queue is long", "The person asked a question"], 0, "A sale is not the goal. Safety is."],
      ["Lifestyle advice should…", ["Sit beside prescribed treatment, not secretly replace it", "Replace insulin in type 1 diabetes", "Replace a malaria test", "Be the whole of emergency care"], 0, "Movement and diet help many conditions. They are not a hidden stop order for medicines."],
      ["Inventing a milligram for a real person from this hall is…", ["Never acceptable", "Fine if you feel sure", "The point of 500 level", "Safer than asking"], 0, "Prescribers choose doses for one person. Revision numbers stay on the page."],
    ],
  },
  "pharmacy-law-501": {
    note: "Pharmacy in Nigeria sits under the law and the Pharmacists Council of Nigeria. Premises are registered. Pharmacists are registered. A student does not supervise a shop and does not pretend to be the pharmacist on duty. Prescription-only medicines are not supplied as a favour. If a dose looks dangerous, you query it. You do not silently change it. A conflict of interest, such as pushing a product because it pays you more, is named and refused. Confidentiality still applies at the counter.",
    cards: [
      ["Registered pharmacist", "The professional who may take responsibility. A student is not that person yet."],
      ["Favour", "Not a legal route for a prescription-only medicine."],
      ["Silent change", "Altering a dose without asking. Do not do it."],
      ["Personal gain", "Payment that could bend advice. Name it and step back."],
    ],
    questions: [
      ["The Pharmacists Council of Nigeria is involved in…", ["Registration and standards for pharmacy", "Writing school timetables only", "Gait analysis", "Tablet colour design"], 0, "Practice sits under the law and the Council, not under a student's confidence."],
      ["A student on placement should…", ["Not pretend to be the pharmacist in charge", "Supervise the premises alone", "Supply prescription-only medicines to friends", "Change doses quietly"], 0, "Your name and your limits stay visible."],
      ["A dose that looks dangerous should be…", ["Queried with the prescriber", "Dispensed faster so nobody argues", "Halved without telling anyone", "Doubled"], 0, "You do not silently rewrite a prescription. You ask."],
      ["Pushing a more expensive product because you are paid more is…", ["A conflict of interest", "Professional by definition", "Required", "Confidentiality"], 0, "The person's need comes before the payment. Name the conflict and refuse it."],
    ],
  },
};
