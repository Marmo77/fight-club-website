import { PageData } from "@/data/pageData";

interface SocialsProps {
  label: string;
  href: string;
}
const Footer = () => {
  const { site } = PageData;
  const socials: SocialsProps[] = site.socials.map((social) => ({
    label: social.label,
    href: social.href,
  }));
  return (
    <footer id="footer" className="border-t border-border mt-4 pt-2">
      <div className="container py-14 px-8 lg:px-16 mx-auto text-left">
        <div className="flex max-w-7xl mx-auto flex-col md:flex-row md:justify-between justify-center items-center">
          {/* Basic Info */}
          <div className="text-center md:text-left md:block flex flex-col items-center">
            <div className="font-bold font-heading flex gap-2 uppercase text-xl mb-2">
              <span className="text-primary">{site.name.split(" ")[0]}</span>
              <span className="text-primary-foreground">
                {site.name.split(" ")[1]}
              </span>
            </div>
            <div className="text-xs text-muted-foreground max-w-[250px]">
              {site.description}
            </div>
          </div>
          {/* Contact */}
          <FooterSection
            title="Kontakt"
            content={[site.address, site.phone, site.email]}
            type="contact"
          />
          {/* Opening Hours */}
          <FooterSection
            title="Godziny Otwarcia"
            content={[site.openingHours.weekdays, site.openingHours.weekends]}
            type="openingHours"
          />
          {/* Socials */}
          <FooterSection
            title="Social Media"
            content={socials}
            type="socials"
          />
        </div>
      </div>
      <div className="container mx-auto flex md:flex-row flex-col items-center gap-2 md:items-start md:gap-0 justify-between border-t border-border px-8 md:px-16 py-4 text-[11px] font-medium text-muted-foreground">
        <p className="text-left">
          © {new Date().getFullYear()} {site.name}. Wszelkie prawa zastrzeżone.
        </p>
        <div className="text-right flex gap-3">
          <a
            href="#"
            className="hover:text-primary duration-300 transition-colors"
          >
            Polityka Prywatności
          </a>
          <a
            href="#"
            className="hover:text-primary duration-300 transition-colors"
          >
            Regulamin Klubu
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({
  title,
  content,
  type,
}: {
  title: string;
  content: string[] | SocialsProps[];
  type: "contact" | "openingHours" | "socials";
}) => {
  const prefix = (item: string) => {
    if (item.includes("+")) return `tel:${item}`;
    if (item.includes("@")) return `mailto:${item}`;
    return "";
  };
  return (
    <div className="flex flex-col gap-0.5 md:self-start">
      <h4 className="font-extrabold text-[13px] text-center md:text-left leading-6 tracking-wide text-primary">
        {title}
      </h4>
      {type === "contact" && (
        <div className="flex flex-col text-center md:text-left text-xs gap-0.5 text-muted-foreground">
          {(content as string[]).map((item, index) => (
            <a
              key={index}
              href={prefix(item)}
              className="flex gap-1 md:justify-start justify-center text-primary-foreground font-semibold"
            >
              <span>
                {item.includes("+")
                  ? "Telefon:"
                  : item.includes("@")
                  ? "Email:"
                  : "Adres:"}
              </span>
              <span className="text-muted-foreground hover:text-primary duration-500 transition-colors cursor-pointer font-medium">
                {item}
              </span>
            </a>
          ))}
        </div>
      )}
      {type === "openingHours" && (
        <div className="flex flex-col text-center md:text-left text-xs text-muted-foreground">
          {(content as string[]).map((item, index) => (
            <p
              key={index}
              className="flex gap-1 text-primary-foreground font-semibold"
            >
              <span>{item.split(" ")[0]}</span>
              <span className="text-muted-foreground hover:text-primary duration-500 transition-colors cursor-pointer font-medium">
                {item.split(" ")[1]}
              </span>
            </p>
          ))}
        </div>
      )}
      {type === "socials" && (
        <div className="flex flex-col items-center text-xs gap-1 text-muted-foreground">
          {(content as SocialsProps[]).map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-1 text-primary-foreground font-semibold"
            >
              <span className="text-muted-foreground hover:text-primary duration-500 transition-colors cursor-pointer font-medium">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Footer;
