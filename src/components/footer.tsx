import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} Shivam Singh. All Rights Reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with{" "}
            <span className="text-pink-500">passion</span> and{" "}
            <span className="text-purple-500">creativity</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
