import { motion } from "framer-motion";

const leadership = [
  {
    role: "Vice President",
    org: "TSU Data Science Club",
  },
  {
    role: "Fundraising Chair",
    org: "African Student Association",
  },
  {
    role: "Student Member",
    org: "National Society of Black Engineers",
  },
  {
    role: "Resident Assistant",
    org: "TSU Residential Life & Housing",
  },
];

function Leadership() {
  return (
    <section id="leadership" className="py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[4px] text-pink-300 font-semibold">
          Leadership
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Building community while growing in tech.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {leadership.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-bold text-pink-200">{item.role}</h3>
              <p className="text-slate-300 mt-3">{item.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Leadership;