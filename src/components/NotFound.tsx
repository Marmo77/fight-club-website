const NotFound = () => {
  return (
    <section className="min-h-screen flex justify-center w-screen bg-background pt-16">
      <div className="max-w-4xl flex flex-col justify-center items-center gap-6 mx-auto px-4">
        <h1 className="text-9xl font-heading text-primary opacity-20">404</h1>
        <div className="relative -top-24 flex flex-col items-center gap-1">
          <h2 className="text-4xl font-heading uppercase mb-4">
            Nokaut! Strona nie istnieje.
          </h2>
          <p className="text-muted mb-8">
            Prawdopodobnie zgubiłeś drogę na ring.
          </p>
          <a
            href="/"
            className="bg-primary text-primary-foreground px-8 py-4 rounded font-bold hover:bg-primary-hover transition-all"
          >
            WRÓĆ DO KLUBU
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
