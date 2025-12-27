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
      <div className="container py-14 px-8 md:px-16 mx-auto text-left">
        <div className="flex max-w-7xl justify-between space-x-4">
          {/* Basic Info */}
          <div className="">
            <div className="font-semibold font-heading flex gap-2 uppercase text-xl mb-2">
              <span className="text-primary">{site.name.split(" ")[0]}</span>
              <span className="text-primary-foreground">
                {site.name.split(" ")[1]}
              </span>
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
      <div className="">
        <div className="text-left">1</div>
        <div className="text-right"></div>
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
    <div className="flex flex-col justify-start gap-0.5">
      <h4 className="font-extrabold text-[13px] leading-6 tracking-wide text-primary">
        {title}
      </h4>
      {type === "contact" && (
        <div className="flex flex-col text-xs pl-1 gap-0.5 text-muted-foreground">
          {(content as string[]).map((item, index) => (
            <a
              key={index}
              href={prefix(item)}
              className="flex gap-1 text-primary-foreground font-semibold"
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
        <div className="flex flex-col text-xs pl-1 text-muted-foreground">
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
        <div className="flex flex-col items-center text-xs gap-1 pl-1 text-muted-foreground">
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
