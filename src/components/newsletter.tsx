export const NewsletterSection = () => {
  return (
    <section className="py-20 bg-white px-6">
      {/* Container with light blue/lilac background to match design */}
      <div className="max-w-6xl mx-auto bg-[#F8F9FF] rounded-3xl p-8 md:p-16 relative overflow-visible">
        {/* Decorative Scribble/Dots in top right */}
        <div className="absolute -top-6 -right-6 md:-top-7.5 md:-right-7.5 w-24 h-24 pointer-events-none opacity-80">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85 15C83 17 81 19 82 22C83 25 86 24 88 22C90 20 89 17 87 15"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M70 25C68 27 66 29 67 32C68 35 71 34 73 32C75 30 74 27 72 25"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M80 40C78 42 76 44 77 47C78 50 81 49 83 47C85 45 84 42 82 40"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M60 45C58 47 56 49 57 52C58 55 61 54 63 52C65 50 64 47 62 45"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* ... simplified dots ... */}
            <circle cx="85" cy="15" r="1.5" fill="black" />
            <circle cx="70" cy="25" r="1.5" fill="black" />
            <circle cx="80" cy="40" r="1.5" fill="black" />
            <circle cx="60" cy="45" r="1.5" fill="black" />
            <circle cx="88" cy="28" r="1.5" fill="black" />
            <circle cx="75" cy="10" r="1.5" fill="black" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="max-w-md">
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-6">
              OUR NEWSLETTER
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              Stay updated with our weekly newsletter
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Why kept very ever home mrs. Considered sympathize ten uncommonly
              occasional assistance sufficient not. Letter of on become he
              tended active enable to.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="bg-transparent">
            <h3 className="text-2xl font-bold text-indigo-900 mb-8">
              Signup For Newsletter
            </h3>
            <form className="space-y-4 max-w-sm lg:ml-auto">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-md border-none shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-300 text-gray-700"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 rounded-md border-none shadow-sm focus:ring-2 focus:ring-indigo-500 bg-white placeholder-gray-300 text-gray-700"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#FF8C66] hover:bg-[#ff7a4d] text-white font-bold py-4 rounded-md shadow-lg shadow-orange-200 transition-all uppercase tracking-wide"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
