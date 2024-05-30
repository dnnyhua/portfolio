import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5}}
          animate={{ opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
        >
          Dev With Dan
        </motion.span>
      </div>
    </div>
  );
};

export default NavBar;
