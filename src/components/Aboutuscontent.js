"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

const words = `I have a specialization in creating conversion-optimized websites using WordPress or the latest technologies such as ReactJS, NextJS, NodeJS, MongoDB, ExpressJS, Python, Django, and SQL. To enhance the user experience, we have implemented Tailwind CSS, Bootstrap and Framer Motion. My work is driven by a strong passion for innovation, and I have successfully developed numerous websites that showcase my dedication to delivering excellence. Whether you require a visually appealing ecommerce website that generates substantial profits or a responsive website or portfolio, I possess the necessary skills to bring your vision to life. Let us embark on this journey together to transform your ideas into remarkable digital experiences.
`;

const wordsArray = words.split(" ");

export const Aboutuscontent = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word) => {
          return (
            <motion.span className="text-black/[0.8] lg:text-lg text-base font-semibold opacity-0">{word} </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className="my-4 p-4 h-[30rem] md:h-[20rem] overflow-y-auto w-full bg-white/[0.5] backdrop-blur-sm border border-neutral-800 max-w-2xl mx-auto rounded-md">
      <Icons />
      <div className="mt-4">
        <div
          className="text-white text-2xl leading-snug tracking-wide"
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

const Icons = () => {
  return (
    <div className="flex space-x-2 items-center">
      <div className="h-3 w-3 rounded-full bg-red-500" />
      <div className="h-3 w-3 rounded-full bg-gray-300" />
      <div className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
};



