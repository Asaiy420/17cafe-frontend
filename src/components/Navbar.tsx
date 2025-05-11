import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-black/90 backdrop-blur-md" : "py-4 bg-black/80"
      }`}
    >
      <div className="w-full mx-auto flex justify-between items-center px-6 md:px-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-amber-400">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z" />
            </svg>
          </span>
          <span className="text-xl font-bold text-white tracking-wide">
            17 BEANS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/locations">Locations</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <Link
            to="/order"
            className="ml-6 bg-amber-400 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-amber-300 transition-all duration-200"
          >
            ORDER NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black border-t border-neutral-800 w-full"
        >
          <div className="w-full px-6 py-4 flex flex-col">
            <div className="space-y-2">
              <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink
                to="/menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </MobileNavLink>
              <MobileNavLink
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </MobileNavLink>
              <MobileNavLink
                to="/locations"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Locations
              </MobileNavLink>
              <MobileNavLink
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
            </div>
            <div className="pt-4 mt-4 border-t border-neutral-800">
              <Link
                to="/order"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-amber-400 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-300 inline-block w-full text-center"
              >
                ORDER NOW
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <Link
    to={to}
    className="text-neutral-200 hover:text-amber-400 transition-colors text-sm uppercase tracking-wide font-medium"
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="block py-2.5 text-neutral-200 hover:text-amber-400 transition-colors text-sm uppercase tracking-wide font-medium"
  >
    {children}
  </Link>
);

export default Navbar;
