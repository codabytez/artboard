import { FaChevronDown } from 'react-icons/fa'

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#F3F5FF]">
      <div className="mx-auto px-6 py-6 flex justify-between items-center relative z-20 max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-tight text-black cursor-pointer">
          AR SHAKIR
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          {['Product', 'Template'].map(item => (
            <a
              key={item}
              href="#"
              className="flex items-center hover:text-indigo-600 transition"
            >
              {item} <FaChevronDown className="ml-1 text-[10px]" />
            </a>
          ))}
          <a href="#" className="hover:text-indigo-600 transition">
            Blog
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Pricing
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-sm font-medium text-gray-600 hover:text-indigo-600">
            Sign In
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-3 px-6 shadow-lg shadow-indigo-500/30 transition rounded-sm">
            Start Free
          </button>
        </div>
      </div>
    </nav>
  )
}
