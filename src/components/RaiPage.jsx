import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaLightbulb,
  FaShieldAlt,
} from "react-icons/fa";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65 },
};

const stages = [
  {
    number: "01",
    title: "Start with the resident problem",
    copy: "As a Resident Assistant, I saw the same questions get buried in group chats: lockouts, maintenance, Wi-Fi, parking, events, and emergencies. Residents needed one dependable place to start.",
  },
  {
    number: "02",
    title: "Build a verified knowledge base",
    copy: "I organized 30 housing questions into structured procedures with a category, urgency level, and approved answer. The assistant retrieves from that source instead of freely inventing policy.",
  },
  {
    number: "03",
    title: "Test the first retrieval baseline",
    copy: "I first used TF-IDF and cosine similarity. It worked for direct wording, but testing exposed how keyword overlap could select the wrong procedure when meaning mattered more than vocabulary.",
  },
  {
    number: "04",
    title: "Improve understanding and guardrails",
    copy: "I added an LLM-based matching step to interpret natural language, while keeping the final response tied to a verified entry. Unknown questions are escalated to an RA rather than guessed.",
  },
  {
    number: "05",
    title: "Turn questions into insight",
    copy: "Anonymous interaction logs power an RA dashboard that surfaces unanswered questions, recurring categories, and answer coverage—helping communication improve over time.",
  },
];

const experiences = [
  {
    eyebrow: "For residents",
    title: "Ask RAI",
    icon: FaBrain,
    copy: "Residents ask housing questions in their own words and receive a clear, verified procedure—or a safe handoff when the answer is not available.",
  },
  {
    eyebrow: "For the community",
    title: "Resident dashboard",
    icon: FaLightbulb,
    copy: "Announcements, upcoming programs, flyers, and important contacts live in one scannable space instead of being scattered across old messages.",
  },
  {
    eyebrow: "For RAs",
    title: "RA Insights",
    icon: FaChartLine,
    copy: "A protected analytics view translates anonymous questions into actionable patterns: what residents ask, what RAI cannot answer, and where guidance needs work.",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.34em] text-pink-300">
      {children}
    </p>
  );
}

function RaiPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b18] text-white">
      <div className="fixed inset-0 pointer-events-none rai-grid opacity-35" />

      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080b18]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="/" className="inline-flex items-center gap-3 font-semibold text-slate-200 hover:text-white transition">
            <FaArrowLeft className="text-sm" /> Portfolio
          </a>
          <span className="rounded-full border border-pink-300/25 bg-pink-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-pink-200">
            RAI Project
          </span>
        </div>
      </nav>

      <section className="relative px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        <div className="absolute left-[-8rem] top-28 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute right-[-8rem] top-10 h-[32rem] w-[32rem] rounded-full bg-purple-600/20 blur-[140px]" />

        <motion.div
          className="relative mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionLabel>From lived problem to deployed product</SectionLabel>
          <h1 className="mt-7 max-w-5xl text-6xl font-black tracking-[-0.055em] sm:text-7xl md:text-[7.5rem] md:leading-[0.86]">
            Building <span className="rai-title">RAI.</span>
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
            <p className="max-w-3xl text-xl leading-9 text-slate-300 md:text-2xl md:leading-10">
              An AI-powered resident support platform designed to make verified housing guidance easier to access—and recurring resident questions easier to learn from.
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://rai-resident-assistant-ad682wglxw86bnjrjhuvyz.streamlit.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-300 to-purple-400 px-6 py-3.5 font-bold text-slate-950 hover:scale-[1.03] transition"
              >
                View live app <FaExternalLinkAlt className="text-xs" />
              </a>
              <a
                href="https://github.com/kamsiyudolisa/rai-resident-assistant"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-bold hover:bg-white/10 transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-[0_30px_100px_rgba(88,28,135,.25)]">
            <img
              src="/rai-dashboard.png"
              alt="Full RAI resident dashboard with navigation, Texas Southern University themed welcome screen, and housing portal"
              className="h-auto w-full rounded-[1.55rem]"
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["30", "verified procedures"],
              ["60", "test questions"],
              ["3", "connected experiences"],
              ["1", "deployed product"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
                <p className="text-3xl font-black text-pink-200 md:text-4xl">{value}</p>
                <p className="mt-2 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] px-6 py-24 md:px-10 md:py-32">
        <motion.div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]" {...reveal}>
          <div>
            <SectionLabel>The opportunity</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">The problem was not a lack of information.</h2>
          </div>
          <div className="lg:pt-14">
            <p className="text-2xl leading-10 text-slate-200">
              It was that the right information was hard to find at the moment residents needed it.
            </p>
            <p className="mt-7 text-lg leading-9 text-slate-400">
              As an RA, I repeatedly answered the same questions while announcements and procedures disappeared into busy group chats. RAI began as a practical question: what if residents had one reliable starting point, and RAs could use those interactions to see where communication was breaking down?
            </p>
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div className="max-w-3xl" {...reveal}>
            <SectionLabel>Product experience</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-6xl">One platform. Three points of view.</h2>
          </motion.div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...reveal}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.025] p-8 hover:-translate-y-1 hover:border-pink-300/30 transition"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-300/10 text-pink-200">
                    <Icon />
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-purple-300">{item.eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-bold">{item.title}</h3>
                  <p className="mt-5 leading-8 text-slate-400">{item.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1020] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div className="grid gap-10 lg:grid-cols-2 lg:items-end" {...reveal}>
            <div>
              <SectionLabel>Build process</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold md:text-6xl">I treated the first failure as data.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-400">
              Instead of hiding what the prototype got wrong, I used testing to decide what the next version needed. Each stage solved a specific limitation uncovered by the stage before it.
            </p>
          </motion.div>

          <div className="mt-16 border-l border-pink-300/25 pl-6 md:ml-6 md:pl-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.number}
                {...reveal}
                transition={{ duration: 0.6, delay: Math.min(index * 0.08, 0.24) }}
                className="relative grid gap-4 border-b border-white/10 py-10 first:pt-0 md:grid-cols-[120px_1fr_1.15fr] md:gap-8"
              >
                <span className={`absolute -left-[2.08rem] h-3 w-3 rounded-full border-2 border-pink-200 bg-[#0d1020] md:-left-[3.43rem] ${index === 0 ? "top-1" : "top-11"}`} />
                <p className="text-sm font-black tracking-[0.24em] text-pink-300">{stage.number}</p>
                <h3 className="text-2xl font-bold">{stage.title}</h3>
                <p className="leading-8 text-slate-400">{stage.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center" {...reveal}>
            <div>
              <SectionLabel>Conversation design</SectionLabel>
              <h2 className="mt-5 text-4xl font-bold md:text-6xl">Designed for how students actually communicate.</h2>
              <p className="mt-7 text-lg leading-9 text-slate-400">
                Residents will not always use formal grammar, repeat every detail, or phrase a question exactly like the knowledge base. In this exchange, “they arent answering tho” is an <strong className="font-semibold text-slate-200">elliptical follow-up</strong>: the subject is not restated, and “they” only makes sense when connected to the on-call RA mentioned in the previous response.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-400">
                RAI uses <strong className="font-semibold text-slate-200">multi-turn conversational context</strong> and <strong className="font-semibold text-slate-200">coreference resolution</strong> to preserve that relationship, interpret the student’s intent, and retrieve the correct next-step guidance despite colloquial wording, missing punctuation, and non-standard grammar.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Understands informal and colloquial phrasing",
                  "Connects follow-up messages to earlier context",
                  "Returns the next verified step without requiring a perfect prompt",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 text-slate-200">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs text-emerald-300"><FaCheck /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3">
              <img
                src="/rai-conversation.png"
                alt="Ask RAI conversation showing a lockout question followed by an informal contextual follow-up"
                className="w-full rounded-[1.4rem]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-br from-purple-950/50 to-slate-950 px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div className="max-w-4xl" {...reveal}>
            <SectionLabel>System logic</SectionLabel>
            <h2 className="mt-5 text-4xl font-bold md:text-6xl">Useful AI starts with a controlled information path.</h2>
          </motion.div>

          <motion.div className="mt-14 grid gap-4 lg:grid-cols-4" {...reveal}>
            {[
              ["01", "Resident asks", "Natural-language housing question"],
              ["02", "RAI interprets", "Matches intent to a procedure ID"],
              ["03", "Knowledge is checked", "Retrieves the verified answer"],
              ["04", "Answer or escalation", "Responds safely and logs anonymously"],
            ].map(([number, title, copy], index) => (
              <div key={number} className="relative rounded-3xl border border-white/10 bg-[#0b0e1c]/75 p-7">
                <p className="text-sm font-black text-pink-300">{number}</p>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{copy}</p>
                {index < 3 && <FaArrowRight className="absolute -right-3 top-1/2 z-10 hidden text-pink-300 lg:block" />}
              </div>
            ))}
          </motion.div>

          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.06] p-6 text-emerald-100">
            <FaShieldAlt className="mt-1 shrink-0" />
            <p className="leading-7">Privacy was part of the product design: analytics capture the question, matched procedure, category, urgency, and answer status—not a resident’s name or identity.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-32">
        <motion.div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2" {...reveal}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <SectionLabel>Decisions that shaped it</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">Designing for trust, not novelty.</h2>
            <ul className="mt-8 space-y-6 text-slate-300">
              <li className="border-l-2 border-pink-300/50 pl-5"><strong className="text-white">Verified over impressive.</strong> A clear escalation is better than a confident, unsupported answer.</li>
              <li className="border-l-2 border-pink-300/50 pl-5"><strong className="text-white">Actionable analytics.</strong> Unanswered questions and category gaps matter more than decorative charts.</li>
              <li className="border-l-2 border-pink-300/50 pl-5"><strong className="text-white">Professional familiarity.</strong> TSU-inspired maroon, strong contrast, and clear labels make the interface feel intentional and easy to scan.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-purple-300/15 bg-gradient-to-br from-purple-500/15 to-pink-500/5 p-8 md:p-10">
            <SectionLabel>What I learned</SectionLabel>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">The model is only one part of the product.</h2>
            <p className="mt-7 text-lg leading-9 text-slate-300">
              Building RAI strengthened how I think about retrieval quality, evaluation, privacy, user experience, and operational value together. The most useful question was not “Can AI answer this?” but “How do I know this answer is safe, relevant, and useful to the people relying on it?”
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-28 md:px-10 md:pb-36">
        <motion.div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-pink-300/20 bg-gradient-to-br from-[#3b124d] via-[#25113e] to-[#0b0e1b] p-9 md:p-16"
          {...reveal}
        >
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel>What comes next</SectionLabel>
              <h2 className="mt-5 max-w-3xl text-4xl font-bold md:text-6xl">RAI is deployed. The learning is still moving.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Next iterations would add persistent cloud storage, individual authentication, a larger policy library, a repeatable evaluation set, and integrations with campus systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://rai-resident-assistant-ad682wglxw86bnjrjhuvyz.streamlit.app" target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 hover:scale-105 transition">Try RAI</a>
              <a href="/" className="rounded-full border border-white/20 px-6 py-3.5 font-bold hover:bg-white/10 transition">Back to portfolio</a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-500 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kamsiyochukwu Udolisa</p>
          <p>RAI · Resident AI Assistant</p>
        </div>
      </footer>
    </main>
  );
}

export default RaiPage;
