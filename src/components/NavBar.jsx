import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ShoppingCart } from "lucide-react";

const NavBar = ({ cartItemCount = 0, onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-purple-100"
          : "bg-gradient-to-r from-purple-50/50 via-white/50 to-pink-50/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <a href="/" className="group">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                PRIME
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/product">Product</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/anchor">Contact</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-110"
            >
              {theme === "dark" ? (
                <Moon className="text-purple-600 w-5 h-5" />
              ) : (
                <Sun className="text-amber-500 w-5 h-5" />
              )}
            </button>

            {/* Cart Icon */}
            {onCartClick && (
              <button
                onClick={onCartClick}
                className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center hover:from-purple-200 hover:to-pink-200 transition-all duration-300 hover:scale-110"
              >
                <ShoppingCart className="text-purple-600 w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </button>
            )}

            {/* ADD TO CART BUTTON */}
            {onCartClick && (
              <button
                onClick={onCartClick}
                className="px-5 py-2.5 text-sm font-semibold text-white 
                bg-gradient-to-r from-green-500 to-emerald-600 
                rounded-full hover:shadow-lg hover:shadow-green-500/50 
                transition-all duration-300 hover:scale-105"
              >
                Add to Cart
              </button>
            )}

            <button className="px-6 py-2.5 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">
              Sign In
            </button>

            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center hover:from-purple-200 hover:to-pink-200 transition-all"
          >
            {menuOpen ? (
              <X className="text-purple-600 w-5 h-5" />
            ) : (
              <Menu className="text-purple-600 w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-white/95 backdrop-blur-lg border-t border-purple-100 shadow-xl">
          <div className="flex flex-col gap-1">
            <MobileNavLink href="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/product" onClick={() => setMenuOpen(false)}>Product</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/blog" onClick={() => setMenuOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink href="/anchor" onClick={() => setMenuOpen(false)}>Contact</MobileNavLink>
          </div>

          <div className="mt-6 pt-6 border-t border-purple-100 flex flex-col gap-3">

            <button
              onClick={toggleTheme}
              className="w-full py-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center gap-2 hover:from-purple-200 hover:to-pink-200 transition-all"
            >
              {theme === "dark" ? (
                <>
                  <Moon className="text-purple-600 w-5 h-5" />
                  <span className="text-sm font-semibold text-purple-600">Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="text-amber-500 w-5 h-5" />
                  <span className="text-sm font-semibold text-purple-600">Light Mode</span>
                </>
              )}
            </button>

            {/* Mobile Cart */}
            {onCartClick && (
              <button
                onClick={() => {
                  onCartClick();
                  setMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center gap-2 hover:from-purple-200 hover:to-pink-200 transition-all"
              >
                <ShoppingCart className="text-purple-600 w-5 h-5" />
                <span className="text-sm font-semibold text-purple-600">
                  Cart {cartItemCount > 0 && `(${cartItemCount})`}
                </span>
              </button>
            )}

            {/* Mobile Add to Cart */}
            {onCartClick && (
              <button
                onClick={() => {
                  onCartClick();
                  setMenuOpen(false);
                }}
                className="w-full py-3 text-sm font-semibold text-white 
                bg-gradient-to-r from-green-500 to-emerald-600 
                rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Add to Cart
              </button>
            )}

            <button className="w-full py-3 text-sm font-semibold text-purple-600 border-2 border-purple-200 rounded-xl hover:bg-purple-50 transition-all">
              Sign In
            </button>

            <button className="w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-lg transition-all"
  >
    {children}
  </a>
);

export default NavBar;
