const CommandWiki = () => {
  const commands = [
    {
      name: "!ping",
      description: "Checks if the bot is active and returns latency.",
    },
    {
      name: "!today",
      description:
        "Tells you if there is a Patriots game today. Shows a message and color-coded embed based on game status.",
    },
    {
      name: "!next",
      description:
        "Shows the next Patriots game (ignores the game on the same date).",
    },
    {
      name: "!schedule",
      description:
        "Displays the Patriots 2024 season schedule (first 10 games).",
    },
    {
      name: "!patriots-help",
      description: "Displays a help menu with all available commands.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-800/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-gradient-to-r from-blue-300 to-white bg-clip-text text-center">
          🏈 Patriots Bot Command Wiki
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {commands.map((cmd, index) => (
            <div
              key={index}
              className="p-6 bg-slate-900/70 rounded-xl border border-blue-800/30 hover:bg-slate-800/80 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {cmd.name}
              </h3>
              <p className="text-blue-100 leading-relaxed">{cmd.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommandWiki;
