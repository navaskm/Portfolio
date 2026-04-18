import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      aria-labelledby="Contact from Navas KM Nilambur Frontend Developer"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-[rgba(12,18,52,1)]"
    >

      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >Contact Navas KM</motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >Get in touch</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        I&apos;d love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        aria-label="Contact form for Navas KM"
      >

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">

          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            placeholder="Enter your name"
            name="name"
            aria-label="Send your name in to Navas KM"
            required
            className="flex-1 p-3 outline-none border-[0.5px] rounded-mb bg-black border-white/90"
          />

          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-mb bg-black"
            aria-label="Send email address in to Navas KM"
          />

        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6"
          aria-label="Your message in to Navas KM"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(96,165,250,0.4)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto duration-500 cursor-pointer bg-black"
          aria-label="Send message to Navas KM"
        >
          Send Message
          <Image width={30} height={30} src="/contact/right-arrow-white.png" alt='arrow icon' className="w-4" />
        </motion.button>

        <p className="mt-4">{result}</p>

      </motion.form>

    </motion.section>
  )
}

export default Contact;