import { FaPlus } from 'react-icons/fa'

export const ManageExpensesSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <div className="max-w-xl order-2 lg:order-1">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">
            Our Feature
          </h4>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
            Manage all expenses & incomes from your dashboard
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-4 px-10 rounded-md shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1">
            Get Started
          </button>
        </div>

        {/* Right Side: Dashboard & Invoice Mockup */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Main Dashboard Background Card */}
          <div className="h-54.75 bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative z-10 border border-gray-50 top-0">
            <h3 className="font-bold text-lg mb-6 text-gray-800">
              Daily Activities
            </h3>

            {/* Bar Chart Simulation */}
            <div className="flex items-end justify-between h-32 px-2 mb-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 bg-indigo-600 rounded-full h-24"></div>
                <span className="text-[10px] text-gray-400">Mo</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 bg-orange-400 rounded-full h-16"></div>
                <span className="text-[10px] text-gray-400">Tue</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 bg-indigo-600 rounded-full h-20"></div>
                <span className="text-[10px] text-gray-400">Wed</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-3 bg-orange-400 rounded-full h-18"></div>
                <span className="text-[10px] text-gray-400">Thu</span>
              </div>
            </div>
          </div>

          {/* Floating "Create Invoice" Modal Overlay */}
          <div className="absolute -bottom-6 -right-4 md:-right-10 bg-white rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] w-72 z-20 p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-sm text-gray-800">
                Create Invoice
              </h4>
              <span className="text-gray-400 text-xs">✕</span>
            </div>

            {/* Skeleton UI elements */}
            <div className="space-y-4 mb-6">
              <div className="h-6 bg-gray-200 rounded-sm w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded-sm w-full"></div>
              <div className="h-6 bg-gray-100 rounded-sm w-1/3"></div>
            </div>

            <div className="mb-6">
              <p className="text-[10px] text-gray-400 mb-2 uppercase font-bold tracking-wider">
                For to
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-orange-500 overflow-hidden flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">AS</span>
                  </div>
                  <span className="text-xs font-bold text-gray-800">
                    AR Shakir
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
                  <FaPlus className="text-[8px]" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-lg font-bold text-gray-900 tracking-tight">
                USD 2000
              </span>
            </div>

            <button className="w-full bg-gray-100 text-gray-800 font-bold py-3 rounded-md text-xs uppercase tracking-widest hover:bg-gray-200 transition">
              Don
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
