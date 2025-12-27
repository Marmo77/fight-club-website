import { PageData } from "@/data/pageData";

const Footer = () => {
  const { site } = PageData;
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
          <div className="">
            <h4 className="font-bold text-sm leading-6 tracking-wide text-primary">
              Kontakt
            </h4>
          </div>
          {/* Opening Hours */}
          <div className="">
            <h4 className="font-bold text-sm leading-6 tracking-wide text-primary">
              Godziny Otwarica
            </h4>
          </div>
          {/* Socials */}
          <div className="">
            <h4 className="font-bold text-sm leading-6 tracking-wide text-primary">
              Socials
            </h4>
          </div>
        </div>
      </div>
      <div className="">
        <div className="text-left">1</div>
        <div className="text-right"></div>
      </div>
    </footer>
  );
};

export default Footer;
