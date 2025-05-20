import { motion } from "framer-motion";


const ZoomPage = ({ children }) => (
    <motion.div
      className="h-screen"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );

export default ZoomPage;