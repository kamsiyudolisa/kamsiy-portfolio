import { motion } from "framer-motion";

function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-between px-8 md:px-20 overflow-hidden"
>

      {/* Background Glow */}
      <div className="absolute top-24 left-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>
      <div className="absolute bottom-16 right-10 h-80 w-80 rounded-full bg-pink-400/20 blur-3xl"></div>

      {/* Left Side */}
      <motion.div
        className="max-w-2xl z-10"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="uppercase tracking-[6px] text-pink-300 font-semibold">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-7xl font-black mt-4 bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent">
          Kamsiyochukwu
          <br />
          Udolisa
        </h1>

        <h2 className="mt-6 text-2xl text-slate-300">
          CS Student •  Operations & AI Intern • Data Science Researcher 
        </h2>

        <p className="mt-8 text-lg leading-9 text-slate-300">
          My journey has taken me from learning to code at the age of 9
           in Nigeria to conducting machine learning research and contributing
            to healthcare AI initiatives. I enjoy using technology to improve
             decision-making and solve real-world challenges.
        </p>

      <div className="mt-10 flex gap-4 flex-wrap">

  <a
    href="/resume.pdf"
    target="_blank"
    className="rounded-full bg-gradient-to-r from-pink-300 to-purple-400 px-7 py-4 font-bold text-slate-900 hover:scale-105 transition"
  >
    Resume
  </a>

  <a
    href="https://github.com/kamsiyudolisa"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/20 px-7 py-4 hover:bg-white/10 transition"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/kamsiyochukwu-udolisa-919a88267/"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-white/20 px-7 py-4 hover:bg-white/10 transition"
  >
    LinkedIn
  </a>

</div>

      </motion.div>

      {/* Right Side */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block z-10"
      >

        <img
          src="/headshot.jpg"
          alt="Kamsiyochukwu Udolisa"
          className="w-[380px] rounded-[2rem] border border-white/20 shadow-[0_0_60px_rgba(168,85,247,.35)]"
        />

      </motion.div>

    </section>
  );
}

export default Hero;