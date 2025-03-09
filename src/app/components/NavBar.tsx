import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { assets } from '../../../assets/assets';
import InsideNavbar from "./inside/InsideNavbar";

const NavBar = () => {

  const [isScroll,setIsScroll] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(()=>{

    // Ensure theme is only set if there's no existing theme
    if (!resolvedTheme) {
      setTheme("light");
    }
    
    // Mark as mounted after initial render
    setMounted(true);

    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false);
      }
    })
  },[resolvedTheme, setTheme]);

  if (!mounted) {
    return null; // Avoid hydration mismatch by not rendering until mounted
  }

  return (
    <>
      {/* background image - now conditional based on theme */}
      <div className="fixed top-0 right-0 w-11/12 -z-10" suppressHydrationWarning>
        {
          resolvedTheme === 'light' ? <Image 
            src={assets.header_bg_color}
            alt="Header background"
            className="w-full"
          />:null
        }
      </div>

      <InsideNavbar isScroll={isScroll} resolvedTheme={resolvedTheme ?? 'light'}/>
      
    </>
  )
}

export default NavBar;