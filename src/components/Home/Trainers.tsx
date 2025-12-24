import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface Trainer {
  id: number;
  name: string;
  role: string;
  image: string;
  bioShort: string;
  highlights?: string[];
}

const dummyTrainers: Trainer[] = [
  // {
  //   id: 1,
  //   name: "Maciek Kowalski",
  //   role: "Główny Trener MMA",
  //   image:
  //     "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60",
  //   bioShort:
  //     "Specjalista od stójki z 10-letnim doświadczeniem w zawodowym MMA. Wychował mistrzów krajowych organizacji.",
  //   highlights: ["Czarny pas BJJ", "Trener roku 2023", "Ex-zawodnik KSW"],
  // },
  {
    id: 2,
    name: "Martyna Nowicka",
    role: "Trenerka Boksu",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=1920",
    bioShort:
      "3 krotna mistrzyni Europy. Młoda zawodniczka która dalej walczy o mistrzostwo świata",
    highlights: [
      "3 krotna mistrzyni Europy",
      "Certyfikowana dietetyczka",
      "15 lat doświadczenia",
    ],
  },
  {
    id: 3,
    name: "Piotrek Majewski",
    role: "Trener Boksu i Kickboxingu",
    image:
      "https://images.unsplash.com/flagged/photo-1574005280900-3ff489fa1f70?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bioShort:
      "Założyciel klubu. Wychował mistrzów polski, europy, trenował najlepszych i dalej kładzie nacisk na rozwój klubu i jego podopiecznych.",
    highlights: [
      "Założyciel klubu",
      "Pracuje z najlepszymi",
      "30 lat doświadczenia",
    ],
  },
];

const TrainerCard = ({
  trainer,
  onContact,
}: {
  trainer: Trainer;
  onContact: (t: Trainer) => void;
}) => {
  return (
    <Card className="group max-w-md relative pb-6 bg-card/40 border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_10px_20px_rgba(225,29,72,0.15)] flex flex-col h-full rounded-2xl">
      {/* Glow effect in background on hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="aspect-3/4 overflow-hidden relative">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />

        {/* Overlay with glass effect */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-80"></div>
        {/* --- OLD INFO --- */}
        {/* <div className="absolute bottom-4 left-4">
          <h4 className="text-3xl font-bold font-heading uppercase tracking-tighter">
            {trainer.name}
          </h4>
          <p className="text-primary font-bold uppercase text-xs tracking-widest">
            {trainer.role}
          </p>
        </div> */}
        {/* ---------------- */}
        {/* --- NEW INFO --- */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-4 rounded-xl shadow-2xl transition-all duration-500 hover:translate-y-[-5px]">
            <h4 className="text-3xl font-semibold font-heading uppercase tracking-tight leading-none mb-1 group-hover:text-primary transition-colors">
              {trainer.name}
            </h4>
            <p className="text-primary font-black uppercase text-[9px] tracking-[0.3em] font-sans">
              {trainer.role}
            </p>
          </div>
        </div>
        {/* --------------- */}
      </div>

      <div className="p-8 grow flex flex-col relative z-10">
        {/* QUOTES */}
        <div className="mb-4 min-h-[80px]">
          <div className="relative">
            <span className="absolute -left-2 -top-2 text-primary/20 text-4xl font-serif">
              "
            </span>
            <p className="text-gray-400 text-sm leading-relaxed italic relative z-10 pl-2">
              {trainer.bioShort}
            </p>
          </div>
        </div>
        {/* Highlights */}
        <div className="self-start justify-self-end mb-8">
          <ul className="space-y-2 ">
            {trainer.highlights?.map((h, i) => (
              <li key={i} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT BUTTON */}
        <Button
          onClick={() => onContact(trainer)}
          variant="outline"
          size={"CTA"}
          className="mt-auto w-full border border-border rounded-2xl text-primary hover:bg-primary hover:text-white transition-all font-bold uppercase tracking-wider text-sm"
        >
          Kontakt z trenerem
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* lg:grid-cols-3 */}
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
