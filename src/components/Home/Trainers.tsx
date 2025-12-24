import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { PageData } from "@/data/pageData";
import type { TrainerProps } from "@/types/types";

const Trainers = () => {
  const { trainers } = PageData;

  const handleContact = (trainer: TrainerProps) => {
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
        {trainers.map((trainer) => (
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
const TrainerCard = ({
  trainer,
  onContact,
}: {
  trainer: TrainerProps;
  onContact: (t: TrainerProps) => void;
}) => {
  return (
    <Card className="group max-w-md relative pb-6 bg-card/30 border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_10px_20px_rgba(225,29,72,0.15)] flex flex-col h-full rounded-2xl">
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

      <div className="px-8 py-4 grow flex flex-col relative z-10">
        {/* Bio short */}
        <div className="mb-4 min-h-[80px]">
          <div className="relative">
            <span className="absolute select-none -left-2 -top-2 text-primary/20 text-4xl font-serif">
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

        {/* Contact Button */}
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

export default Trainers;
