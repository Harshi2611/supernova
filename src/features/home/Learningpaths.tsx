import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

const paths = [
  {
    title: "NEET Ultimate Precision",
    description:
      "Comprehensive biology, chemistry, and physics modules designed specifically for top-tier medical entrance.",
    duration: "2 Year Integrated",
    tag: "Medical",
    color: "bg-blue-50 border-blue-100",
  },
  {
    title: "JEE Main & Advanced",
    description:
      "Advanced problem-solving techniques and rigorous mathematics training for IIT aspirant accelerators.",
    duration: "Intensive Filter",
    tag: "Engineering",
    color: "bg-amber-50 border-amber-100",
  },
  {
    title: "Pre-Foundation Ignite",
    description:
      "Building a bulletproof base in logic and core sciences for students in grades 5 to 10.",
    duration: "Grades 5-10",
    tag: "Foundation",
    color: "bg-green-50 border-green-100",
  },
];

const LearningPaths = () => {
  return (
    <section id="courses" className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl text-primary md:text-4xl font-bold mb-3">
              Tailored Pathways to Success
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Each course is meticulously structured by curriculum architects to
              ensure absolute conceptual clarity.
            </p>
          </div>
          <a
            href="#courses"
            className="text-primary font-semibold  text-sm flex items-center gap-1 mt-4 md:mt-0 hover:underline"
          >
            View All Programs <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paths.map((path, i) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl border p-6 ${path.color} hover:shadow-lg transition-shadow`}
            >
              <div className="h-40 rounded-xl bg-white/60 flex items-center justify-center mb-5">
                <BookOpen className="w-12 h-12 text-primary/30" />
              </div>
              <h3 className="text-lg font-bold mb-2">{path.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {path.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {path.duration}
                </span>
                <Button
                  variant="link"
                  className="text-primary text-sm p-0 h-auto"
                >
                  Syllabus <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
