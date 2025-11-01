"use client";

export default function StatisticsSection() {
  const statistics = [
    {
      number: "1.5+",
      label: "Years of",
      sublabel: "Experience",
    },
    {
      number: "25+",
      label: "Projects",
      sublabel: "Completed",
    },
    {
      number: "15+",
      label: "Clients",
      sublabel: "Worldwide",
    },
    {
      number: "5+",
      label: "Awards",
      sublabel: "Achieved",
    },
  ];

  return (
    <div className="relative mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
        {statistics.map((stat, index) => (
          <div key={index} className="relative group">
            <div className="relative h-full py-5 px-6 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/40 backdrop-blur-sm overflow-hidden">
              {/* Static corner accents */}
              <div className="absolute top-0 left-0 size-8 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-teal-500/50 rounded-br-2xl" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

              <div className="relative flex items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="text-2xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="space-y-1">
                    <div className="text-zinc-400 text-base">
                      {stat.label}
                    </div>
                    <div className="text-white text-lg font-bold">
                      {stat.sublabel}
                    </div>
                  </div>
                </div>

                {/* Index number */}
                <div className="text-4xl md:text-6xl font-black text-zinc-800/30 group-hover:text-emerald-500/10 transition-colors duration-300">
                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}