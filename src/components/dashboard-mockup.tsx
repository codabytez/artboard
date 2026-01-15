import dashboardImage from '../assets/dashboard-overview.png'
import revenueImage from '../assets/revenue.svg'
import balance from '../assets/total-balance.svg'

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
      <div className="absolute bottom-[10%] -left-2 md:-left-12 w-62 z-20">
        <img src={balance} alt="Total Balance Icon" className="w-60.75 h-42" />
      </div>
    </div>
  )
}
