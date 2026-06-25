import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="px-8 md:px-20 py-24">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-pink-300 font-semibold uppercase tracking-[4px]">
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            A story rooted in curiosity and impact.
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-slate-300 leading-8">
            My journey into technology began when I started coding in Nigeria,
            where I participated in a coding competition called Technovation.
            The competition taught me how technology can be used to solve
            real-world problems.
          </p>

          <p className="mt-5 text-slate-300 leading-8">
            Today, I am a Computer Science student at Texas Southern University,
            conducting research, using data science techniques, serving in student leadership
            roles, and gaining experience in how operations and AI is used in industries like healthcare. 
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;