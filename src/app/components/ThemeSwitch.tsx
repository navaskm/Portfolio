'use client';

import { useState,useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { assets } from '../../../assets/assets';

const ThemeSwitch = () => {

  const [mounted,setMounted] = useState(false);
  const { setTheme,resolvedTheme } = useTheme();

  useEffect(()=> setMounted(true),[]);

  if(!mounted) return(
    <Image 
      src={assets.moon_icon}
      alt="Dark"
      className="w-6"
    />
  )

  if (resolvedTheme === 'dark'){
    return <Image 
      src={assets.sun_icon}
      alt="Dark"
      className="w-6"
      onClick={()=>setTheme('light')}
    />
  }

  if (resolvedTheme === 'light'){
    return <Image 
      src={assets.moon_icon}
      alt="light"
      className="w-6"
      onClick={()=>setTheme('dark')}
    />
  }
}

export default ThemeSwitch