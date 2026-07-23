export default function BookPage({ data, side }) {
  return (
    <div
      className={`
        relative
        w-1/2
        h-full
        bg-[#F7F1E3]
        p-10
        flex
        flex-col
        ${side === "left" ? "rounded-l-xl" : "rounded-r-xl"}
      `}
    >
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white via-transparent to-gray-300 rounded-inherit" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <p className="uppercase tracking-[0.3em] text-sm text-amber-700">
          {data.chapter}
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          {data.title}
        </h2>

        <p className="mt-2 italic text-gray-500">{data.period}</p>

        <div className="mt-10 space-y-6">
          {data.events.map((event, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-amber-700" />

              <p className="leading-7 text-gray-700">
                {event}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto text-center text-gray-500">
          {data.page}
        </div>
      </div>
    </div>
  );
}