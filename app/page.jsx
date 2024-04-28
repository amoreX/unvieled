"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {signIn} from "next-auth/react";
export default function Home() {
  let header = "Unvieled!";
  header = header.split("");
  let click = "Unveil yourself";
  const[time,setTime]=useState(true);
  const [clicktext, setClicktext] = useState(click);
  const [isHover, setHover] = useState(false);
  const handleclick = () => {
    setHover(true);
    setTimeout(() => {
      signIn("google", { callbackUrl: "/Pages/" });
  }, 1000);
  };
  setTimeout(()=>{
	setTime(false);
  },2000);
  return (
    <div
      id="main-container"
      style={{ fontFamily: "Unbounded", }}
      className="text-white cursor-default w-screen h-screen flex flex-col justify-center items-center"
    >
      <div id="header-container" className="relative">
	  <motion.div
        id="header-1"
		style={{background:"linear-gradient(90deg, #81c1e3 0%, #ed78b7 65%, #9c65e3 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}
		initial={{opacity:0}}
		transition={{type:"tween",ease:"easeInOut",delay:2}}
		animate={{opacity:1}}
        className="flex flex-row text-4xl absolute"
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
      </motion.div>
	  <div
        id="header-2"
		style={{color:"#cce6f4"}}
		initial={{opacity:1}}
		transition={{type:"tween",ease:"easeInOut",delay:0.5}}
		animate={{opacity:0}}
        className="flex flex-row text-4xl "
      >
        {header.map((letter, index) => {
          return (
            <motion.div
              key={index}
              initial={{ scale: 0.1, opacity: 0 }}
              transition={{ type: "tween", delay: index * 0.1 }}
              animate={{ scale: 1, opacity: time==true?1:0 }}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>

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
        style={{ background: "#CCE6F4" ,border: "1px solid #CCE6F4 "}}
        initial={{ scale: 0.1, opacity: 0 }}
        transition={{ type: "tween", delay: 1.2 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-black px-7 py-1 rounded-3xl my-5 relative w-56 h-8 flex flex-col items-center overflow-hidden cursor-pointer"
        onClick={() => {
          handleclick();
        }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          transition={{ type: "tween", delay: 1.6 }}
          animate={{ opacity: 1 }}
        >
          {clicktext}
        </motion.span>
        {isHover == true ? (
          <motion.div initial={{ y:200}}
          transition={{type:"tween",ease:"easeInOut",duration:0.58}}
          animate={{y:-4}}
          className="w-full h-full text-white absolute bg-black flex justify-center  items-center">Have fun Unvieling!</motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
