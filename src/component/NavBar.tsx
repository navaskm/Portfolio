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
        <a href="#top" aria-label="Navas KM Nilambur Frontend Developer">
          <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
            Navas <span className="text-white">KM</span>
          </p>
        </a>

        {/* links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li><a href="#top" className="font-Ovo" title="Go to Home section">Home</a></li>
          <li><a href="#about" className="font-Ovo" title="About Navas KM Frontend Developer">About me</a></li>
          <li><a href="#work" title="View projects by Navas KM">My Work</a></li>
          <li><a href="#contact" className="font-Ovo" title="Contact Navas KM Frontend Developer">Contact me</a></li>
        </ul>

        <div className="flex items-center gap-4">

          {/* contact button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            title="Contact Navas KM Frontend Developer"
          >
            Contact
            <Image
              src='/navigation/arrow-icon.png'
              width={20}
              height={20}
              alt="arrow icon"
              className="w-3"
            />
          </a>

          {/* menu button */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Open navigation menu"
          >
            <Image
              src="/navigation/menu-black.png"
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
              src="/navigation/close-black.png"
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