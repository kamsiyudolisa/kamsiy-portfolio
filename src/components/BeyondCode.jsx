import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaHeartbeat,
  FaLightbulb,
} from "react-icons/fa";

const interests = [
  {
    icon: <FaChalkboardTeacher className="text-3xl text-pink-300" />,
    title: "Teaching & Mentorship",
    description:
      "Teaching has been one of the most rewarding parts of my journey. For two years, I taught programming and worked with children through Code Ninjas and after-school programs. I love mentoring young students, encouraging their creativity, and helping them discover confidence through technology. Working with kids has inspired my long-term vision of creating opportunities for the next generation.",
  },
  {
    icon: <FaUsers className="text-3xl text-purple-300" />,
    title: "Serving My Community",
    description:
      "Giving back is a core part of who I am. I volunteer at the food pantry at Good Hope Missionary Baptist Church in Houston, where I help serve families in need. My faith has taught me the importance of serving others, and I believe I've been blessed with opportunities that many people never receive. My goal is to use those blessings to uplift others through service, education, and compassion.",
  },
  {
    icon: <FaHeartbeat className="text-3xl text-pink-300" />,
    title: "My Long-Term Vision",
    description:
      "One of my biggest dreams is to establish a nonprofit foundation that provides after-school programs, mentorship, educational resources, and technology opportunities for children while also supporting individuals experiencing homelessness. I hope to create spaces where people feel seen, supported, and empowered to build better futures through education, innovation, and community.",
  },
  {
    icon: <FaLightbulb className="text-3xl text-purple-300" />,
    title: "Always Learning",
    description:
      "Outside of computer science, I enjoy learning about personal finance, investing, and day trading. I'm passionate about continuously growing—whether that's building new technical skills, understanding financial markets, or developing ideas that can create meaningful impact. I believe learning never stops, and I'm always looking for new ways to challenge myself.",
  },
];

function BeyondCode() {
  return (
    <section className="py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[4px] text-pink-300 font-semibold">
          Beyond Tech
        </p>

        

        <p className="mt-6 max-w-3xl text-slate-300 leading-8">
          While I enjoy working with technology and exploring ai,
          the work that motivates me most is creating opportunities that improve
          people's lives. Whether that's mentoring students, serving my
          community, or dreaming about future nonprofit ideas, I hope to
          use technology as a tool to create meaningful and lasting impact.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {interests.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-pink-300/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-5">{item.icon}</div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto text-center text-xl italic text-slate-300 leading-9"
        >
          "Let your light shine before others, that they may see your good works and glorify your Father in heaven."

— Matthew 5:16
        </motion.p>
      </div>
    </section>
  );
}

export default BeyondCode;