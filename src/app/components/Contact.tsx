import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { assets } from '../../../assets/assets';

const Contact = () => {

  const [result, setResult] = useState("");
  const { resolvedTheme } = useTheme() as {resolvedTheme:'dark'|'light'};

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "74a769c1-9fa5-4dcf-9a52-b12f4209b002");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="contact" 
      className="w-full px-[12%] py-10 scroll-mt-20"
      style={resolvedTheme === 'light' ?{ 
        backgroundImage: "url('/footer-bg-color.png')",
        backgroundSize: "90% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }:{}}
      suppressHydrationWarning
    >

      <motion.h4
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
       className="text-center mb-2 text-lg">connect with me</motion.h4>

      <motion.h2
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
       className="text-center text-5xl">Get in touch</motion.h2>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.7}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.9}}
      onSubmit={onSubmit} 
      className="max-w-2xl mx-auto">

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">

          <motion.input 
            initial={{x:-50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.6,delay:1.1}}
            type="text" 
            placeholder="Enter your name" 
            name="name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-mb ${resolvedTheme === 'dark'?'bg-black border-white/90':'bg-white'}`}
          />

          <motion.input 
            initial={{x:50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.6,delay:1.2}}
            type="email" 
            placeholder="Enter your email" 
            name="email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-mb ${resolvedTheme === 'dark'?'bg-black border-white/90':'bg-white'}`}
          />

        </div>

        <motion.textarea 
          initial={{y:100,opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.6,delay:1.3}}
          rows={6} 
          placeholder="Enter your message" 
          required
          name="message"
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 ${resolvedTheme === 'dark'?'bg-black border-white/90':'bg-white'}`}
        ></motion.textarea>

        <motion.button 
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto duration-500 cursor-pointer ${resolvedTheme === 'dark'?'bg-gray-900 border-[0.5px] border-white hover:bg-white/10':'bg-black hover:bg-gray-800'}`}
        >
          Submit now 
          <Image src={assets.right_arrow_white} alt='' className="w-4"/>
        </motion.button>

        <p className="mt-4">{result}</p>

      </motion.form>

    </motion.div>
  )
}

export default Contact