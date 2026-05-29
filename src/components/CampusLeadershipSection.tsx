import { motion } from "framer-motion";

const roles = [
  {
    role: "Business Head",
    org: "Infinity Hyperloop · IIT Delhi",
    period: "Aug 2024 – Jan 2025 · 6 mos",
    highlights: [
      "Led end-to-end management of a deep-tech Hyperloop product — the 5th mode of transportation.",
      "Owned business strategy, operations, and team coordination for the full product lifecycle.",
    ],
  },
  {
    role: "Executive",
    org: "eDC (Entrepreneurship Development Cell) · IIT Delhi",
    period: "Oct 2022 – Aug 2023 · 11 mos",
    highlights: [
      "Managed the Campus Ambassador Program end-to-end — planning and execution.",
      "Co-hosted events and Q&A sessions with unicorn co-founders, driving entrepreneurial thinking.",
      "Created Instagram content and oversaw security & hospitality at large-scale events.",
    ],
  },
  {
    role: "Coordinator",
    org: "TRYST · IIT Delhi",
    period: "Feb 2024 – Apr 2024 · 3 mos",
    highlights: [
      "Led a team of five at India's largest college tech summit.",
      "Managed all event requirements from pre-production through live execution.",
    ],
  },
  {
    role: "Coordinator",
    org: "Rendezvous · IIT Delhi",
    period: "May 2023 – Jul 2023 · 3 mos",
    highlights: [
      "Led a team at India's largest cultural college fest under tight deadlines.",
      "Managed intricate logistics and high stakeholder expectations end-to-end.",
    ],
  },
];

const CampusLeadershipSection = () => (
  <section className="px-6 py-24" id="campus">
    <div className="mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center font-syne text-3xl font-bold md:text-4xl"
      >
        Where I <span className="text-primary">Led on Campus</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {roles.map((r, i) => (
          <motion.div
            key={`${r.role}-${r.org}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-2xl border border-border bg-card p-6 border-l-[3px] border-l-primary hover:border-primary/40 transition-colors"
          >
            <h3 className="font-syne text-lg font-bold text-foreground">{r.role}</h3>
            <p className="mt-1 font-mono text-xs font-medium text-primary">{r.org}</p>
            <p className="mb-5 mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {r.period}
            </p>
            <ul className="space-y-2">
              {r.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 font-mono text-xs leading-relaxed text-muted-foreground">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CampusLeadershipSection;
