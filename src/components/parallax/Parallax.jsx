import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "1100%"]), {
    stiffness: 300, // Increased stiffness for faster movement
    damping: 40,    // Decreased damping for faster movement
  });
  
  const yBg1 = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "300%"]), {
    stiffness: 700,
    damping: 40,
  });
  const yBg2 = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "500%"]), {
    stiffness: 700,
    damping: 40,
  });
  const yBg3 = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "700%"]), {
    stiffness: 700,
    damping: 40,
  });
  const yBg4 = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "900%"]), {
    stiffness: 700,
    damping: 40,
  });
  const yBg5 = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "1200%"]), {
    stiffness: 700,
    damping: 40,
  });


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
