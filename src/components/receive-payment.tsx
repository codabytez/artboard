import { FaCheck } from 'react-icons/fa'
import userPayment from '../assets/lady-pressing-phone.png'

export const ReceivePaymentsSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Visual Image with Floating UI */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Background Square Decoration */}
          <div className="absolute top-10 left-0 w-72 h-72 bg-indigo-50 -z-10 rounded-lg transform -rotate-3"></div>

          <div className="relative">
            {/* Main Image of Woman */}
            <img
              src={userPayment}
              alt="User managing payments"
              className="w-67 h-142 relative z-20"
            />

            {/* Floating Payment Notification Cards */}
            {/* <div className="absolute bottom-16 -right-4 md:-right-45 space-y-3 z-20 w-64"> */}
            {/* Row 1 */}
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center space-x-3 border border-gray-50 transform hover:scale-105 transition duration-300 absolute bottom-54.5 -right-4 md:-right-45 space-y-3 z-10 w-64">
              <div className="w-8 h-8 rounded-full border border-indigo-100 flex items-center justify-center text-[10px] text-gray-400">
                JD
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-gray-800">
                  John Do
                </div>
                <div className="text-[9px] text-gray-400">Mon, Feb 28</div>
              </div>
            </div>

            {/* Row 2 (Active/Success) */}
            <div className="bg-white p-3 rounded-xl shadow-2xl flex items-center space-x-3 transform translate-x-4 hover:scale-105 transition duration-300  absolute bottom-35 -right-4 md:-right-45 space-y-3 z-20 w-64">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <FaCheck className="text-white text-[10px]" />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-gray-800">
                  Mike Taylor
                </div>
                <div className="text-[9px] text-gray-400">Tue, Feb</div>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-md overflow-hidden">
                <div className="w-full h-full bg-indigo-200 flex items-center justify-center text-[8px] text-indigo-500 font-bold">
                  MT
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl flex items-center space-x-3 border border-gray-50 transform hover:scale-105 transition duration-300 absolute bottom-16 -right-4 md:-right-45 space-y-3 z-10 w-64">
              <div className="w-8 h-8 rounded-full border border-indigo-100 flex items-center justify-center text-[10px] text-gray-400">
                AT
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-gray-800">
                  Angela Taylor
                </div>
                <div className="text-[9px] text-gray-400">Tue, Feb</div>
              </div>
              <div className="w-8 h-8 bg-pink-100 rounded-md overflow-hidden">
                <div className="w-full h-full bg-pink-200 flex items-center justify-center text-[8px] text-pink-500 font-bold">
                  AT
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="max-w-lg">
          <h4 className="text-indigo-600 font-medium uppercase tracking-widest text-sm mb-4">
            Our Feature
          </h4>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-black mb-6 leading-tight">
            Receive payments quickly from anywhere
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to.
          </p>
          <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-4 px-10 rounded-md shadow-xl shadow-indigo-200 transition-all transform hover:-translate-y-1 active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
