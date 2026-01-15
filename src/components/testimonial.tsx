import { FaStar } from 'react-icons/fa'

const testimonials = [
  {
    quote:
      'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and.',
    name: 'Serhiy Hipskyy',
    role: 'CEO WebWorld',
    image: 'https://i.pravatar.cc/150?u=serhiy',
  },
  {
    quote:
      'Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
    name: 'Justus Menke',
    role: 'CEO GetNextDesign',
    image: 'https://i.pravatar.cc/150?u=justus',
  },
  {
    quote:
      'Accusamus et iusto odi ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    name: 'Britain Eriksen',
    role: 'CEO Eureka',
    image: 'https://i.pravatar.cc/150?u=britain',
  },
]

export const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">
            Testimonial
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            What Our Happy <br /> User Says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="relative pt-10">
              {/* Floating Quote Icon/Circle */}
              <div className="absolute top-4 left-8 w-12 h-12 bg-indigo-700 rounded-full z-20 flex items-center justify-center shadow-lg" />

              {/* Card Container */}
              <div className="bg-white border border-gray-100 py-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                {/* Rating Stars */}
                <div className="flex space-x-1 mb-6 px-8">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-orange-400 text-sm" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-500 text-base leading-relaxed mb-8 grow px-8">
                  "{item.quote}"
                </p>

                {/* Profile Info */}
                <div className="flex items-center space-x-4 border-t border-gray-100 px-8 pt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-sm object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-gray-900 text-sm leading-none mb-1">
                      {item.name}
                    </h5>
                    <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
