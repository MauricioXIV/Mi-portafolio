import { motion } from "framer-motion";

const Fade2 = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
      className="w-full h-full top-0 left-0"
    >
      {children}
    </motion.div>
  );
  
export default Fade2