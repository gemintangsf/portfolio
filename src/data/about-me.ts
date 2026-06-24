import { IconType } from "react-icons";
import {
  FaCalculator,
  FaFlask,
  FaGamepad,
  FaExclamationTriangle,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

export interface ChapterItem {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: IconType;
}

export interface BlueprintFact {
  label: string;
  value: string;
  strikethrough: boolean;
}

export const chapters: ChapterItem[] = [
  {
    num: "01",
    title: "My Love for Math",
    subtitle: "Playing with numbers since childhood",
    desc: "When I was a kid, I really loved mathematics. Solving logic puzzles and numbers was my hobby. But at that time, I did not know that loving math could lead me to the coding world. To me, computers and programming were still a big mystery.",
    icon: FaCalculator,
  },
  {
    num: "02",
    title: "The Chemical Engineering Dream",
    subtitle: "Targeting one specific major",
    desc: "When it was time to choose a college major, I was really focused on Chemical Engineering. I wanted to work in labs and study chemical formulas. I didn't want to look at any other options.",
    icon: FaFlask,
  },
  {
    num: "03",
    title: "My Father's Advice",
    subtitle: "Ego vs. reality",
    desc: "Seeing my daily habits, my father told me: 'You love playing games and spending hours on the computer. Why don't you try IT instead?' But because of my ego, I ignored him. I still wanted to study chemistry.",
    icon: FaGamepad,
  },
  {
    num: "04",
    title: "The Accidental Pivot",
    subtitle: "Failing the chemistry exam",
    desc: "Fate had a different path for me. I failed the entrance exam for Chemical Engineering. Luckily, I had a backup choice and got accepted into Informatics Engineering at Polban. I took it, but honestly, I was still unhappy because I still wanted chemistry.",
    icon: FaExclamationTriangle,
  },
  {
    num: "05",
    title: "Math Meets Code",
    subtitle: "Realizing coding is just applied logic",
    desc: "After a few months of learning programming, I realized something. The logical thinking I used in math was exactly what I needed for coding. Programming wasn't just typing commands; it was using math logic to solve real problems. I finally felt that I was in the right place.",
    icon: FaLightbulb,
  },
  {
    num: "06",
    title: "The Software Engineer",
    subtitle: "From math logic to real apps",
    desc: "Now, I am a software engineer building mobile apps, websites, and backend systems. That childhood hobby of solving math problems has turned into a passion for writing clean, efficient code. The detour was actually the best path for me.",
    icon: FaCode,
  },
];

export const blueprintFacts: BlueprintFact[] = [
  { label: "First Love", value: "Mathematics 📐", strikethrough: false },
  { label: "First Choice", value: "Chemical Eng. 🧪", strikethrough: true },
  { label: "Accidental Path", value: "Polban Informatics 🏫", strikethrough: false },
  { label: "Current Quest", value: "Software Engineer 💻", strikethrough: false },
  { label: "Location", value: "Jakarta, ID 🇮🇩", strikethrough: false },
];
