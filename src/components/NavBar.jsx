import { useContext, useState } from "react";
import ProductContext from "../context/ProductContext";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // icons for burger menu

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ProductContext);
  const [menuOpen, setMenuOpen] = useState(false); // state for burger

  return (
    <nav className="bg-gradient-to-b from-pink-200 to-white shadow-sm border-b border-gray-100 transition-all duration-500  ">
      <section className="overflow-hidden px-4 md:px-8">
        <header className="flex justify-between items-center max-w-[1300px] mx-auto py-4">
          {/* ==== LOGO ==== */}
          <div className="flex items-center gap-3">
            {/* Replace this with your SVG or text logo */}
            <h1 className="font-extrabold text-lg tracking-wider text-gradient">
              PRIME
            </h1>
          </div>

          {/* ==== NAV LINKS (Desktop) ==== */}
          <nav className="hidden sm:inline-block">
            <ul className="flex gap-3 md:gap-5 lg:gap-10 items-center">
              <Link className="uppercase font-bold text-xs" to="/">HOME</Link>
              <Link className="uppercase font-bold text-xs" to="/product">PRODUCT</Link>
              <Link className="uppercase font-bold text-xs" to="/about">ABOUT</Link>
              <Link className="uppercase font-bold text-xs" to="/anchor">CONTACT</Link>

              {/* ==== THEME TOGGLE ==== */}
              <button onClick={toggleTheme}>
                {theme === "dark" ? (
                  <MdDarkMode className="text-white text-lg" />
                ) : (
                  <IoSunny className="text-amber-300 text-lg" />
                )}
              </button>
            </ul>
          </nav>

          {/* ==== RIGHT BUTTONS (Desktop) ==== */}
          <div className="hidden sm:flex gap-3 md:gap-5 lg:gap-9">
            <button className="uppercase font-bold text-xs text-white border-2 border-white rounded-[40px] py-1 px-3 md:py-2 md:px-4 lg:py-4 lg:px-9 hover:bg-white hover:text-black transition">
              CONTACT US
            </button>
            <button className="uppercase font-bold text-xs rounded-[40px] py-1 px-3 md:py-2 md:px-4 lg:py-4 lg:px-9 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:opacity-90 transition">
              JOIN HYDRA
            </button>
          </div>

          {/* ==== MOBILE MENU ICON ==== */}
          <button
            className="sm:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </header>

        {/* ==== MOBILE MENU ==== */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-4 items-center py-6 bg-[#111] text-white animate-slideDown">
            <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
            <Link to="/product" onClick={() => setMenuOpen(false)}>PRODUCT</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            <Link to="/anchor" onClick={() => setMenuOpen(false)}>CONTACT</Link>

            {/* ==== THEME TOGGLE ==== */}
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <MdDarkMode className="text-white text-lg" />
              ) : (
                <IoSunny className="text-amber-300 text-lg" />
              )}
            </button>

            {/* ==== MOBILE ACTION BUTTONS ==== */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="uppercase font-bold text-xs text-white border-2 border-white rounded-[40px] py-2 px-6 hover:bg-white hover:text-black transition">
                CONTACT US
              </button>
              <button className="uppercase font-bold text-xs rounded-[40px] py-2 px-6 text-[#302c42] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] hover:opacity-90 transition">
                JOIN HYDRA
              </button>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
