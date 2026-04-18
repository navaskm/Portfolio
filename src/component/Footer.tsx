import Image from "next/image";

const Footer = () => {

  return (
    <footer role="contentinfo Navas KM" className="py-10 bg-[rgba(5,8,25,1)]">

      <div className="max-w-[1500px] mx-auto px-5 lg:px-8">
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform duration-300">
            Navas <span className="text-white">KM</span>
          </h3>

          <div className="w-max flex items-center gap-2 mx-auto">
            <Image width={30} height={30} src='/footer/mail_icon_dark.png' alt='email icon' className="w-6" />
            <a href="mailto:navaskm228@gmail.com" className="hover:underline" aria-label="Send email to Navas KM">
              navaskm228@gmail.com
            </a>
          </div>
        </div>

        <div className="text-center sm:flex items-center justify-between border-t border-white/20 mx-[10%] mt-12 py-6">
          <p>© 2026 Navas KM. All rights reserved.</p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">

            <li>
              <a
                target="_blank"
                href="https://github.com/navaskm"
                rel="noopener noreferrer"
                aria-label="Visit Navas KM GitHub profile"
              >
                <Image width={30} height={30} src="/github.png" alt="GitHub profile of Navas KM" className="w-7 rounded" />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/navaskm-developer/"
                aria-label="Visit Navas KM LinkedIn profile"
                rel="noopener noreferrer"
              >
                <Image width={30} height={30} src="/linkedin.png" alt="LinkedIn profile of Navas KM" className="w-7 rounded" />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="https://wa.me/918891236670?text=Hello%20Navas,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                rel="noopener noreferrer"
                aria-label="Chat with Navas KM on WhatsApp"
              >
                <Image width={30} height={30} src="/whatsapp.png" alt="WhatsApp chat with Navas KM" className="w-7 rounded" />
              </a>
            </li>

          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer