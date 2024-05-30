import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./contact.scss";

const variants = {
  // Variants for the entire page animation
  initial: {
    x: -500, // Start off-screen to the left
    opacity: 0, // Start fully transparent
  },
  animate: {
    x: 0, // End at original position
    opacity: 1, // End fully opaque
    transition: {
      duration: 0.5, // Animation duration
      staggerChildren: 0.2, // Stagger animations of children
    },
  },
};

const Contact = () => {
  const ref = useRef()
  const isInViewTop = useInView(ref, {margin:"-40% 0% -60% 0%"})

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
    //   whileInView="animate"
      ref={ref}
      animate={isInViewTop && "animate"}
    >
      <div className="textContainer">
        <h1>Let's work together</h1>
        
          <motion.div className="socials" variants={variants}>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=daniellonghua@gmail.com&su=Inquiry&body=Hello, I would like to know more about..."
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
            >
              <motion.img
                src="/email.png"
                alt="email"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dannylhua/"
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
            >
              <motion.img
                src="/linkedin.png"
                alt="linkedin"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href="https://github.com/dnnyhua"
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
            >
              <motion.img
                src="/github.png"
                alt="github"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={variants}
            >
              <motion.img
                src="/twitter.png"
                alt="twitter"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
          
        </motion.div>
      </div>

      <div className="formContainer">
        <form action="">
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
