import React from "react";
import { motion } from "framer-motion";

const Title = ({ title }) => {
  return (
    <motion.div
      className="grid items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};

export default Title;
