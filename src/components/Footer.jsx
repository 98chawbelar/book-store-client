
import { IoBookOutline } from "react-icons/io5"
import FavIcon from "/fav-icon.png"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-whiteBg  py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2  w-full">
          <img src={FavIcon} alt="Fav Icon" className="w-10 h-8 mb-4" />
          <ul className="flex flex-col  md:flex-row gap-4">
            <li><a href="#home" className="hover:underline underline-offset-2 decoration-primary  ">Home</a></li>
            <li><a href="#services" className="hover:underline decoration-primary ">Services</a></li>
            <li><a href="#about" className="hover:underline decoration-primary ">About Us</a></li>
            <li><a href="#contact" className="hover:underline decoration-primary ">Contact</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2  w-full">
          <p className="mb-4">
            Subscribe to our newsletter to receive the latest updates, news, and offers!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/2  px-2 py-1 focus:outline-none rounded-l-md "
            />
            <button className="bg-primary/80 text-white  px-6 py-2 rounded-r-md hover:bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
          <li><a href="#terms" className="hover:text-primary">Terms of Service</a></li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer