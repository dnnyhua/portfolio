import React from "react";
import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-65%",
    transition: {
      repeat: Infinity,
      duration: 30,
    },
  },
};

const sliderVariants2 = {
  initial: {
    x: "-65%",
  },
  animate: {
    x: "100%",
    transition: {
      repeat: Infinity,
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
            <motion.div className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
            >
                <motion.h2 variants={textVariants}>DANNY HUA</motion.h2>
                <motion.h1 variants={textVariants}> Software Developer</motion.h1>
                <motion.div variants={textVariants} className="buttons" >
                    <motion.button variants={textVariants}>
                    See Latest Works
                    </motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
            </motion.div>

            <div className="imageContainer">
            <img src="/pfp-blue.png" alt="" />
            </div>
        </div>

        <div className="anotherContainer">
            <div className="slidingTextContainer">
                <motion.div
                className="slidingTexts"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
                >
                Shopify | Wix | FourthWall | WordPress
                </motion.div>
                <motion.div
                className="slidingTexts"
                variants={sliderVariants2}
                initial="initial"
                animate="animate"
                >
                WordPress | FourthWall | Wix | Shopify
                </motion.div>
            </div>
        </div>
        
    </div>
  );
};

export default Hero;
