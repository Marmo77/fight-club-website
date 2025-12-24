import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface Trainer {
  id: number;
  name: string;
  role: string;
  image: string;
  bioShort: string;
  highlights: string[];
}

const dummyTrainers: Trainer[] = [
  {
    id: 1,
    name: "Jan Kowalski",
    role: "Główny Trener MMA",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
    bioShort:
      "Specjalista od stójki z 10-letnim doświadczeniem w zawodowym MMA. Wychował mistrzów krajowych organizacji.",
    highlights: ["Czarny pas BJJ", "Trener roku 2023", "Ex-zawodnik KSW"],
  },
  {
    id: 2,
    name: "Anna Nowak",
    role: "Trenerka Muay Thai",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1920",
    bioShort:
      "Mistrzyni Polski w Muay Thai. Jej treningi to połączenie żelaznej kondycji i technicznej perfekcji.",
    highlights: [
      "Mistrzyni Świata IFMA",
      "Certyfikowany dietetyk",
      "15 lat stażu",
    ],
  },
  {
    id: 3,
    name: "Piotr Wiśniewski",
    role: "Trener Boks",
    image:
      "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bioShort:
      "Wychowanek starej szkoły boksu. Kładzie nacisk na pracę nóg i defensywę.",
    highlights: ["Olimpiczyk", "Trener Kadry", "30 lat w ringu"],
  },
];

const TrainerCard: React.FC<{
  trainer: Trainer;
  onContact: (t: Trainer) => void;
}> = ({ trainer, onContact }) => {
  return (
    <Card className="group relative bg-card/40 border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(225,29,72,0.15)] flex flex-col h-full rounded-2xl">
      {/* Glow effect in background on hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="aspect-3/4 overflow-hidden relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />

        {/* Experience Badge */}
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg z-20">
          <span className="text-[10px] font-black uppercase tracking-tighter text-white">
            Elite Pro
          </span>
        </div>

        {/* Overlay with glass effect */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-90"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-xl shadow-2xl transition-all duration-500 hover:translate-y-[-5px]">
            <h4 className="text-4xl font-heading uppercase tracking-tighter leading-none mb-1 group-hover:text-primary transition-colors">
              {trainer.name}
            </h4>
            <p className="text-primary font-black uppercase text-[10px] tracking-[0.3em] font-sans">
              {trainer.role}
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 grow flex flex-col justify-between relative z-10">
        <div className="space-y-6 mb-8">
          <div className="relative">
            <span className="absolute -left-2 -top-2 text-primary/20 text-4xl font-serif">
              "
            </span>
            <p className="text-gray-400 text-sm leading-relaxed italic relative z-10 pl-2">
              {trainer.bioShort}
            </p>
          </div>

          <ul className="space-y-3">
            {trainer.highlights.map((h, i) => (
              <li
                key={i}
                className="text-xs font-medium flex items-center gap-3 text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <Button
          onClick={() => onContact(trainer)}
          variant="outline"
          className="group/btn relative w-full h-auto py-4 overflow-hidden rounded-xl font-bold uppercase tracking-widest text-xs transition-all border-white/10 hover:border-primary/50 hover:bg-transparent"
        >
          <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10 group-hover/btn:text-white transition-colors">
            KONTAKT BEZPOŚREDNI
          </span>
        </Button>
      </div>
    </Card>
  );
};

const Trainers = () => {
  const handleContact = (trainer: Trainer) => {
    console.log("Contact trainer:", trainer.name);
    // Implement modal or scroll to contact form here
  };

  return (
    <section
      id="trainers"
      className="mx-auto px-6 lg:py-28 py-20 bg-background/50"
    >
      {/* Header */}
      <div className="container mx-auto text-center px-4 md:px-6 mb-16">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
          Nasza Kadra
        </p>
        <h2 className="text-primary-foreground md:text-5xl text-4xl font-semibold font-heading uppercase tracking-tighter">
          Nasi Trenerzy
        </h2>
      </div>

      {/* Trainers Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {dummyTrainers.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            trainer={trainer}
            onContact={handleContact}
          />
        ))}
      </div>
    </section>
  );
};

export default Trainers;
