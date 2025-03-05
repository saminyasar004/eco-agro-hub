
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="relative z-50 w-full sticky top-0">
      {/* Top Bar */}
      <div className="bg-argos-green text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:info@argosindustries.com" className="flex items-center hover:text-white/80 transition-colors">
              <Mail className="h-4 w-4 mr-1" />
              <span>info@argosindustries.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center hover:text-white/80 transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              <span>+123 456 7890</span>
            </a>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <span>Pioneering Sustainable Agriculture</span>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <nav 
        className={cn(
          "w-full backdrop-blur-lg transition-all duration-300",
          scrolled 
            ? "bg-white/80 shadow-md py-2" 
            : "bg-white/95 py-4"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/46b49ae9-e95c-4dc8-9c75-4dc86b3f18ab.png" 
              alt="Argos Industries Ltd" 
              className="h-12 md:h-16 mr-2"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={cn(
                  "nav-link font-medium",
                  location.pathname === route.path && "nav-link-active"
                )}
              >
                {route.name}
              </Link>
            ))}
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-argos-navy" />
            ) : (
              <Menu className="h-6 w-6 text-argos-navy" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/46b49ae9-e95c-4dc8-9c75-4dc86b3f18ab.png" 
              alt="Argos Industries Ltd" 
              className="h-10 mr-2"
            />
          </Link>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-argos-navy" />
          </button>
        </div>
        <div className="p-4 flex flex-col space-y-4">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={cn(
                "py-2 px-4 text-lg font-medium border-b border-gray-100",
                location.pathname === route.path ? "text-argos-green" : "text-argos-navy"
              )}
            >
              {route.name}
            </Link>
          ))}
          <div className="pt-4">
            <a href="/contact" className="btn-primary w-full block text-center">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
