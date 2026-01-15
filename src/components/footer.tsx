import {
  FaLinkedinIn,
  FaFacebookMessenger,
  FaTwitter,
  FaInfinity,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand and Socials Column */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-extrabold text-black">AR</h3>
            <p className="text-gray-500 text-base max-w-xs leading-relaxed">
              Finance helps companies manage payments easily.
            </p>
            <div className="flex space-x-5 text-indigo-700">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <FaFacebookMessenger size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <FaInfinity size={20} />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Contract
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Accounting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Proposal
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Proposal Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Invoice Template
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">
                  How to write a contract
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-gray-900 text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-black" />
                <a
                  href="mailto:shakir260@gmail.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  shakir260@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-black" />
                <span>+92-300-848-8985</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-100 pt-10 text-center">
          <p className="text-gray-600 text-sm font-medium">
            Copyright @ AR Shakir 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
