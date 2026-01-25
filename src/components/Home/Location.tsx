import { PageData } from "@/data/pageData";
import React from "react";
import { Button } from "../ui/button";
import { Shield } from "lucide-react";

const Location = () => {
  const { locations } = PageData;

  const [location, setLocation] = React.useState(locations[0].name);

  const locationData = locations.find((loc) => loc.name === location);

  return (
    <section id="location" className="relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Switch button */}
        <div className="flex justify-center mb-16 lg:mb-24">
          <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex gap-2">
            {locations.map((loc) => (
              <button
                key={loc.name}
                onClick={() => setLocation(loc.name)}
                className={`px-8 py-3 cursor-pointer rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                  location === loc.name
                    ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>
        </div>
        {/* Menu */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* left side */}
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <span className="text-xs font-secondary text-primary tracking-widest font-black uppercase">
              Lokalizacja
            </span>
            <h2 className="text-5xl md:text-6xl font-heading uppercase tracking-tighter leading-[0.85] mb-3 font-bold">
              {locationData?.name}
            </h2>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-sm font-medium ml-2">
              {locationData?.description}
            </p>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {locationData?.assets.map((asset, idx) => {
                const Icon = asset?.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-muted/15 border border-white/5 rounded-xl group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-200 transition-colors">
                      {asset.text}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-black mb-1">
                Adres:
              </p>
              <p className="text-lg font-secondary font-bold tracking-tight text-white">
                {locationData?.address}
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:col-span-7 h-[450px] lg:h-[600px] relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div key={locationData?.name} className="w-full h-full">
                <iframe
                  src={locationData?.googleMapLink}
                  className="w-full h-full border-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
