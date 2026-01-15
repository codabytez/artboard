import {
  FaChartBar,
  FaFileInvoiceDollar,
  FaExchangeAlt,
  FaAward,
  FaCheck,
  FaUser,
} from 'react-icons/fa'

export const FeaturesSection = () => {
  return (
    <div className="py-20 bg-white max-w-300 mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-2">
            Why AR Shakir
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Specially Designed For Crypto Payments
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-13">
          {/* --- Feature 1: Quick Summaries --- */}
          <div>
            {/* Visual Card */}
            <div className="bg-[#F3F5FF] p-6 rounded-lg mb-6 relative overflow-visible h-59.5 flex items-center justify-center">
              {/* Orange Decoration */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-orange-400 opacity-80"></div>

              {/* Floating White Card */}
              <div className="bg-white p-4 rounded-xl shadow-lg relative z-10 w-full">
                <div className="grid grid-cols-2 gap-4">
                  {/* Item 1 */}
                  <div>
                    <div className="w-8 h-8 rounded bg-green-100 text-green-600 flex items-center justify-center mb-2 text-xs">
                      <FaChartBar />
                    </div>
                    <div className="text-[8px] text-gray-400">
                      Total net worth
                    </div>
                    <div className="text-xs font-bold">$5,250.90</div>
                  </div>
                  {/* Item 2 */}
                  <div>
                    <div className="w-8 h-8 rounded bg-orange-100 text-orange-500 flex items-center justify-center mb-2 text-xs">
                      <FaFileInvoiceDollar />
                    </div>
                    <div className="text-[8px] text-gray-400">
                      Total earnings
                    </div>
                    <div className="text-xs font-bold">$10,596.80</div>
                  </div>
                  {/* Item 3 */}
                  <div>
                    <div className="w-8 h-8 rounded bg-blue-100 text-blue-500 flex items-center justify-center mb-2 text-xs">
                      <FaExchangeAlt />
                    </div>
                    <div className="text-[8px] text-gray-400">
                      harvested losses
                    </div>
                    <div className="text-xs font-bold">$0.00</div>
                  </div>
                  {/* Item 4 */}
                  <div>
                    <div className="w-8 h-8 rounded bg-purple-100 text-purple-500 flex items-center justify-center mb-2 text-xs">
                      <FaAward />
                    </div>
                    <div className="text-[8px] text-gray-400">
                      Total for all goals
                    </div>
                    <div className="text-xs font-bold">$5,596.80</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <h3 className="text-xl mb-3">Quick Summaries</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Warmly little before cousin sussex entire men set. Blessing it
              ladyship on sensible judgment settling outweigh.
            </p>
          </div>

          {/* --- Feature 2: Manage Wallets --- */}
          <div>
            {/* Visual Card */}
            <div className="bg-[#F3F5FF] p-6 rounded-lg mb-6 relative overflow-visible h-59.5 flex items-center justify-center">
              {/* Orange Decoration */}
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-orange-400 opacity-80 z-0"></div>

              {/* Floating White Card */}
              <div className="p-4 rounded-xl relative z-10 w-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-sm">My</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                <div className="flex justify-between items-end h-39.75">
                  {/* BTC */}
                  <div className="w-12 shadow-lg h-full border-[0.5px] border-gray-100 rounded-full flex flex-col items-center justify-between py-2 bg-white">
                    <span className="text-[8px] -rotate-90 text-gray-400 mt-2">
                      BTC
                    </span>
                    <span className="text-[10px] font-bold text-gray-600">
                      69<span className="text-[6px]">%</span>
                    </span>
                  </div>
                  {/* LTC */}
                  <div className="w-12 shadow-lg h-full border-[0.5px] border-gray-100 rounded-full flex flex-col items-center justify-between py-2 bg-white">
                    <span className="text-[8px] -rotate-90 text-gray-400 mt-2">
                      LTC
                    </span>
                    <span className="text-[10px] font-bold text-gray-600">
                      82<span className="text-[6px]">%</span>
                    </span>
                  </div>
                  {/* XRP (Active) */}
                  <div className="w-12 h-full bg-indigo-600 shadow-lg shadow-indigo-300 rounded-full flex flex-col items-center justify-between py-2">
                    <span className="text-[8px] -rotate-90 text-white/70 mt-3">
                      XRP
                    </span>
                    <span className="text-[10px] font-bold text-white">
                      99<span className="text-[6px]">%</span>
                    </span>
                  </div>
                  {/* BLT */}
                  <div className="w-12 shadow-lg h-full border-[0.5px] border-gray-100 rounded-full flex flex-col items-center justify-between py-2 bg-white">
                    <span className="text-[8px] -rotate-90 text-gray-400 mt-2">
                      BLT
                    </span>
                    <span className="text-[10px] font-bold text-gray-600">
                      69<span className="text-[6px]">%</span>
                    </span>
                  </div>
                  {/* Add New */}
                  <div className="w-12 h-full border border-dashed border-gray-300 rounded-full flex flex-col items-center justify-center">
                    <span className="text-[8px] -rotate-90 text-gray-400 whitespace-nowrap">
                      + ADD NEW
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <h3 className="text-xl mb-3">Manage your wallets</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Worse linen an of civil jokes leave offer. Parties all clothes
              removal cheered calling prudent her. Latter person am secure.
            </p>
          </div>

          {/* --- Feature 3: Request Payments --- */}
          <div>
            {/* Visual Card */}
            <div className="bg-[#F3F5FF] p-6 rounded-lg mb-6 relative overflow-visible h-59.5 flex items-center justify-center">
              {/* Orange Decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-orange-400 opacity-80"></div>

              {/* Floating White Card */}
              <div className="p-4 relative z-10 w-full">
                <div className="space-y-3">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 bg-white h-14">
                    <div className="w-4 h-4 rounded-full border border-indigo-600"></div>
                    <div className="flex-1 ml-3">
                      <div className="text-[10px] font-bold">John Do</div>
                      <div className="text-[8px] text-gray-400">
                        Mon, Feb 28
                      </div>
                    </div>
                  </div>
                  {/* Row 2 (Active) */}
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white shadow-sm border border-gray-50 h-14">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
                      <FaCheck className="text-white text-[8px]" />
                    </div>
                    <div className="flex-1 ml-3">
                      <div className="text-[10px] font-bold">Mike Taylor</div>
                      <div className="text-[8px] text-gray-400">Tue, Feb</div>
                    </div>
                    {/* Tiny avatar proxy */}
                    <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center text-blue-500 text-[10px]">
                      <FaUser />
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 h-14 bg-white">
                    <div className="w-4 h-4 rounded-full border border-indigo-600"></div>
                    <div className="flex-1 ml-3">
                      <div className="text-[10px] font-bold">Angela Taylor</div>
                      <div className="text-[8px] text-gray-400">Tue, Feb</div>
                    </div>
                    {/* Tiny avatar proxy */}
                    <div className="w-6 h-6 rounded bg-pink-100 flex items-center justify-center text-pink-500 text-[10px]">
                      <FaUser />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <h3 className="text-xl mb-3">Request Payments</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              And residence for met the estimable disposing. Mean if he they
              been no hold mr. Is at much do made took held help.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
