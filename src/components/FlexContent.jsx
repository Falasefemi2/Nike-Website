import React from "react";
import { motion } from "framer-motion";

const FlexContent = ({ endpoint, ifExists }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${
          ifExists ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="text-4xl sm:text-3xl font-bold text-gradient"
          >
            {endpoint.heading}
          </motion.h1>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.2,
            }}
            className="text-5xl lg:text-4xl md;text-3xl sm:text-2xl font-bold text-slate-900 filter drop-shadow-lg"
          >
            {endpoint.title}
          </motion.h1>
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.4,
            }}
            className="xl:text-sm my-4 text-slate-900"
          >
            {endpoint.text}
          </motion.p>
          <motion.a
            href={endpoint.url}
            className="flex items-center"
            target={"_blank"}
            role="button"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
              delay: 0.6,
            }}
          >
            <motion.button
              type="button"
              className="button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {endpoint.btn}
            </motion.button>
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: 0.8,
          }}
          className="flex items-center justify-center max-w-xl relative lg:max-w-none w-full "
        >
          <motion.img
            src={endpoint.img}
            alt={`img/${endpoint.heading}`}
            className={`w-auto object-fill transition-theme ${
              ifExists
                ? "h-60 lg:h-56 md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-12"
                : "h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:rotate-12"
            }`}
            whileHover={{ rotate: ifExists ? -12 : 12 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default FlexContent;
