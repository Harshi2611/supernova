import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Active Students" },
  { value: "2", label: "Branches" },
  { value: "5-12", label: "Standards" },
  { value: "99.9", label: "Highest Percentile" },
];

const StatsBar = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold font-display text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
