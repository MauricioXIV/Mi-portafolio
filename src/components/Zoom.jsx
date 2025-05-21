import { motion } from "framer-motion";


const ZoomPage = ({ children }) => (
    <motion.div
      className="w-full h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );

export default ZoomPage;