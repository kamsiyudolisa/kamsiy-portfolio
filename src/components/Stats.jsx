import { motion } from "framer-motion";

const stats = [
  {
    number: "3.5",
    label: "GPA",
  },
  {
    number: "3x",
    label: "Honor Roll",
  },
  {
    number: "1x",
    label: "Dean's List",
  },
  {
    number: "5+",
    label: "Leadership Roles",
  },
];

function Stats() {
  return (
    <section className="py-20 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 text-center hover:scale-105 transition"
            >

              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                {stat.number}
              </h2>

              <p className="mt-3 text-slate-300">
                {stat.label}
              </p>

            </div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Stats;