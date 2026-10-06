import type { Extra } from "./more-types";

export const medicineExtras: Record<string, Extra> = {
  "medicine-chm-101": {
    note: "Keep the three numbers apart: atomic number is protons, mass number is protons plus neutrons, and molarity is moles of solute in one litre. Water's polarity is why it is the solvent of blood. None of this is a recipe for mixing chemicals at home.",
    cards: [
      ["Mass number", "Protons plus neutrons in the nucleus."],
      ["Ionic bond", "A bond made when electrons are transferred and ions attract."],
      ["Mole", "A counting unit of about 6.02 × 10 to the power 23 particles."],
      ["Polar", "A molecule with uneven charge, such as water, that dissolves many salts."],
    ],
    questions: [
      ["The mass number equals…", ["Protons only", "Protons plus neutrons", "Electrons in the outer shell only", "The pH of the solution"], 1, "Mass number counts both kinds of particle in the nucleus. Atomic number is protons alone."],
      ["Sodium chloride is held together mainly by…", ["A covalent share of electrons", "An ionic bond", "A hydrogen bond only inside the nucleus", "A tendon"], 1, "Sodium gives an electron and chloride takes it. Opposite charges attract. That is ionic."],
      ["Blood pH in health sits…", ["Near 2", "Near 7.4, slightly alkaline", "Near 12", "At exactly 0"], 1, "The teaching band is about 7.35 to 7.45. Cells need that narrow range."],
      ["One mole of a substance contains…", ["A dozen particles", "About 6.02 × 10 to the power 23 particles", "One gram of neutrons", "One litre of blood"], 1, "The mole is the counting unit behind molarity. It is not a volume by itself."],
    ],
  },
  "medicine-bio-101": {
    note: "Put the flow in order and it stays: DNA is transcribed to messenger RNA, and that RNA is translated into protein on a ribosome. The nucleus stores the DNA. Mitochondria supply most of the ATP. Mitosis copies a body cell for growth and repair and keeps the chromosome set.",
    cards: [
      ["Nucleus", "The compartment that stores the cell's DNA."],
      ["ATP", "The cell's usable energy currency, made mostly in mitochondria."],
      ["Lipid bilayer", "The two-layer fatty sheet that forms the cell membrane."],
      ["Amino acid", "A building block joined into a protein during translation."],
    ],
    questions: [
      ["DNA in a human cell is stored mainly in the…", ["Mitochondrion only", "Nucleus", "Cell wall", "Ribosome"], 1, "The nucleus holds the chromosomes. Mitochondria have a little DNA of their own, but the main store is nuclear."],
      ["The usual order of making a protein is…", ["Protein, then DNA, then RNA", "DNA to RNA to protein", "RNA to DNA to glycogen", "Mitosis, then pH, then a gene"], 1, "Transcription copies DNA into RNA. Translation reads that RNA into protein."],
      ["A gene is best described as…", ["A whole chromosome always", "A stretch of DNA that codes for a product", "A type of joint", "A buffer"], 1, "Most genes code for a protein. The stretch, not the whole chromosome, is the gene."],
      ["Human cell membranes are mainly…", ["Cellulose walls", "A lipid bilayer with proteins", "Solid bone", "Pure glycogen"], 1, "Fats make the sheet. Proteins make gates and signals. Human cells do not have cellulose walls."],
    ],
  },
  "medicine-phy-101": {
    note: "Pressure rises when the same force sits on a smaller area. Narrow tubes raise resistance, which is why a tight airway or a narrowed vessel makes the pump work harder. Sound frequency is pitch. Amplitude is size, heard as loudness. Clinical blood pressure is still written in mmHg. Do not turn a classroom formula into a machine setting.",
    cards: [
      ["Amplitude", "The size of a wave. For sound, it relates to loudness, not pitch."],
      ["Newton", "The unit of force."],
      ["Pascal", "The unit of pressure: force per unit area."],
      ["Ion", "A charged particle. Nerves and muscle signal by moving ions."],
    ],
    questions: [
      ["If the same force acts on a smaller area, pressure…", ["Falls", "Rises", "Becomes a frequency", "Stays a mole"], 1, "Pressure is force divided by area. Shrink the area and the pressure goes up."],
      ["Pitch of a sound corresponds most closely to…", ["Frequency", "Amplitude", "mmHg", "Molarity"], 0, "Frequency is how often the wave repeats. Amplitude is the size, linked to loudness."],
      ["A nerve impulse is carried by…", ["A change in membrane voltage from moving ions", "A steel wire inside the axon", "Mitosis", "A covalent bond in the air"], 0, "The membrane voltage flips briefly as ions move. That is the signal."],
      ["You should not use a 100-level formula to…", ["Set a real clinical machine", "Remember that pressure is force over area", "Name the unit mmHg", "Tell pitch from loudness"], 0, "The ideas explain the machines. They do not authorise you to choose a setting for a person."],
    ],
  },
  "medicine-ana-201": {
    note: "Name the tissue before you name the injury. Ligaments join bone to bone. Tendons join muscle to bone. Muscle only pulls, so the agonist does the movement and the antagonist can reverse it. Ball-and-socket joints such as the shoulder and hip move in many planes. Hinge joints such as the elbow and knee mainly flex and extend. The sciatic nerve is the large nerve behind the thigh.",
    cards: [
      ["Compact bone", "The dense outer bone of a long bone's shaft."],
      ["Antagonist", "The muscle that opposes the agonist."],
      ["Sciatic nerve", "The large nerve of the back of the thigh."],
      ["Adduction", "Movement of a limb toward the midline."],
    ],
    questions: [
      ["A ligament joins…", ["Muscle to bone", "Bone to bone", "Nerve to skin only", "Lung to heart"], 1, "Ligament is bone to bone. Tendon is muscle to bone."],
      ["The hip is mainly a…", ["Hinge joint", "Ball-and-socket joint", "A suture that never moves", "A valve"], 1, "The ball in the socket lets the hip move in many directions. The knee is the hinge."],
      ["In anatomical position the palms face…", ["Forward", "Backward", "The floor only", "Each other behind the back"], 0, "Palms forward is the reference. Movements are named from that posture."],
      ["The sciatic nerve is found in the…", ["Upper limb plexus", "Back of the thigh", "Wall of the alveolus", "Pericardium"], 1, "It is the large nerve of the lower limb, running behind the thigh. The brachial plexus is the upper limb."],
    ],
  },
  "medicine-pio-201": {
    note: "Blood has a job list: red cells and haemoglobin carry oxygen, white cells defend, platelets help clotting, and plasma is the fluid. Anaemia means too little haemoglobin, not a diagnosis you make from tiredness alone. Nerves fire all-or-nothing once threshold is reached. Myelinated axons conduct faster. Skeletal muscle needs calcium so actin and myosin can pull.",
    cards: [
      ["Plasma", "The fluid of blood, carrying salts, proteins, and hormones."],
      ["Anaemia", "Too little haemoglobin, so oxygen carriage falls."],
      ["Threshold", "The membrane voltage that must be reached before an action potential fires."],
      ["Actin and myosin", "The proteins that slide to shorten a muscle fibre."],
    ],
    questions: [
      ["White blood cells mainly…", ["Carry most of the oxygen", "Defend against infection", "Are the same as platelets", "Insulate axons"], 1, "Defence is the white-cell job. Oxygen is haemoglobin in red cells. Clotting needs platelets."],
      ["Below threshold, a nerve…", ["Fires a half-size action potential", "Does not fire an action potential", "Always contracts a joint", "Becomes myelin"], 1, "The spike is all or nothing. Under threshold, there is no spike."],
      ["Parasympathetic activity is linked with…", ["Rest and digestion", "Only a faster heart in effort", "Bone growth", "Clotting"], 0, "Rest and digest is the teaching picture. Effort and a faster heart are sympathetic."],
      ["Anaemia means…", ["Too little haemoglobin", "Too many platelets by definition", "A fast myelin sheath", "A high FEV1"], 0, "Oxygen carriage falls when haemoglobin is low. Tiredness alone does not prove it."],
    ],
  },
  "medicine-bch-201": {
    note: "Enzymes are not used up. They speed one reaction and prefer one substrate. Heat or a wild pH unfolds them, which is denaturation. Glucose is the fuel sugar. Glycogen is the store in liver and muscle. Insulin helps tissues take glucose in. Glucagon tells the liver to break glycogen down. Those are directions, not doses.",
    cards: [
      ["Catalyst", "A substance that speeds a reaction and is not consumed. Enzymes are catalysts."],
      ["Active site", "The pocket on an enzyme where the substrate fits."],
      ["Insulin", "A hormone that helps tissues take up glucose. This note is not a dose."],
      ["Glucagon", "A hormone that tends to raise blood glucose by breaking down liver glycogen."],
    ],
    questions: [
      ["After a reaction, an enzyme is usually…", ["Used up and gone", "Free to work again", "Turned into glycogen", "A platelet"], 1, "Catalysts are regenerated. That is why a little enzyme can handle many substrate molecules."],
      ["The lock-and-key idea says the enzyme prefers…", ["Any molecule of the same colour", "Its own substrate", "Only water", "A tendon"], 1, "The active site fits a particular substrate. The fit can adjust, but it is not random."],
      ["Insulin's direction of effect is to…", ["Help tissues take up glucose", "Store oxygen in platelets", "Block every receptor", "Denature bone"], 0, "It lowers blood glucose by helping uptake and storage. This is not a dose for anyone."],
      ["A competitive inhibitor can often be displaced by…", ["More substrate", "Removing all water from the body", "A hinge joint", "An ECG lead"], 0, "It resembles the substrate and sits in the active site. Extra substrate competes with it."],
    ],
  },
  "medicine-ana-301": {
    note: "Trace one red cell. From the right ventricle it goes to the lungs, back to the left atrium, then the left ventricle sends it to the body. Valves stop it going backwards. Quiet breathing in is the diaphragm flattening under the phrenic nerve. The coronary arteries feed the heart muscle itself. Real chest pain is an emergency, not a diagram to finish first.",
    cards: [
      ["Left ventricle", "The chamber that pumps blood to the body."],
      ["Bronchus", "An airway branch after the trachea splits."],
      ["Inspiration", "Breathing in. Quiet inspiration is mainly the diaphragm."],
      ["Pleura", "The membrane around the lungs inside the chest."],
    ],
    questions: [
      ["The left ventricle pumps blood to the…", ["Lungs only", "Body", "Right atrium as its only job", "Alveoli by a direct tube"], 1, "Left side is the systemic circuit. Right side is to the lungs."],
      ["At rest, breathing out is mostly…", ["A violent contraction of the heart", "Elastic recoil of the lungs and chest", "The phrenic nerve pulling the ribs down as its only action", "Platelet activity"], 1, "Quiet expiration does not need a strong muscle push. The stretched tissue recoils."],
      ["The trachea leads air toward the…", ["Bronchi and then the alveoli", "Coronary arteries", "The knee joint", "The brachial plexus"], 0, "Airway order: trachea, bronchi, smaller airways, alveoli."],
      ["A block in a coronary artery threatens…", ["Heart muscle", "Only the skin of the hand", "Synovial fluid", "The diaphragm's tendon alone"], 0, "Coronary arteries feed the heart itself. Chest pain in a real person is an emergency."],
    ],
  },
  "medicine-pio-301": {
    note: "Cardiac output is heart rate times stroke volume. Blood pressure also depends on how tight the arterioles are. Oxygen mostly rides on haemoglobin. Carbon dioxide is a strong drive to breathe in a healthy person. Tidal volume is a quiet breath. Vital capacity is the biggest breath you can shift. FEV1 is the first second of a forced blow. You do not diagnose from a guessed number.",
    cards: [
      ["Heart rate", "Beats per minute. A common adult teaching band at rest is about 60 to 100."],
      ["Perfusion", "Blood flow. Gas exchange needs it matched with ventilation."],
      ["Ventilation", "Air moving in and out of the lungs."],
      ["Bicarbonate", "A form in which much of the carbon dioxide travels in blood."],
    ],
    questions: [
      ["Stroke volume is…", ["Beats per minute", "The blood ejected in one beat", "A quiet breath", "The first-second blow"], 1, "Cardiac output multiplies this volume by the heart rate."],
      ["Most oxygen in arterial blood is…", ["Bound to haemoglobin", "Carried only as free gas bubbles", "Inside platelets", "Stored as glycogen"], 0, "Haemoglobin carries almost all of it. A small amount is dissolved."],
      ["Vital capacity is…", ["A quiet resting breath", "The largest volume you can breathe out after a full breath in", "Blood pressure in mmHg", "Heart rate times ten"], 1, "Tidal volume is the quiet breath. Vital capacity is the full voluntary shift."],
      ["Arterioles affect blood pressure because they…", ["Change resistance to flow", "Store glycogen", "Replace the alveoli", "Make antibodies"], 0, "Tighter arterioles raise resistance, so pressure tends to rise if output stays the same."],
    ],
  },
  "medicine-bch-301": {
    note: "Catabolism breaks fuel and usually releases energy. Anabolism builds and costs ATP. With oxygen, mitochondria make far more ATP than glycolysis alone. When oxygen is short, pyruvate becomes lactate. The liver stores glycogen, can make glucose in a long fast, and handles many drugs. Nitrogen from amino acids leaves as urea. Iron lack can contribute to anaemia. This is not a personal diet plan.",
    cards: [
      ["Pyruvate", "The end product of glycolysis that can enter mitochondria when oxygen is available."],
      ["Mitochondrion", "The organelle that makes most ATP when oxygen is present."],
      ["Iron", "A mineral needed to make haemoglobin."],
      ["Vitamin C", "Needed for healthy collagen. Lack shows in connective tissue."],
    ],
    questions: [
      ["With oxygen available, most ATP comes from…", ["The mitochondria", "A single step of glycolysis only", "The nucleus copying DNA", "Platelets"], 0, "Aerobic metabolism in mitochondria yields far more ATP than anaerobic glycolysis."],
      ["Lactate builds up when…", ["Oxygen is scarce and pyruvate cannot be fully oxidised", "The person is breathing pure numbers", "Glycogen is a joint", "Urea becomes oxygen"], 0, "Anaerobic glycolysis ends at lactate and yields little ATP."],
      ["Urea is made so the body can excrete nitrogen from…", ["Amino acids", "Inhaled oxygen", "Pure table salt only", "Myelin"], 0, "The liver packages that nitrogen as urea."],
      ["Anabolism is the set of pathways that…", ["Build larger molecules and cost energy", "Only break glucose to lactate", "Pump blood", "Clot plasma"], 0, "Building costs ATP. Catabolism is the breakdown."],
    ],
  },
  "medicine-pth-401": {
    note: "Acute inflammation is redness, heat, swelling, pain, and loss of function. White cells arrive and vessels leak. Skin can regenerate. Heart muscle and neurons rarely divide, so loss there tends to scar. A thrombus is a clot in a vessel during life. An embolus has travelled. Malignant tumours invade and can metastasise. A lump is not cancer because a sentence said so. Unexplained weight loss, a persistent lump, or coughing blood needs a clinician.",
    cards: [
      ["Benign", "A growth that stays local and does not invade."],
      ["Chronic inflammation", "A longer tissue response, with different cells and more repair than the first hours."],
      ["Labile cells", "Cells that divide readily, such as the skin surface."],
      ["Permanent cells", "Cells that barely divide, such as cardiac muscle and neurons."],
    ],
    questions: [
      ["Heat and redness in acute inflammation come mainly from…", ["Increased blood flow in the tissue", "A fall in all white cells as the goal", "Instant scar in the first minute", "A heart valve closing"], 0, "Vessels widen and flow rises. That is the heat and the redness."],
      ["Neurons after cell loss tend to…", ["Regrow a perfect organ every time", "Leave a deficit, because they rarely divide", "Become alveoli", "Turn into platelets"], 1, "Permanent cells do not replace themselves well. Function may be lost."],
      ["Metastasis means…", ["A benign cyst that never grows", "Spread of a malignant tumour to a distant site", "A normal scar", "A buffer"], 1, "Invasion and distant spread mark malignancy. A textbook line does not diagnose a real lump."],
      ["Coughing blood or a persistent unexplained lump should…", ["Be watched for a year with no review", "Be assessed by a clinician", "Be called a sprain", "Be treated as a quiz only"], 1, "Those are red-flag patterns. This app does not diagnose them."],
    ],
  },
  "medicine-pha-401": {
    note: "Pharmacodynamics is what the drug does to the body, often at a receptor. Pharmacokinetics is what the body does to the drug: absorption, distribution, metabolism, excretion. The liver metabolises many drugs. The kidney excretes many. Intravenous drugs arrive at once and forgive errors least. A side effect is often the same receptor in a tissue you did not mean to hit. Read the generic name. Nothing here is a dose.",
    cards: [
      ["Pharmacodynamics", "What the drug does to the body."],
      ["Pharmacokinetics", "What the body does to the drug: ADME."],
      ["Intravenous", "A route straight into a vein. Errors are least forgiven."],
      ["Side effect", "An unwanted effect, often the drug acting in another tissue."],
    ],
    questions: [
      ["Pharmacodynamics is…", ["What the drug does to the body", "Only the price of the pack", "The gait cycle", "A clot in a vein"], 0, "Effect on the body. Pharmacokinetics is the body's handling of the drug."],
      ["Many drugs are metabolised in the…", ["Liver", "Finger nail only", "Synovial fluid", "ECG paper"], 0, "The liver changes many drugs before the kidney excretes them."],
      ["An intravenous dose is risky to get wrong because it…", ["Arrives in the blood at once", "Is always slower than a tablet", "Cannot leave the gut", "Has no receptors"], 0, "There is no delay and little chance to recall it. This is not a route for a student to try."],
      ["Look-alike brand boxes are safer if you check the…", ["Generic name", "Cap colour alone", "Advert", "Bottle height"], 0, "The generic name identifies the drug. Colour does not."],
    ],
  },
  "medicine-mic-401": {
    note: "Bacteria are cells. Viruses are not, and they must enter a cell to copy themselves. Ordinary antibiotics act on bacteria, not on a typical viral cold. Innate defence is already there: skin, mucus, phagocytes. Adaptive defence learns: B cells make antibody, T cells organise or kill. Vaccines follow the national schedule. In Lagos, fever is tested for malaria rather than guessed. Fast breathing, confusion, or a person hard to wake with infection is an emergency.",
    cards: [
      ["Phagocyte", "A cell that eats invaders. Part of innate defence."],
      ["T cell", "A lymphocyte that helps organise defence or kills infected cells."],
      ["B cell", "The lymphocyte that makes antibodies."],
      ["Handwashing", "Soap and water still stop a lot of spread."],
    ],
    questions: [
      ["Fungi are…", ["The same kingdom as ordinary bacteria", "A separate group from bacteria and viruses", "Always killed by any cold tablet", "A type of heart valve"], 1, "Bacteria, viruses, fungi, and parasites are different. Treatment is not one tablet for all."],
      ["A typical viral cold is not a job for…", ["Ordinary antibiotics", "Rest and fluids advised by a clinician", "Handwashing", "A malaria test if fever is unexplained where malaria occurs"], 0, "Antibiotics do not treat viruses. Using them anyway breeds resistance."],
      ["Adaptive immunity differs from innate immunity because it…", ["Learns a specific response", "Is only the skin", "Works before any cell exists", "Is a brand name"], 0, "Antibodies and T cells are learned. Innate defence is the immediate front line."],
      ["Sepsis with a person hard to wake means…", ["Finish the revision first", "Emergency care", "A home antibiotic shared from a friend", "Spirometry in the corridor"], 1, "Infection beginning to injure organs is an emergency, not a study question to sit on."],
    ],
  },
  "medicine-med-501": {
    note: "Write the complaint in the person's words, then the timeline, past illness, medicines, and allergies. Vital signs come next. A teaching adult pulse at rest is about 60 to 100, breathing about 12 to 20. Orthopnoea is breathlessness when lying flat and is a heart-failure clue, along with ankle swelling. Angina is effort-related tightness that often eases with rest and still needs a clinician. Sudden chest pressure with sweat is emergency care, not a chapter to finish.",
    cards: [
      ["Vital signs", "Pulse, breathing, blood pressure, temperature, and oxygen saturation."],
      ["Heart failure", "The pump does not meet the body's needs, or only does so at high filling pressure."],
      ["Allergy", "A reaction you must ask about before any medicine is considered."],
      ["Systems review", "A short pass through other symptoms so important clues are not missed."],
    ],
    questions: [
      ["A history should record medicines and…", ["Allergies", "Only the student's favourite diagnosis", "The colour of the ward", "Nothing if the person looks well"], 0, "Allergies and the medicine list change what is safe later. Ask them."],
      ["Breathlessness worse when lying flat is called…", ["Orthopnoea", "A normal tidal volume", "Abduction", "A buffer"], 0, "It is a classic clue to fluid and a heart that is struggling. It still needs a clinician."],
      ["Ankle swelling from fluid is…", ["Oedema", "Angina by definition", "FEV1", "A pertinent negative"], 0, "Oedema is tissue fluid. In the heart story it sits beside breathlessness."],
      ["One high blood-pressure reading in a nervous person…", ["Is not automatically a lifelong label", "Proves heart failure", "Replaces the history", "Is an FEV1"], 0, "Confirm before you name a disease. One frightened reading is not the whole story."],
    ],
  },
  "medicine-med-503": {
    note: "Asthma varies: wheeze, cough, and tightness, often worse at night or with exercise. The reliever opens the airway now. The preventer, often an inhaled steroid, is taken daily to reduce swelling. Needing the reliever more often means control is slipping. COPD's airflow limit persists and does not vanish after one puff. Pneumonia is infection of lung tissue, and the person looks ill. Where malaria is transmitted, test a fever. Do not invent tablets. Trouble speaking or blue lips in asthma is an emergency: sit the person up and get help.",
    cards: [
      ["Variable airway narrowing", "The hallmark of asthma: symptoms come and go."],
      ["Inhaled steroid", "A common preventer that reduces airway swelling when taken regularly."],
      ["Confusion in an older person", "May be how pneumonia shows, even without a high fever."],
      ["National malaria guideline", "The source of treatment names. A study note is not a personal plan."],
    ],
    questions: [
      ["A reliever inhaler is for…", ["Symptoms now", "Replacing every preventer forever", "Treating malaria", "Measuring blood pressure"], 0, "It opens the airway quickly. The preventer is the daily medicine."],
      ["COPD airflow limitation is…", ["Persistent and not fully reversed by one puff", "Gone after a single puff in the teaching contrast with asthma", "A disease of the knee", "Cured by handwashing alone"], 0, "Persistence is the contrast with typical asthma."],
      ["Pneumonia is infection of…", ["Lung tissue", "Only the nose hairs", "The coronary valve by definition", "A buffer"], 0, "The person is ill, not merely coughing. Older people may be confused more than hot."],
      ["A stiff neck with fever, or fast breathing with confusion, should…", ["Wait for a study group", "Go to emergency care", "Be self-treated from this page", "Be called a sprain"], 1, "Those patterns are emergencies. Test malaria where it occurs, but do not delay urgent care."],
    ],
  },
  "medicine-com-501": {
    note: "Primary prevention stops disease before it starts: vaccines on the national schedule, handwashing, cleaner air, safer water, and movement. Secondary prevention finds disease earlier. Tertiary prevention limits damage after a diagnosis, which includes rehabilitation. In Lagos, ask about water, cooking smoke, work, transport, and who decides treatment at home. Advice that ignores cost will not be followed. If the person is too ill for a notebook, they need urgent care, not another question.",
    cards: [
      ["Tertiary prevention", "Limiting damage after a diagnosis, including rehabilitation."],
      ["Outbreak questions", "Who is ill, where they were, and when it started. Then report, do not delay care."],
      ["Cooking smoke", "A real exposure in many homes. Ask about it."],
      ["Equity", "A plan people can actually afford and reach."],
    ],
    questions: [
      ["A vaccine given before illness is…", ["Primary prevention", "Tertiary prevention only", "A treatment for established cancer", "A gait test"], 0, "It stops disease before it starts. That is primary prevention."],
      ["Finding high blood pressure at a screening is closer to…", ["Secondary prevention", "Ignoring disease", "A coronary artery bypass by itself", "Denaturation"], 0, "Early detection is secondary prevention."],
      ["A history in community medicine should include…", ["Water, smoke, work, and who decides care at home", "Only the atomic number", "Nothing about daily life", "The brand colour of a shoe"], 0, "Context changes both the risk and whether advice can be followed."],
      ["If a person is too breathless to finish your questions, you should…", ["Insist on the full form first", "Get urgent care", "Send them to buy a herb", "Record a perfect score"], 1, "The notebook waits. Danger signs do not."],
    ],
  },
};
