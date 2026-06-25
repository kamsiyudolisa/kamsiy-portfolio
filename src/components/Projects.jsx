import { motion } from "framer-motion";

const projects = [
  {
    title: "High Entropy Alloy Machine Learning Research",
    tools: "Python • Pandas • Scikit-learn • Matplotlib",
    description:
      "Applied supervised machine learning models to classify alloy phases from material composition data and presented findings at the SURE Symposium.",
  },
  {
    title: "Healthcare AI Operations Workflows",
    tools: "Documentation • Data QA • AI Intake • Healthcare Operations",
    description:
      "Researching payer requirements, documenting messy workflows, supporting AI follow-up tools, and keeping internal healthcare data clean at Lanyard Health.",
  },
  {
    title: "RAi",
tools: "React • OpenAI API • JavaScript • Tailwind CSS",
description:
  "Built an AI-powered housing assistant that helps residents navigate policies, complete common housing tasks, and access campus resources from one centralized platform.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[4px] text-pink-300 font-semibold">
          Projects
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Featured technical work.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg hover:border-pink-300/40 transition"
            >
              <h3 className="text-2xl font-bold text-pink-200">
                {project.title}
              </h3>

              <p className="mt-4 text-sm text-purple-200">
                {project.tools}
              </p>

              <p className="mt-6 text-slate-300 leading-8">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;