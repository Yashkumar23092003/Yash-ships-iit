import { motion } from "framer-motion";
import iitdLogo from "@/logo/IITD.png";
import dmsLogo from "@/logo/DMS.png";

const degrees = [
  {
    logo: iitdLogo,
    logoAlt: "IIT Delhi logo",
    degree: "Bachelor of Technology",
    institution: "Indian Institute of Technology Delhi",
    period: "2021 – 2025",
    tags: ["Engineering", "Product Thinking", "Research"],
    accent: false,
  },
  {
    logo: dmsLogo,
    logoAlt: "DMS IIT Delhi logo",
    degree: "Minor in Entrepreneurship",
    institution: "Dept. of Management Studies, IIT Delhi",
    period: "2023 – 2025",
    tags: ["Entrepreneurship", "Business Strategy", "Venture Building"],
    accent: true,
  },
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
        <p className="mt-4 font-mono text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Engineering foundation meets entrepreneurial lens — the combination
          shapes how I build: structured, execution-focused, and product-aware.
        </p>
      </motion.div>

      <div className="space-y-5">
        {degrees.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
            className={`rounded-2xl border bg-card/70 backdrop-blur-sm p-6 md:p-8 shadow-2xl shadow-black/20 ${
              item.accent ? "border-primary/30" : "border-border"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {/* Logo */}
              <div
                className={`flex-shrink-0 flex h-[85px] w-[85px] items-center justify-center rounded-full border shadow-[0_0_0_6px_hsl(var(--primary)/0.04)] ${
                  item.accent
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-muted/30"
                }`}
              >
                <img
                  src={item.logo}
                  alt={item.logoAlt}
                  className="h-[61px] w-[61px] rounded-full object-contain bg-background p-1.5"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3
                      className={`font-syne text-xl font-bold ${
                        item.accent ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.degree}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <span className="flex-shrink-0 self-start rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 font-mono text-xs ${
                        item.accent
                          ? "border-primary/25 bg-primary/5 text-primary"
                          : "border-border/70 bg-background/50 text-muted-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
