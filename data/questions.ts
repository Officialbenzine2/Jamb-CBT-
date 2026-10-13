export type Question = {
  id: number;
  subject: string;
  text: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation?: string;
};

export const SUBJECTS = ["English", "Mathematics", "Biology", "Economics"] as const;

// Original sample questions for the MVP demo. Replace with your own verified question bank (Supabase) later.
export const QUESTIONS: Question[] = [
  // English
  { id: 1, subject: "English", text: "Choose the word that is opposite in meaning to 'scarce'.", options: ["Rare", "Plentiful", "Costly", "Small"], answer: 1, explanation: "'Scarce' means in short supply; 'plentiful' is its opposite." },
  { id: 2, subject: "English", text: "Choose the correct option: She _____ to school every day.", options: ["go", "going", "goes", "gone"], answer: 2, explanation: "A singular subject in the simple present takes 'goes'." },
  { id: 3, subject: "English", text: "Which of these is a noun?", options: ["Quickly", "Beautiful", "Happiness", "Run"], answer: 2, explanation: "'Happiness' names a feeling, so it is an abstract noun." },
  { id: 4, subject: "English", text: "Choose the word that best completes the sentence: The teacher was _____ by the pupils' good results.", options: ["please", "pleased", "pleasing", "pleasure"], answer: 1, explanation: "The passive form needs the past participle 'pleased'." },
  { id: 5, subject: "English", text: "'A stitch in time saves nine' is an example of a/an:", options: ["Simile", "Proverb", "Metaphor", "Idiom of comparison"], answer: 1, explanation: "It is a proverb: a short saying that expresses common wisdom." },

  // Mathematics
  { id: 6, subject: "Mathematics", text: "Simplify: 3/4 + 1/2", options: ["4/6", "5/4", "1", "3/8"], answer: 1, explanation: "3/4 + 2/4 = 5/4." },
  { id: 7, subject: "Mathematics", text: "If 2x + 5 = 17, find x.", options: ["4", "5", "6", "7"], answer: 2, explanation: "2x = 12, so x = 6." },
  { id: 8, subject: "Mathematics", text: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: 2, explanation: "0.15 × 200 = 30." },
  { id: 9, subject: "Mathematics", text: "The sum of angles in a triangle is:", options: ["90°", "180°", "270°", "360°"], answer: 1, explanation: "Interior angles of any triangle add up to 180°." },
  { id: 10, subject: "Mathematics", text: "Find the value of 2³ × 2².", options: ["16", "32", "64", "10"], answer: 1, explanation: "2³ × 2² = 2⁵ = 32." },

  // Biology
  { id: 11, subject: "Biology", text: "Which organelle is known as the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Vacuole"], answer: 2, explanation: "Mitochondria release energy through respiration." },
  { id: 12, subject: "Biology", text: "Photosynthesis takes place mainly in the:", options: ["Roots", "Leaves", "Stem", "Flowers"], answer: 1, explanation: "Leaves contain the most chloroplasts." },
  { id: 13, subject: "Biology", text: "The basic unit of heredity is the:", options: ["Chromosome", "Gene", "Cell", "Enzyme"], answer: 1, explanation: "Genes carry hereditary information." },
  { id: 14, subject: "Biology", text: "Which blood cells fight infection?", options: ["Red blood cells", "Platelets", "White blood cells", "Plasma"], answer: 2, explanation: "White blood cells form part of the body's defence system." },
  { id: 15, subject: "Biology", text: "An organism that feeds on dead organic matter is a:", options: ["Parasite", "Saprophyte", "Predator", "Producer"], answer: 1, explanation: "Saprophytes, such as many fungi, feed on dead matter." },

  // Economics
  { id: 16, subject: "Economics", text: "The basic economic problem is:", options: ["Inflation", "Scarcity", "Unemployment", "Taxation"], answer: 1, explanation: "Unlimited wants meet limited resources, which is scarcity." },
  { id: 17, subject: "Economics", text: "When the price of a good rises and quantity demanded falls, this illustrates the:", options: ["Law of supply", "Law of demand", "Law of diminishing returns", "Law of variable proportions"], answer: 1, explanation: "Price and quantity demanded move in opposite directions." },
  { id: 18, subject: "Economics", text: "Opportunity cost is:", options: ["The money price of a good", "The next best alternative forgone", "The cost of production", "A fixed cost"], answer: 1, explanation: "It is the value of the best alternative given up." },
  { id: 19, subject: "Economics", text: "Which of these is a factor of production?", options: ["Money", "Land", "Profit", "Tax"], answer: 1, explanation: "The factors are land, labour, capital and entrepreneurship." },
  { id: 20, subject: "Economics", text: "A sustained general rise in prices is called:", options: ["Deflation", "Inflation", "Recession", "Devaluation"], answer: 1, explanation: "That is the definition of inflation." },
];
