import React from "react";
import { motion } from "framer-motion";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <motion.div
      className="nike-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title
        title={title}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
          ifExists
            ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
            : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {items?.map((item, i) => (
          <Item
            {...item}
            key={i}
            ifExists={ifExists}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: i * 0.1,
                  duration: 0.3,
                },
              },
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Sales;
