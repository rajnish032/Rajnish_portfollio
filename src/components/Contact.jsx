import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvylpjp");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully 🚀");
    }
  }, [state.succeeded]);

  return (
    <section
  id="contact"
  className="bg-transparent text-white px-6 py-10 md:py-14 relative overflow-hidden"
>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">
              <Typewriter
                words={["Contact Me", "Let's Work Together", "Start a Project 🚀"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="text-gray-400 text-lg">
            Have a project, idea, or opportunity?  
            I’m always open to meaningful collaborations.
          </p>

          <p className="text-gray-500">
            Fill the form and I’ll reply within 24 hours.
          </p>

          <div className="flex gap-5 pt-4">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition">
              <FaGithub />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-purple-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg flex flex-col gap-5"
        >

          <h2 className="text-xl font-semibold">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-3 py-2 rounded-lg bg-transparent border border-white/20 outline-none focus:border-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-3 py-2 rounded-lg bg-transparent border border-white/20 outline-none focus:border-purple-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="px-3 py-2 rounded-lg bg-transparent border border-white/20 outline-none focus:border-purple-500 resize-none"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded-lg hover:scale-[1.03] transition"
          >
            {state.submitting ? "Sending..." : "Send Message →"}
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;