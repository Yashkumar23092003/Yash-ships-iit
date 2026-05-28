import { Award, BadgeCheck, DollarSign, Medal, Rocket, Target, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  { icon: Trophy, stat: "AIR 1380", label: "JEE Advanced (Top 0.5% of 250K+ students)" },
  { icon: Medal, stat: "Top 25 / 1000+", label: "Teams - IIT Delhi FITT Hackathon" },
  { icon: Award, stat: "Top 100", label: "Samsung Solve for Tomorrow (Nationwide)" },
  { icon: BadgeCheck, stat: "NDA SSB Cleared", label: "Selected through the National Defence Academy SSB process" },
  { icon: Rocket, stat: "Microsoft", label: "For Startups - Founders Hub" },
  { icon: DollarSign, stat: "Rs40,000", label: "Revenue - Self-built MVPs" },
  { icon: Target, stat: "99.3 %ile", label: "JEE Mains 2021" },
];

const AchievementsSection = () => (
  <section className="py-24 px-6" id="achievements">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center font-syne text-3xl font-bold md:text-4xl"
      >
        <span className="text-primary">Recognition</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-mono text-xl font-medium text-primary">{a.stat}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1 leading-relaxed">
                {a.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
