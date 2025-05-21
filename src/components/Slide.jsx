import { motion } from "framer-motion";

export default function Slide({ children }) {
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 25, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-16 left-0 w-full z-50"
    >
      {children}
    </motion.div>
  );
}