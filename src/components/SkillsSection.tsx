import { motion } from "framer-motion";

const productSkills = [
  "A/B Testing", "PRD Writing", "Roadmapping", "User Interviews",
  "Stakeholder Communication", "Agile/Scrum", "Cross-functional Leadership",
];

const engineeringSkills = [
  "Python", "JavaScript", "MERN Stack", "SQL/PostgreSQL",
  "Claude Code", "Codex", "Lovable", "n8n", "Figma", "Cursor", "Git",
];

const Pill = ({ label, delay }: { label: string; delay: number }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3 }}
    className="inline-block font-mono text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
  >
    {label}
  </motion.span>
);

const SkillsSection = () => (
  <section className="py-24 px-6" id="skills">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center font-syne text-3xl font-bold md:text-4xl"
      >
        The <span className="text-primary">Toolkit</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="mb-6 font-syne text-lg font-semibold text-muted-foreground">
            Product Brain
          </h3>
          <div className="flex flex-wrap gap-2">
            {productSkills.map((s, i) => <Pill key={s} label={s} delay={i * 0.05} />)}
          </div>
        </div>
        <div>
          <h3 className="mb-6 font-syne text-lg font-semibold text-muted-foreground">
            Engineering Hands
          </h3>
          <div className="flex flex-wrap gap-2">
            {engineeringSkills.map((s, i) => <Pill key={s} label={s} delay={i * 0.05} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
