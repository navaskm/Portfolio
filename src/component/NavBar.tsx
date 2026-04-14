import { useRef } from "react";

const NavBar = () => {

  const sideMenuRef = useRef<HTMLUListElement>(null);
  
  const openMenu = ()=>{
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    };
  };

  const closeMenu = ()=>{
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    };
  };

  return (
    <header>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50`}>

        {/* site logo */}
        <a href="#top">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
              Navas <span className="text-black ">KM</span>
            </h1>
        </a>

        {/* links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3`}>

          <li><a href="#top" className="font-Ovo">Home</a></li>
          <li><a href="#about" className="font-Ovo">About me</a></li>
          <li><a href="#services" className="font-Ovo">Services</a></li>
          <li><a href="#work" >My Work</a></li>
          <li><a href="#contact" className="font-Ovo">Contact me</a></li>
        </ul>

        <div className=" flex items-center gap-4">

          {/* contact button */}
          <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 `}>
            Contact 
            <img 
              src='/navigation/arrow-icon.png'
              alt=''
              className="w-3"
            />
          </a>

          {/* menu button */}
          <button 
            className="block md:hidden ml-3"
            onClick={openMenu}
          >
            <img 
              src="/navigation/menu-black.png"
              alt=''
              className="w-6"
            />
          </button>

        </div>


        {/* ------------ mobile menu ----------- */}
        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500`}>

          <div 
            onClick={closeMenu}
            className="absolute right-6 top-6"
          >
            <img 
              src="public/navigation/close-black.png"
              alt=''
              className="w-5 cursor-pointer"
            />
          </div>

          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About me</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#work" onClick={closeMenu}>My Work</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>

      </nav>
      
    </header>
  );
};

export default NavBar;