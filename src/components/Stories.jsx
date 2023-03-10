import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { truncate } from "lodash";
import { motion } from "framer-motion";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
  };
  return (
    <>
      <div className="nike-container mb-11">
        <motion.div variants={titleVariants} initial="hidden" animate="visible">
          <Title title={title} />
        </motion.div>
        <div className="">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <motion.div
                  className="relative grid items-center gap-4 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200"
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  <div className="flex items-center justify-center">
                    <motion.img
                      src={val.img}
                      alt={val.img}
                      className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                    />
                  </div>
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <HeartIcon className="icon-style text-red-500 w-5 h-5" />
                      <span className="text-xs font-bold">{val.like}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <ClockIcon className="icon-style w-4 h-4 text-black" />
                      <span className="text-xs font-bold">{val.time}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <HashtagIcon className="icon-style text-blue-600" />
                      <span className="text-xs font-bold text-blue-600">
                        {val.by}
                      </span>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base ">{val.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">
                      {truncate(val.text, { length: 175 })}
                    </p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <a
                      href={val.url}
                      target="_blank"
                      role={"button"}
                      className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme"
                    >
                      {val.btn}
                    </a>
                  </div>
                </motion.div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
