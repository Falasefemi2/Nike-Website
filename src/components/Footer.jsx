import { motion } from "framer-motion";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <motion.footer
        className="bg-theme pt-7 pb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nike-container text-slate-200">
          <motion.div
            className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {titles.map((val, i) => (
              <motion.div
                key={i}
                className="grid items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h1>
              </motion.div>
            ))}
            {links.map((list, i) => (
              <motion.ul
                key={i}
                className="grid items-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {list.map((link, i) => (
                  <motion.li
                    key={i}
                    className="text-sm sm:text-xs"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1 + titles.length * 0.1,
                    }}
                  >
                    {link.link}
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </motion.div>
          <motion.div
            className="mt-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: titles.length * 0.1 + links.flat().length * 0.1,
            }}
          >
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights <span className="font-semibold">FALASE FEMI</span>
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
