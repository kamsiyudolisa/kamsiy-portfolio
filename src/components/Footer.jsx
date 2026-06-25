function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-slate-400">

        <p>
          © {new Date().getFullYear()} Kamsiyochukwu Udolisa. All rights reserved.
        </p>

        <p className="mt-4 md:mt-0">
          Built with React, Tailwind CSS & Framer Motion 💜
        </p>

      </div>
    </footer>
  );
}

export default Footer;