import { motion } from "framer-motion";
import iitdLogo from "@/logo/IITD.png";

const highlights = [
  "Bachelor's degree from IIT Delhi",
  "Minor in Entrepreneurship",
  "Department of Management Studies (DMS), IIT Delhi",
];

const EducationSection = () => (
  <section className="py-24 px-6" id="education">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary mb-4">
          Education
        </p>
        <h2 className="font-syne text-3xl md:text-4xl font-bold">
          Grounded at <span className="text-primary">IIT Delhi</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-[220px_1fr] items-center rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-6 md:p-8"
      >
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-primary/5 shadow-[0_0_0_8px_hsl(var(--primary)/0.03)]">
            <img
              src={iitdLogo}
              alt="IIT Delhi logo"
              className="h-20 w-20 rounded-full object-contain bg-background p-2"
            />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground text-center md:text-left">
            Indian Institute of Technology Delhi
          </p>
        </div>

        <div>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
            I graduated from IIT Delhi with a strong engineering foundation and an
            entrepreneurial lens. The combination shapes how I think about building:
            structured, execution-focused, and product-aware.
          </p>

          <div className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/50 px-4 py-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <span className="font-mono text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
