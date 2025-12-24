import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { PageData } from "@/data/pageData";
import type { TrainerProps } from "@/types/types";

const Trainers = () => {
  const { trainers } = PageData;
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerProps | null>(
    null
  );

  const handleContact = (trainer: TrainerProps) => {
    setSelectedTrainer(trainer);
  };

  const handleBookTraining = (trainerName: string) => {
    console.log("Book training with:", trainerName);
    // Add logic to scroll to contact form or open booking modal
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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

      <Dialog
        open={!!selectedTrainer}
        onOpenChange={(open) => !open && setSelectedTrainer(null)}
      >
        <DialogContent className="bg-background w-full max-w-md rounded-2xl border-border overflow-hidden shadow-2xl shadow-primary/10 p-0 gap-0">
          <div className="sr-only">
            <DialogHeader>
              <DialogTitle>Kontakt z trenerem</DialogTitle>
              <DialogDescription>
                Szczegóły kontaktowe trenera
              </DialogDescription>
            </DialogHeader>
          </div>

          {selectedTrainer && (
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-4xl font-heading uppercase tracking-tighter leading-none">
                    {selectedTrainer.name}
                  </h4>
                  <p className="text-primary font-black uppercase tracking-widest text-[10px] mt-1">
                    {selectedTrainer.role}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                    Bezpośredni kontakt
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedTrainer.contact && (
                      <>
                        <a
                          href={`tel:${selectedTrainer.contact.phone}`}
                          className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all font-sans"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          <span className="font-bold">
                            {selectedTrainer.contact.phone}
                          </span>
                        </a>
                        <a
                          href={`mailto:${selectedTrainer.contact.email}`}
                          className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all font-sans"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                          <span className="font-bold text-sm truncate">
                            {selectedTrainer.contact.email}
                          </span>
                        </a>
                      </>
                    )}
                  </div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed italic bg-border/30 p-4 rounded-lg border-l-2 border-primary/70">
                    Jeśli trener nie odbiera, prawdopodobnie jest zajęty.
                    Prosimy o cierpliwość – oddzwoni w wolnej chwili lub odpisze
                    na e-mail.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    handleBookTraining(selectedTrainer.name);
                    setSelectedTrainer(null);
                  }}
                  className="w-full bg-primary hover:bg-primary-hover py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all shadow-lg shadow-primary/20 cursor-pointer text-white"
                >
                  Umów się na trening
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
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
    <Card className="group max-w-md relative pb-6 bg-card/30 border-border overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_10px_15px_rgba(225,29,72,0.15)] flex flex-col h-full rounded-2xl">
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
