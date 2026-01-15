import { companies } from './logo-section'

export const Companies = () => {
  return (
    <div className="pt-20 pb-10 border-b border-gray-100 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-xl text-gray-800 mb-10">
          Companies we have helped grow
        </p>

        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
