import { useState, useEffect, useContext } from "react";
import { Menu, X, Moon, Sun, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import ProductContext from "../context/ProductContext";
import Login from "./Login";

const NavBar = () => {
  const { totalItems } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  // Handle navbar scroll style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore theme on refresh
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Toggle dark mode (Tailwind compatible)
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/5 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-purple-100 dark:border-gray-800"
          : "bg-gradient-to-r from-purple-50/50 via-white/50 to-pink-50/50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              PRIME
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
             <NavLink to="/anchor">Profile</NavLink>


           
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center hover:scale-110 transition-all"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-purple-500" />
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </button>

            {/* Cart Button */}
            <Link to="/cartContect" className="relative">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center hover:scale-110 transition-all">
                <ShoppingCart className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
            </Link>
               

              
                        <Link to="/login">
                 <button className="px-6 py-2.5 text-sm font-semibold text-purple-600 dark:text-purple-400">
                  Login
                 </button>
               </Link>

            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-white dark:bg-gray-900 border-t border-purple-100 dark:border-gray-800">
          <div className="flex flex-col gap-1">
            <MobileNavLink to="/" onClick={() => setMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/product" onClick={() => setMenuOpen(false)}>Product</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</MobileNavLink>
          

          </div>

          <div className="mt-6 pt-6 border-t border-purple-100 dark:border-gray-800 flex flex-col gap-3">

            <button
              onClick={toggleTheme}
              className="w-full py-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center gap-2"
            >
              {theme === "dark" ? <Moon /> : <Sun />}
              <span className="font-semibold">
                {theme === "dark" ? "Dark Mode" : "Light Mode"}
              </span>
            </button>

            <Link
              to="/cartContect"
              onClick={() => setMenuOpen(false)}
              className="w-full"
            >
              <button className="w-full py-3 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center gap-2">
                <ShoppingCart />
                Cart {totalItems > 0 && `(${totalItems})`}
              </button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all"></span>
  </Link>
);

const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800 px-4 py-3 rounded-lg transition-all"
  >
    {children}
  </Link>
);

export default NavBar;