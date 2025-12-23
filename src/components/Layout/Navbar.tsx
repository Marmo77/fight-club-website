import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, PawPrint, X } from "lucide-react";

interface navItemsProps {
  label: string;
  href: string;
}

const navItems: navItemsProps[] = [
  { label: "O klubie", href: "#about" },
  { label: "Trenerzy", href: "#trainers" },
  { label: "Grafik", href: "#schedule" },
  { label: "Cennik", href: "#pricing" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <PawPrint />
          </div>
          <span className="text-xl font-heading tracking-tight uppercase">
            <span className="text-primary font-bold pr-1">Taurus</span> Goleniów
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="bg-primary hover:bg-primary-hover px-5 py-2 rounded font-bold transition-all hover:scale-105 duration-200">
              DOŁĄCZ TERAZ
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <Button
          className="lg:hidden text-white bg-transparent hover:bg-transparent hover:scale-105"
          size={"icon"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {/* Mobile navmenu */}
        {isOpen && (
          <nav className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-primary/60 flex flex-col p-6 gap-3 shadow-2xl shadow-primary/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                onClick={() => setIsOpen(false)}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-all border-b border-border/50 pb-2 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="flex justify-center">
              <Button className="bg-primary flex hover:bg-primary-hover w-full px-5 py-2 rounded font-bold transition-all group">
                <span className="group-hover:scale-105 duration-200">
                  DOŁĄCZ TERAZ
                </span>
              </Button>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
