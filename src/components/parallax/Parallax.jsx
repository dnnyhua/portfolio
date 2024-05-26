import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);

  const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yBg3 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg4 = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const yBg5 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <div 
        className="parallax" 
        ref={ref}
    >   
       <motion.h1 className="parallax-title" style={{ y: yText }}>
        {type === "services" ? "How Can I Help?" : "What We Did?"}
      </motion.h1>
      <motion.div style={{ y: yBg5 }} className="img5"></motion.div>
      <motion.div style={{ y: yBg4 }} className="img4"></motion.div>
      <motion.div style={{ y: yBg3 }} className="img3"></motion.div>
      <motion.div style={{ y: yBg2 }} className="img2"></motion.div>
      <motion.div style={{ y: yBg1 }} className="img1"></motion.div>
    </div>
  );
};

export default Parallax;
