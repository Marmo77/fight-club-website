import React from "react";
import { PageData } from "@/data/pageData";
import { Button } from "../ui/button";
import { Dot, LucideInfo } from "lucide-react";
import { Card, CardDescription, CardTitle } from "../ui/card";

const PricingSection: React.FC = () => {
  const { pricing } = PageData;

  return (
    <section
      id="pricing"
      className="py-24 lg:py-32  bg-background relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 flex flex-col gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-14 justify-between">
          {/* left side - header + text */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="">
              <span className="text-xs font-secondary text-primary tracking-widest font-black uppercase">
                Cennik
              </span>
              <h2 className="text-5xl md:text-6xl font-heading uppercase tracking-tighter leading-[0.85] mb-8 font-bold">
                {pricing.title}
              </h2>
              <p className="text-muted-foreground text-xs leading-relaxed max-w-sm font-medium">
                {pricing.info}
              </p>
            </div>
            {/* FIRST STEP */}
            <div className="border-l lg:mb-0 mb-6 border-primary/60 bg-border/20 rounded-2xl px-8 py-10 lg:mr-16 mr-0 flex flex-col gap-2 relative">
              <div className="absolute top-5 right-6 z-0">
                <LucideInfo className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xs font-bold uppercase">
                Pierwszy krok jest darmowy
              </h2>
              <p className="text-xs text-muted-foreground">
                Przyjdź na trening próbny całkowicie za darmo. Bez zobowiązań.
                Po prostu przyjdź i zobacz jak wygląda trening.
              </p>
            </div>
          </div>
          {/* Right side - pricing cards */}
          <div className="lg:col-span-8 col-span-1 flex flex-col gap-4">
            {pricing.prices.map((price) => (
              <PricingCard
                key={price.title}
                title={price.title}
                description={price.description}
                price={price.price}
              />
            ))}
          </div>
        </div>
        {/* Additional info */}
        <div className="text-center flex items-center gap-2">
          <div className="w-1.25 h-1.25 rounded-full bg-primary" />
          <h2 className="text-muted-foreground/70 text-[11px] uppercase font-semibold font-heading">
            Zajęcia personalne do uzgodnienia indywidualnie z trenerem.
          </h2>
        </div>
        <div className="text-center py-6">
          <a
            href="#contact"
            className="inline-block border-b border-primary/30 hover:border-primary pb-2 text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 hover:text-white transition-all"
          >
            Umów się na trening już teraz!
          </a>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: number;
}) => {
  const isFree = price === 0;
  return (
    <Card
      className={`
        ${
          isFree
            ? "border-primary/70 bg-primary/10 shadow-[0_0_10px_0] shadow-primary/50"
            : "border-border/40 bg-card/40 hover:border-border"
        }
        border rounded-2xl group px-8 py-6 transition-colors duration-300`}
    >
      <CardDescription className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg md:text-xl font-heading uppercase font-bold tracking-tight text-primary-foreground">
            {title}
          </h3>
          <p className="text-[9px] text-gray-600 font-bold uppercase tracking-[0.2em] group-hover:text-primary-foreground/75 transition-colors duration-300">
            {description}
          </p>
        </div>
        <span className="text-3xl md:text-4xl font-heading font-bold tracking-tighter text-white">
          {price} zł
        </span>
      </CardDescription>
    </Card>
  );
};

export default PricingSection;
