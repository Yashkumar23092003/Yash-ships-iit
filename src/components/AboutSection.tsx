import { motion } from "framer-motion";

const operatingPrinciples = [
  {
    label: "Taste",
    text: "I care about the first emotional read, not just whether the screen is functional.",
  },
  {
    label: "Speed",
    text: "I use AI-native tools to compress the distance between an idea, a prototype, and a live product.",
  },
  {
    label: "Ownership",
    text: "I stay with the unglamorous parts: vendor calls, bugs, user feedback, launch details, and iteration.",
  },
];

const AboutSection = () => (
  <section className="px-6 py-24" id="about">
    <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.32em] text-primary">
          How I build
        </p>
        <h2 className="font-syne text-4xl font-extrabold leading-tight md:text-5xl">
          Product person when it is ambiguous. Operator when it has to ship.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="space-y-7"
      >
        <p className="text-lg leading-8 text-foreground/82">
          I do not anchor myself to a job title. The work I keep choosing is
          the messy kind: making sense of a market, shaping the product,
          building the first version, getting it in front of users, and then
          tightening what reality exposes.
        </p>
        <p className="text-lg leading-8 text-foreground/70">
          That is the through-line from Homescanner.ai to Superb Realty, Tater
          World, Superb Capital, and Superb OS. I am interested in products
          where taste, systems thinking, and execution speed all matter at once.
        </p>

        <div className="grid gap-4 pt-2">
          {operatingPrinciples.map((item) => (
            <div key={item.label} className="border-t border-border pt-4">
              <div className="mb-2 font-syne text-xl font-bold text-primary">
                {item.label}
              </div>
              <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
