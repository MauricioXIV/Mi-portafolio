import { motion } from "framer-motion";

const Fade = ({ children }) => (
    <motion.div
      style={{ willChange: "opacity", backfaceVisibility: "hidden" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
  
export default Fade