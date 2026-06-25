import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/60 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          Kamsiyochukwu Udolisa
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300 font-medium">

  <a href="#home" className="hover:text-pink-300 transition">
    Home
  </a>

  <a href="#about" className="hover:text-pink-300 transition">
    About
  </a>

  <a href="#experience" className="hover:text-pink-300 transition">
    Experience
  </a>

  <a href="#leadership" className="hover:text-pink-300 transition">
    Leadership
  </a>

  <a href="#projects" className="hover:text-pink-300 transition">
    Projects
  </a>

  <a href="#gallery" className="hover:text-pink-300 transition">
    Gallery
  </a>

  <a href="#contact" className="hover:text-pink-300 transition">
    Contact
  </a>

</div>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/kamsiyudolisa"
            target="_blank"
          >
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

    </nav>
  );
}

export default Navbar;