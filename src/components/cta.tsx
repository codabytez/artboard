export const CTASection = () => {
  return (
    <section className="py-20 bg-white px-6">
      {/* Container with matching brand shape and scribble */}
      <div className="max-w-6xl mx-auto bg-[#F8F9FF] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
        {/* Hand-drawn scribble decoration in top left */}
        <div className="absolute top-8 left-8 w-16 h-16 opacity-80 rotate-[-15deg]">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20 L20 10 M30 30 L40 20 M50 40 L60 30 M20 50 L30 40 M40 60 L50 50"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M15 35 L25 25 M35 45 L45 35 M55 55 L65 45"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Get Started With AR Shakir
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not.
          </p>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-5 px-12 rounded-md shadow-2xl shadow-indigo-200 transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
