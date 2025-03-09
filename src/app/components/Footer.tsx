import Image from "next/image";
import { useTheme } from "next-themes";
import { assets } from '../../../assets/assets';
import DarkLogo from "./inside/DarkLogo";
import LightLogo from "./inside/LightLogo";

const Footer = () => {

  const { resolvedTheme } = useTheme() as {resolvedTheme : 'dark' | 'light'};

  return (
    <div className="mt-20">

      <div className="text-center">
        {
          resolvedTheme === 'dark'? <DarkLogo/>:<LightLogo/>
        }
        {/* <Image src={resolvedTheme === 'dark'?assets.logo_dark:assets.logo} alt='logo' className="w-36 mx-auto mb-2"/> */}

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={resolvedTheme === 'dark' ? assets.mail_icon_dark:assets.mail_icon} alt='' className="w-6"/>
          navaskm228@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Navas KM. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li><a target="_blank" href="https://github.com/navaskm">GitHub</a></li>
          <li><a target="_blank" href="https://github.com/navaskm">LinkedIn</a></li>
          <li><a target="_blank" href="https://instagram.com/_navas_k_m">Instagram</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Footer