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

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={resolvedTheme === 'dark' ? assets.mail_icon_dark:assets.mail_icon} alt='' className="w-6"/>
          <a href="mailto:navaskm228@gmail.com" className="hover:underline">
            navaskm228@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Navas KM. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

          <li>
            <a target="_blank" href="https://github.com/navaskm">
              <img src="/github.png" alt="GitHub" className="w-7 rounded"/>
            </a>
          </li>

          <li>
            <a target="_blank" href="https://www.linkedin.com/in/navaskm-developer/">
              <img src="/linkedin.png" alt="LinkedIn" className="w-7 rounded" />
            </a>
          </li>

          <li>
            <a 
              target="_blank"
              href="https://wa.me/918891236670?text=Hello%20Navas,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-7 rounded" />
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Footer