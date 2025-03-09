import Image from "next/image";
import { useRef} from "react";
import ThemeSwitch from "../ThemeSwitch";
import { assets } from "../../../../assets/assets";
import DarkLogo from "./DarkLogo";
import LightLogo from "./LightLogo";

type hello = {
  isScroll : boolean;
  resolvedTheme: 'dark' | 'light' | string;
}

const InsideNavbar = ({isScroll,resolvedTheme}:hello) => {

  const sideMenuRef = useRef<HTMLUListElement>(null);

  const openMenu = ()=>{
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  }
  const closeMenu = ()=>{
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  }

  return (
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
      ${isScroll  && resolvedTheme === 'light'? "bg-white/50 backdrop-blur-lg shadow-sm":''} ${resolvedTheme === 'dark' ? 'bg-black':''}`} suppressHydrationWarning>

      {/* site logo */}
      <a href="#top">
        {
          resolvedTheme === 'dark'?
          <DarkLogo/>:<LightLogo/>
        }
      </a>

      {/* links */}
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${resolvedTheme === 'dark' && 'border border-white/50 bg-dark shadow-sm bg-opacity-50'} ${!isScroll && resolvedTheme === 'light' ? 'bg-white shadow-sm bg-opacity-50':'*:'}`}>

        <li><a href="#top" className="font-Ovo">Home</a></li>
        <li><a href="#about" className="font-Ovo">About me</a></li>
        <li><a href="#services" className="font-Ovo">Services</a></li>
        <li><a href="#work" >My Work</a></li>
        <li><a href="#contact" className="font-Ovo">Contact me</a></li>
      </ul>

      {/* moon,contact and menu button container */}
      <div className=" flex items-center gap-4">

        {/* theme toggle button*/}

        <button>
          <ThemeSwitch/>
        </button>

        {/* contact button */}
        <a href="#contact" className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ${resolvedTheme==='dark'?'border-white':''}`}>
          Contact 
          <Image 
            src={resolvedTheme === 'dark'? assets.arrow_icon_dark:assets.arrow_icon}
            alt=''
            className="w-3"
          />
        </a>

        {/* menu button */}
        <button 
          className="block md:hidden ml-3"
          onClick={openMenu}
        >
          <Image 
            src={resolvedTheme === 'dark'? assets.menu_white:assets.menu_black} 
            alt=''
            className="w-6"
          />
        </button>

      </div>


      {/* ------------ mobile menu ----------- */}
      <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 
        ${resolvedTheme==='dark'?'bg-black text-white':'bg-rose-50'}`}>

        <div 
          onClick={closeMenu}
          className="absolute right-6 top-6"
        >
          <Image 
            src={resolvedTheme === 'dark'? assets.close_white:assets.close_black}
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
  )
}

export default InsideNavbar