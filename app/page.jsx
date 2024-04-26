"use client";

import { motion } from "framer-motion";
export default function Home() {
	let header = "Unvieled!";
	header = header.split("");
	return (
		<div
			id="main-container"
			className="text-white w-screen h-screen flex flex-col justify-center items-center"
		>
			<div id="header" className="flex flex-row text-4xl">
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
			<div id="signin-btn">fuck yourself</div>
		</div>
	);
}
