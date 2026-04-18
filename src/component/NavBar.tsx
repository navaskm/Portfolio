import { useRef } from "react";
import Image from "next/image";

const NavBar = () => {

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    };
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(11,17,54,0.85)]  backdrop-blur-md z-50">
      <nav
        className="max-w-[1500px] mx-auto px-5 lg:px-8 py-4 flex items-center justify-between border-b border-white/5"
        aria-label="Main Navigation"
      >

        {/* logo */}
        <a href="#top" aria-label="Navas KM Nilambur Frontend Developer" className="group">
          <p className="relative text-3xl font-extrabold tracking-wide">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            transition-all duration-500 group-hover:brightness-125">
              Navas
            </span>

            <span className="text-white ml-2 relative">
              KM
            </span>

            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
            blur-md opacity-0 group-hover:opacity-70 transition duration-500">
              Navas
            </span>
          </p>
        </a>

        {/* links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li><a href="#top" className="font-Ovo" title="Go to Home section">Home</a></li>
          <li><a href="#about" className="font-Ovo" title="About Navas KM Frontend Developer">About me</a></li>
          <li><a href="#work" title="View projects by Navas KM">My Work</a></li>
          <li><a href="#future-plan" title="View future plans of Navas KM">Future Plans</a></li>
          <li><a href="#contact" className="font-Ovo" title="Contact Navas KM Frontend Developer">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">

          {/* contact button */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4
            border border-white/20
            bg-white/5
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:bg-white/10 hover:border-white/40 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] group"
            title="Contact Navas KM Frontend Developer"
          >
            <span className="tracking-wide">Contact</span>

            <Image
              src='/navigation/arrow-icon-dark.png'
              width={20}
              height={20}
              alt="arrow icon"
              className="w-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </a>

          {/* menu button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open navigation menu"
          >
            <Image
              src="/navigation/menu-white.png"
              width={20}
              height={20}
              alt="enu icon"
              className="w-6"
            />
          </button>

        </div>


        {/* ------------ mobile menu ----------- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 bg-[rgba(15,22,65,1)]"
          role="menu"
          aria-label="Mobile Navigation"
        >

          <div
            onClick={closeMenu}
            className="absolute right-6 top-6"
          >
            <Image
              src="/navigation/close-white.png"
              width={20}
              height={20}
              alt="close menu"
              className="w-5 cursor-pointer"
            />
          </div>

          <li><a href="#top" title="Go to Home section" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" title="About Navas KM Frontend Developer" onClick={closeMenu}>About me</a></li>
          <li><a href="#work" title="View projects by Navas KM" onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" title="Contact Navas KM Frontend Developer" onClick={closeMenu}>Contact me</a></li>

        </ul>

      </nav>
    </header>
  );
};

export default NavBar;