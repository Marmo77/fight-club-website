import React from "react";
import { PageData } from "@/data/pageData";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { StarIcon } from "lucide-react";

const Hero = () => {
  const { hero } = PageData;
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex-col flex items-center overflow-hidden bg-background"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 md:px-6 mx-auto flex flex-col max-md:items-center items-start justify-center flex-1 py-32">
        {/* Tags / Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {hero.tags.slice(0, 4).map((tag, index) => (
            <Badge
              key={index}
              variant={"hero"}
              className="text-xs uppercase tracking-wider font-bold font-sans select-none"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[88px] max-md:text-center font-heading font-black uppercase leading-[0.9] tracking-tighter max-w-4xl text-primary-foreground mb-6">
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm font- sm:text-base px-2 md:text-lg text-muted-foreground max-md:text-center max-w-2xl mb-10 leading-relaxed font-medium">
          {hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex max-sm:flex-col max-sm:items-center sm:flex-row gap-4">
          <a href={`#${hero.primaryCTA.targetId}`}>
            <Button
              size={"CTA"}
              variant={"CTA"}
              className="shadow-[0_0_15px_rgba(225,29,72,0.4)] transition-all"
            >
              {hero.primaryCTA.label}
            </Button>
          </a>
          <a href={`#${hero.secondaryCTA.targetId}`}>
            <Button size={"CTA"} variant={"outline"} className="">
              {hero.secondaryCTA.label}
            </Button>
          </a>
        </div>
        {/* BOTTOM INFO BAR */}
        <div className="max-sm:absolute max-sm:bottom-6 mt-8 md:mt-12 pt-8 border-t border-white/10 flex max-md:justify-center flex-wrap gap-x-12 gap-y-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {hero.heroInfoBar.days}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {hero.heroInfoBar.weekends}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StarIcon className="text-primary fill-primary w-4 h-4" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {hero.heroInfoBar.firstTraining}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 animate-bounce opacity-40 hidden md:block">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
};
export default Hero;
