import { useRef } from "react";
import { m, motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/reactCommerce.jpg",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo quam eos vitae ipsum magni voluptatem harum accusamus mollitia aperiam provident earum ea eligendi quis, saepe quas? Quod, recusandae aliquam?",
  },
  {
    id: 2,
    title: "Elegant Glow",
    img: "/elegantGlow.webp",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo quam eos vitae ipsum magni voluptatem harum accusamus mollitia aperiam provident earum ea eligendi quis, saepe quas? Quod, recusandae aliquam?",
  },
  {
    id: 3,
    title: "Food Recipe App",
    img: "/foodRecipe.webp",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo quam eos vitae ipsum magni voluptatem harum accusamus mollitia aperiam provident earum ea eligendi quis, saepe quas? Quod, recusandae aliquam?",
  },
  {
    id: 4,
    title: "Dog Walking App",
    img: "/dogWalking.webp",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos illo quam eos vitae ipsum magni voluptatem harum accusamus mollitia aperiam provident earum ea eligendi quis, saepe quas? Quod, recusandae aliquam?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start","end start"]
  });

  const yImage = useSpring(useTransform(scrollYProgress, [0, 1], [-300, 300]), {
    stiffness: 150,
    damping: 50,
  });
  
  const yText = useSpring(useTransform(scrollYProgress, [0,1], [-600, 600 ]),{ stiffness: 150, damping: 40 });

  return <section>
    <div className="container" >
        <div className="wrapper" >
            <motion.div className="imageContainer" ref={ref} style={{ y: yImage }}>
                <img src={item.img} alt="" />       
            </motion.div>
            <motion.div className="textContainer" style={{y: yText}}> 
                <h2 >{item.title}</h2>
                <p>{item.description}</p>
                <button>See Project</button>
            </motion.div>
        </div>
    </div>
  </section>;
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item} />
      ))}
    </div>
  );
};

export default Portfolio;
