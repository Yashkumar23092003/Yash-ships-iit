import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Homescanner.ai",
    type: "Co-founder / AI home discovery",
    tension: "Home search was noisy, slow, and full of dead ends.",
    move:
      "Shaped an AI-led discovery flow that reduced search friction and helped users move from vague intent to a real shortlist faster.",
    link: "https://homescanner.ai",
    tags: ["10K+ users", "70% faster discovery", "0->1 product"],
  },
  {
    name: "Superb Realty",
    type: "Premium real estate platform",
    tension: "A high-trust real estate brand needed to feel clearer and more credible online.",
    move:
      "Built and managed the digital presence so property discovery, brand story, and conversion paths felt more intentional.",
    link: "https://www.superbrealty.in/",
    tags: ["Brand system", "Property discovery", "Ongoing owner"],
  },
  {
    name: "Tater World",
    type: "Parent company identity",
    tension: "Multiple business lines needed one coherent company-level presence.",
    move:
      "Created a corporate site that gave the parent brand a cleaner structure, stronger hierarchy, and a sharper public face.",
    link: "https://www.taterworld.in/",
    tags: ["Corporate site", "Information architecture", "Digital identity"],
  },
  {
    name: "Superb Capital",
    type: "Investor-facing website",
    tension: "The brand needed to signal trust quickly without looking like generic finance.",
    move:
      "Designed and managed a restrained VC presence with clearer positioning and a more premium first impression.",
    link: "https://www.superbcapital.in/",
    tags: ["VC website", "Trust signal", "Premium polish"],
  },
  {
    name: "Superb OS",
    type: "Internal operating product",
    tension: "Team performance data needed to move from scattered signals into one usable product surface.",
    move:
      "Used Lovable and AI-native workflows to ship a live internal product page fast enough for real team feedback.",
    link: "https://superb-os.lovable.app/",
    tags: ["Internal tooling", "Lovable", "Live prototype"],
  },
];

const stack = ["Claude Code", "Codex", "Lovable", "Figma", "Full-stack delivery"];

const SelectedWorkSection = () => (
  <section className="px-6 py-24" id="projects">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end"
      >
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Selected work
          </p>
          <h2 className="font-syne text-4xl font-extrabold leading-tight md:text-5xl">
            Not side quests. Shipped surfaces with real constraints.
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground md:justify-self-end">
          The pattern is not "I made websites." It is that I keep stepping into
          fuzzy business problems, turning them into product surfaces, and
          staying close enough to see whether they work.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            className="group grid gap-6 border border-border bg-card/70 p-5 transition-colors hover:border-primary/40 hover:bg-card md:grid-cols-[0.85fr_1.15fr_auto] md:items-center md:p-6"
          >
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-primary/80">
                {project.type}
              </p>
              <h3 className="font-syne text-2xl font-bold transition-colors group-hover:text-primary">
                {project.name}
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-sm leading-7 text-foreground/82">{project.tension}</p>
              <p className="text-sm leading-7 text-muted-foreground">{project.move}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[10px] tracking-wide text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.45 }}
        className="mt-10 border-y border-border py-6"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Current build stack
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 font-mono text-xs text-primary"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SelectedWorkSection;
