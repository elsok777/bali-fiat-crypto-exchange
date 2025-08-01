import { Button } from "@/components/ui/button";
import { Shield, Menu, X, Home } from "lucide-react";
import { useState } from "react";

const Header = ({ onContactClick }: { onContactClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
                BALI KAPITAL
              </h1>
              <p className="text-sm text-gray-600 font-medium">GRUP PROPERTI</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-primary transition-colors duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-emerald-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Find Property
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-200/50 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-4">
              <a 
                href="#services" 
                className="text-gray-700 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-primary transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-50 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                className="mt-4 bg-gradient-to-r from-primary to-emerald-600 hover:from-emerald-600 hover:to-primary shadow-lg"
                onClick={() => {
                  setIsMenuOpen(false);
                  onContactClick();
                }}
              >
                Find Property
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;