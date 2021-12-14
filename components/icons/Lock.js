import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const Lock = ({
  fill = "#000000",
  width = "24",
  height = "24",
  className = "",
  control="hidden"
}) => {
  // const [isActive, setActive] = useState(active);
  // const [control, setControl] = useState("hidden");
  // useEffect(() => {
  //   setActive(active);
  // }, [active]);

  const lock = {
    hidden: {
      d: "M8 11v-4a4 4 0 0 1 8 0v4",
    },
    show: {
      d: "M8 11v-5a4 4 0 0 1 8 0",
      transition: {
        type: "spring",
        stiffness: 60
      },
    },
  };

  const lockWhole = {
    hidden : {
      opacity: 1
    },
    show: {
      opacity: 0.5,
      transition: {
        type: "spring",
        stiffness: 60
      }
    }

  }

  const controls = useAnimation()
  controls.start(control)
  useEffect(() =>{
    controls.start(control)
  },[control])


  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={fill}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      variants={lockWhole}
      animate={controls}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <circle cx="12" cy="16" r="1" />
      <motion.path
        variants={lock}
        animate={controls}
      />
    </motion.svg>

    // <path d="M8 11v-5a4 4 0 0 1 8 0" />
  );
};

export default Lock;
