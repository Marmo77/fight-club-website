import { Card, CardContent, CardHeader } from "../ui/card";
import { PageData, scheduleData } from "@/data/pageData";
import type { GroupSchedule } from "@/types/types";

const Schedule = () => {
  const { site } = PageData;
  return (
    <section
      id="schedule"
      className="container mx-auto px-6 lg:py-28 py-20 bg-background/50"
    >
      <div className="container mx-auto text-center px-4 md:px-6 mb-16">
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
          Aktualny Grafik
        </p>
        <h2 className="text-primary-foreground md:text-5xl text-4xl font-semibold font-heading uppercase tracking-tighter">
          Harmonogram Treningów
        </h2>
        <h4 className="text-muted text-[10px] uppercase font-bold tracking-widest mt-3">
          Grafik obowiązuje od 1 września
        </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-3">
        {scheduleData.map((day) => (
          <ScheduleCard title={day.title} groups={day.groups} />
        ))}
      </div>
      {/* Bonus Info */}
      <div className="mt-16 max-w-4xl mx-auto text-center space-y-4">
        <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        <p className="text-muted-foreground text-sm leading-relaxed font-medium">
          Treningi mogą ulec zmianie lub zostać odwołane (szczególnie w dni
          świąteczne). Prosimy o bieżące śledzenie naszych{" "}
          <a
            href={site.socials.facebook}
            className="text-primary font-bold underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-all"
          >
            SOCIAL MEDIA
          </a>
          , gdzie publikujemy najnowsze informacje i komunikaty dla klubowiczów.
        </p>
        <div className="flex justify-center gap-6 pt-4">
          <a
            href={site.socials.facebook}
            className="text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary transition-colors"
          >
            Facebook
          </a>
          <a
            href={site.socials.instagram}
            className="text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

const ScheduleCard = ({
  title,
  groups,
}: {
  title: string;
  groups: GroupSchedule[];
}) => {
  return (
    <Card className="bg-card/30 border hover:-translate-y-0.5 border-border rounded-3xl flex flex-col group hover:border-primary/20 transition-all duration-300">
      <CardHeader className="bg-card-foreground/10 py-3 border-border rounded-t-2xl group-hover:bg-primary/5 transition-colors">
        <h3 className="font-heading text-primary-foreground font-bold uppercase text-xl tracking-tight text-center group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="p-3 space-y-3 grow min-h-[250px]">
        {groups.map((day) => (
          <div className="flex flex-col bg-muted/25 p-3 mr-2 hover:bg-muted/15 hover:translate-x-2 duration-500 rounded-lg border-l-4 border-border/80 hover:border-primary/50 transition-all">
            <h4 className="text-[10px] font-black font-sans uppercase tracking-wider text-muted-foreground">
              {day.title}
            </h4>
            <p className="text-lg font-sans font-bold leading-none tracking-tight text-primary-foreground">
              {day.time}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Schedule;
