import { DashboardMockup } from './dashboard-mockup'
import { FaCheck } from 'react-icons/fa'

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F3F5FF] font-sans text-gray-800 overflow-x-hidden relative">
      <main className="max-w-7xl mx-auto px-6 mt-10 lg:mt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl z-10">
          <h1 className="text-5xl lg:text-[4rem] leading-[1.1] font-medium text-black mb-6 tracking-tight">
            Managing business payments has never been easier
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-md shadow-xl shadow-indigo-200 transition transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="text-indigo-600 font-bold flex items-center hover:underline group">
              See How It Works
              <span className="hidden group-hover:inline-block ml-1 transition-all">
                →
              </span>
            </button>
          </div>

          <div className="flex space-x-8 text-gray-500 font-medium">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center mr-2 shadow-md">
                <FaCheck className="text-white text-[10px]" />
              </div>
              <span className="text-sm">Free Register</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center mr-2 shadow-md">
                <FaCheck className="text-white text-[10px]" />
              </div>
              <span className="text-sm">Great Service</span>
            </div>
          </div>
        </div>

        {/* Right Content (The Visual) */}
        <DashboardMockup />
      </main>
    </div>
  )
}
