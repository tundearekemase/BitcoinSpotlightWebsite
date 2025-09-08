import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
            <div className="bitcoin-gradient w-10 h-10 rounded-full flex items-center justify-center">
              <i className="fab fa-bitcoin text-accent-foreground text-xl font-bold"></i>
            </div>
            <span className="text-xl font-bold text-foreground">BitcoinHub</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className={`nav-link px-3 py-2 text-sm font-medium ${location === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                data-testid="link-home-nav"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link px-3 py-2 text-sm font-medium ${location === '/contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                data-testid="link-contact-nav"
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="cta-button text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold"
                data-testid="button-get-started"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              type="button" 
              className="text-foreground hover:text-primary p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/90 backdrop-blur-md rounded-lg mt-2">
              <Link 
                href="/" 
                className="nav-link block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
                data-testid="link-home-mobile"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="nav-link block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
                data-testid="link-contact-mobile"
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="cta-button inline-block text-accent-foreground px-6 py-2 rounded-full text-sm font-semibold mt-2"
                onClick={() => setIsMenuOpen(false)}
                data-testid="button-get-started-mobile"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
