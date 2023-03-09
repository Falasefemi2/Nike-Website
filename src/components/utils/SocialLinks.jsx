import React from "react";
import { motion } from "framer-motion";

const SocialLinks = ({ icon }) => {
  return (
    <>
      <motion.img
        src={icon}
        alt="icon"
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </>
  );
};

export default SocialLinks;
