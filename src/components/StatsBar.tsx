import { motion } from "framer-motion";

const stats = [
  { number: "10,000+", label: "Users shipped to" },
  { number: "150+", label: "User interviews conducted" },
  { number: "3", label: "Products launched (0->1)" },
  { number: "Top 25", label: "/ 1,000+ Teams (FITT)" },
];

const StatsBar = () => (
  <section className="overflow-x-auto border-y border-border py-10">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4"
    >
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        >
          <div className="font-mono text-2xl font-medium text-primary md:text-3xl">{s.number}</div>
          <div className="mt-1 font-mono text-xs text-muted-foreground">{s.label}</div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default StatsBar;
