import { motion, useScroll, useSpring } from "framer-motion";

import Magnetic from "@/components/Magnetic";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute left-0 right-0 top-0 h-0.5 origin-left bg-gradient-to-r from-primary/40 via-primary to-primary shadow-[0_0_8px_hsl(var(--primary)/0.6)]"
      />
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-syne font-bold text-lg text-primary tracking-tight">
          YK.
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/yash-iitd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Yashkumar23092003"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            GitHub
          </a>
          <Magnetic strength={0.35}>
            <a
              href="https://cal.com/yash-kumar-fcml81/1-1-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a 1:1
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
