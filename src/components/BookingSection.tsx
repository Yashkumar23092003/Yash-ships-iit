import { motion } from "framer-motion";

const BookingSection = () => (
  <section className="px-6 py-24" id="booking">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <h2 className="mb-6 font-syne text-3xl font-bold md:text-4xl">
        Let's talk product, startups,{" "}
        <span className="text-primary">or just life.</span>
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-muted-foreground">
        I am most useful around ambiguous product problems, AI-native build
        workflows, and early teams trying to turn taste into shipped product.
      </p>
      <a
        href="https://cal.com/yash-kumar-fcml81/1-1-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 font-syne text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Start a conversation
      </a>
      <div className="mt-6">
        <a
          href="https://github.com/Yashkumar23092003"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          GitHub / Yashkumar23092003
        </a>
      </div>
      <p className="mt-6 font-mono text-xs text-muted-foreground">
        Usually responds within 24 hrs / Based in Mumbai / Open to remote
      </p>
    </motion.div>
  </section>
);

export default BookingSection;
