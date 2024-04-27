"use client";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Home() {
  let header = "Unvieled!";
  header = header.split("");
  let click = "Unveil yourself";
  const [clicktext, setClicktext] = useState(click);
  const handleclick = () => {
    click = "Loading...";
    setClicktext(click);
  };
  return (
    <div
      id="main-container"
      style={{ fontFamily: "Unbounded" }}
      className="text-white cursor-default w-screen h-screen flex flex-col justify-center items-center"
    >
      <div
        id="header"
        className="flex flex-row text-4xl"
        style={{ color: "#CCE6F4" }}
      >
        {header.map((letter, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0.1, opacity: 0 }}
              transition={{ type: "tween", delay: index * 0.1 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        id="about"
        initial={{ y: 20, opacity: 0 }}
        transition={{ type: "tween", delay: 1 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Get Social
      </motion.div>
      <motion.div
        id="signin-btn"
        style={{ background: "#CCE6F4" }}
        onClick={() => {
          handleclick();
        }}
        initial={{ scale:0.1, opacity: 0 }}
        transition={{ type: "tween", delay: 1.2 }}
        animate={{ scale:1, opacity: 1 }}
        className="text-black px-7 py-1 rounded-3xl my-5"
      >
        <motion.span
          initial={{  opacity: 0 }}
          transition={{ type: "tween", delay:1.6}}
          animate={{  opacity: 1 }}
        >
          {clicktext}
        </motion.span>
      </motion.div>
    </div>
  );
}
