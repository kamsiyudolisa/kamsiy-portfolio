import { motion } from "framer-motion";

const experiences = [
  {
    title: "Healthcare Operations & AI Intern",
    company: "Lanyard Health",
    date: "Summer 2026 ",
    description:
      "Research payer credentialing and enrollment requirements, create operational documentation, support AI-powered workflows, and maintain high-quality healthcare data.",
  },
  {
    title: "Resident Assistant",
    company: "Texas Southern University",
    date: "2026 - Present",
    description:
      "Support residents, organize community programs, resolve conflicts, and create an engaging living environment for students.",
  },
  {
    title: " Data Science Researcher",
    company: "Texas Southern University",
    date: "Summer 2025",
    description:
      "Conducted machine learning research on High Entropy Alloys using Logistic Regression, Decision Trees, SVMs, and Neural Networks while presenting findings at the SURE Symposium.",
  },
   
  {
    title: "Coding Instructor",
    company: "Code Ninjas",
    date: "2024 - 2025",
    description:
      "Taught programming concepts to young students through interactive coding projects while fostering creativity and problem-solving skills.",
  },
 
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-20"
    >
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[4px] text-pink-300 font-semibold">
          Experience
        </p>

        <h2 className="text-5xl font-bold mt-4">
          What Have I Been Up To?
        </h2>

        <div className="mt-16 grid gap-8">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .15 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-lg hover:border-pink-300/30 transition"
            >

              <div className="flex flex-col md:flex-row justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    {exp.title}
                  </h3>

                  <p className="text-pink-300 mt-2">
                    {exp.company}
                  </p>

                </div>

                <p className="text-slate-400 mt-4 md:mt-0">
                  {exp.date}
                </p>

              </div>

              <p className="text-slate-300 mt-6 leading-8">
                {exp.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;