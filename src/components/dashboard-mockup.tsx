import dashboardImage from '../assets/dashboard-overview.png'
import revenueImage from '../assets/revenue.svg'

export const DashboardMockup = () => {
  return (
    <div className="relative mt-12 lg:mt-0 perspective-[1000px] left-40">
      {/* Main Dashboard Card (Backdrop) */}
      <div className="relative rounded-xl overflow-hidden h-136.75 w-199">
        <img
          src={dashboardImage}
          alt="Dashboard Overview"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Floating Card 1: Revenue (Left Center) */}
      <div className="absolute top-[40%] -left-4 md:-left-8 z-20 max-w-50 w-full">
        <img src={revenueImage} alt="Revenue Icon" className="w-60 h-38" />
      </div>

      {/* Floating Card 2: Total Balance (Bottom Left) */}
      <div className="absolute bottom-[10%] -left-2 md:-left-12 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] w-48 z-20">
        <div className="mb-4">
          <div className="text-gray-400 text-[10px] font-bold uppercase">
            Total Balance
          </div>
          <div className="text-gray-900 text-xl font-bold flex items-center mt-1">
            $4,200{' '}
            <span className="text-green-500 text-[10px] ml-2 font-bold">
              +14%
            </span>
          </div>
        </div>
        {/* CSS Bar Chart */}
        <div className="flex items-end justify-between h-10 space-x-1">
          {[40, 60, 30, 50, 80, 45, 100].map((h, i) => (
            <div
              key={i}
              className={`w-2 rounded-t-sm ${i === 4 || i === 6 ? 'bg-indigo-600' : 'bg-gray-100'}`}
              style={{ height: `${h}%` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
