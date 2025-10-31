import InteractiveLamp from "@/components/InteractiveLamp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-8">
          <a
            href="#pre-order"
            className="block font-kode text-primary hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base underline"
          >
            Pre-order
          </a>
          <a
            href="https://discord.gg/lelamp"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-kode text-primary hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base underline"
          >
            Join Discord
          </a>
          <a
            href="https://github.com/lelamp"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-kode text-primary hover:opacity-80 transition-opacity text-xs sm:text-sm md:text-base underline"
          >
            Github
          </a>
        </div>
      </nav>

      {/* Interactive Lamp */}
      <InteractiveLamp />

      {/* Main Content */}
      <main className="relative z-10 flex items-end min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col justify-end">
            <h1 className="font-mplus  text-primary text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none mb-2 sm:mb-4">
              LeLamp
            </h1>
            <p className="font-kode text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              [Human Computer Lab]
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
