import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./services.scss";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
};


const Services = () => {

  const ref = useRef()

  const isInViewTop = useInView(ref, {margin:"-40% 0% -60% 0%"})
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInViewTop && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/meeting.jpg" alt="" />
          <h1>
            <b className="unique-text">Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b className="unique-text">For Your</b> Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veritatis eaque odio repellendus tempora laborum, accusantium vel
            saepe, cupiditate laudantium debitis. Consequatur iusto veritatis
            vero nihil nesciunt dicta officiis ullam?
          </p>
          <button>Click</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veritatis eaque odio repellendus tempora laborum, accusantium vel
            saepe, cupiditate laudantium debitis. Consequatur iusto veritatis
            vero nihil nesciunt dicta officiis ullam?
          </p>
          <button>Click</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veritatis eaque odio repellendus tempora laborum, accusantium vel
            saepe, cupiditate laudantium debitis. Consequatur iusto veritatis
            vero nihil nesciunt dicta officiis ullam?
          </p>
          <button>Click</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "white", color: "black" }}
          variants={variants}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
            veritatis eaque odio repellendus tempora laborum, accusantium vel
            saepe, cupiditate laudantium debitis. Consequatur iusto veritatis
            vero nihil nesciunt dicta officiis ullam?
          </p>
          <button>Click</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
