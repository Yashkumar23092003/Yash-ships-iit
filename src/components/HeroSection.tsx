import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import yashPortrait from "@/logo/Yash.png";
import yashAnimated from "@/logo/Yash_animated.png";

const proofPoints = ["IIT Delhi", "Co-founded Homescanner.ai", "10K+ users shipped to"];

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-6 pt-28 pb-16">
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute bottom-10 right-[8%] hidden h-32 w-32 rotate-6 border border-primary/15 md:block" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-primary">
            Yash Kumar / product builder
          </p>

          <h1 className="max-w-4xl font-inter text-3xl font-extrabold leading-[0.98] tracking-normal sm:text-4xl md:text-5xl lg:text-6xl">
            Smart enough to think,
            <br />
            Foolish enough to execute
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-foreground/78 sm:text-lg sm:leading-8">
            I am an IIT Delhi builder who lives between product taste, AI tools,
            sharp execution, and the uncomfortable early days before a product
            looks obvious.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {proofPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-border bg-card/70 px-3 py-1.5 font-mono text-xs text-muted-foreground"
              >
                {point}
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-syne text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              See shipped work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="https://cal.com/yash-kumar-fcml81/1-1-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/35 px-6 py-3 font-syne text-sm font-bold text-primary transition-colors hover:bg-primary/10"
            >
              Talk with me <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/pdf/Yash_kumar.pdf"
              download="Yash_kumar_resume.pdf"
              className="inline-flex items-center justify-center gap-1.5 rounded-md px-4 py-3 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-primary hover:bg-primary/5"
            >
              Resume <Download className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: -1.5 }}
          transition={{ delay: 0.12, duration: 0.65 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="absolute -inset-4 rotate-3 border border-primary/25" />
          <div className="relative overflow-hidden rounded-[1.25rem] border border-border bg-card shadow-2xl shadow-black/40 cursor-pointer group">
            <img
              src={yashAnimated}
              alt="Yash Kumar smiling outdoors"
              className="aspect-[4/5] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <img
              src={yashPortrait}
              alt="Yash Kumar smiling outdoors"
              className="aspect-[4/5] w-full object-cover absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
          <div className="absolute -bottom-6 left-5 right-5 border border-border bg-background/90 p-4 backdrop-blur">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Operating note
            </p>
            <p className="mt-2 text-sm leading-6 text-foreground/80">
              I learn by shipping, talking to users, and fixing what breaks in
              public.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
