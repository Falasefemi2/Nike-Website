import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const imageVariants = {
    initial: { rotate: -35 },
    animate: { rotate: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        initial="initial"
        animate="animate"
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExists ? "justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? "justify-items-start" : "justify-items-center"
          }`}
        >
          <motion.h1
            className="text-2xl lg:text-lg md:text-base font-meduim filter drop-shadow text-slate-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.5 },
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base md:text-sm font-normal text-slate-200 filter drop-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            }}
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            className="flex items-center justify-between w-28 my-2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              className="flex items-center bg-white/80 px-1 rounded blur-effect-theme
            "
            >
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              className="flex items-center gap-1"
            >
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="font-normal md:text-sm text-slate-100">
                {rating}
              </h1>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.7, duration: 0.5 } }}
            className="flex items-center gap-3"
          >
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
            >
              {btn}
            </button>
          </motion.div>
        </div>
        <motion.div
          className={`flex items-center ${
            ifExists ? "absolute top-5 right-1" : "justify-center"
          }`}
          variants={imageVariants}
          initial="initial"
          animate="animate"
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme ${
              ifExists ? "h-auto w-64 lg:w-56 md:w-48" : "h-36 w-64"
            }`}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Item;
