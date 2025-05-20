import { motion } from "framer-motion";

const Fade = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full top-0 left-0"
    >
      {children}
    </motion.div>
  );
  
export default Fade