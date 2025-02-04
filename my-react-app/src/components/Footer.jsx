import { FaPhone, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  // Function to handle scrolling when clicking on a link
  const handleLinkClick = (targetPath) => {
    if (pathname === targetPath) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-300">
              Contact Information
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-stone-400" />
                <span>73395 73344</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-stone-400" />
                <span>94881 66334</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-stone-400" />
                <span className="text-sm">
                  advgokulbalakrishnan6824@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={() => handleLinkClick("/")}
                  className="hover:text-stone-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  onClick={() => handleLinkClick("/works")}
                  className="hover:text-stone-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  onClick={() => handleLinkClick("/media")}
                  className="hover:text-stone-400"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  to="/internship"
                  onClick={() => handleLinkClick("/internship")}
                  className="hover:text-stone-400"
                >
                  Internship
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stone-300">
              Office Locations
            </h3>
            <div className="space-y-4 text-sm">
              <p>
                <strong>Coimbatore:</strong>
                <br />
                II Floor, Sri Kumarn Building,
                <br />
                Chinnasamy Naidu Road,
                <br />
                New Siddhapudur, Coimbatore – 641 044
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center">
          <p className="text-sm text-stone-400">
            © {new Date().getFullYear()} Adv. Gokul Balakrishnan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
