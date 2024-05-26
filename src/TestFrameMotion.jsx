import { motion } from "framer-motion";
import { useState } from "react";

const TestFrameMotion = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const variants2 = {
    visible: { opacity: 1, x: 800, transition: { duration: 2 } },
    hidden: { opacity: 0 },
  };

  const variants3 = {
    visible: {
      opacity: 1,
      x: 800,
      transition: { type: "spring", stiffness: 500 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="course">
      {/* Example 1 */}
      {/* <motion.div
        className="box"
        initial={{opacity: 0, scale: 0.5}}
        animate={{ opacity: 1, scale: 1, x: 200, y:500 }}
        transition={{ duration: 2, delay: 1 }}
        whileHover={{opacity:1, scale:2}}
        whileInView={{opacity:1, scale:2}}
        drag
      ></motion.div> */}

      {/*Example 2: box enlarges when you scroll to it */}
      {/* <motion.div
        className="box"
        initial={{opacity: 0, scale: 0.5}}
        transition={{duration: 2}}
        whileInView={{opacity:1, scale:2}}
        drag
      ></motion.div> */}

      {/* Example 3: using variants and button to show and hide; switch between variants*/}
      <motion.div
        className="box"
        variants={variants3}
        initial="hidden"
        // animate="visible"
        // transition={{duration:2}}
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
};

export default TestFrameMotion;
