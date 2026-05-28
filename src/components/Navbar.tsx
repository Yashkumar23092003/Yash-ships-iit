import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-syne font-bold text-lg text-primary tracking-tight">
          YK.
        </a>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Yashkumar23092003"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://cal.com/yash-kumar-fcml81/1-1-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 font-mono text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a 1:1
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
