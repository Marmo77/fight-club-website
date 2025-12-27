import { PageData } from "@/data/pageData";
import { PawPrint } from "lucide-react";

const Footer = () => {
  const { site } = PageData;
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <PawPrint />
            </div>
            <span className="text-xl font-heading -tracking-tight uppercase">
              <span className="text-primary font-bold pr-1">
                {site.name.split(" ")[0]}
              </span>{" "}
              {site.name.split(" ")[1]}
            </span>
          </div>
          <nav className="flex items-center gap-6">
            {site.availableSocials.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
