import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-20">
      <div className="max-w-4xl mx-auto text-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-lg">
        <p className="uppercase tracking-[4px] text-pink-300 font-semibold">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4">
          Let’s connect.
        </h2>

        

        <div className="flex justify-center gap-6 text-3xl mt-8">
          <a href="mailto:udolisakamsy@gmail.com">
            <FaEnvelope />
          </a>

          <a href="https://github.com/kamsiyudolisa" target="_blank">
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/kamsiyochukwu-udolisa-919a88267/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;