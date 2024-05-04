"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
export default function Title() {
	let header = "Unvieled!";
	header = header.split("");
	const [time, setTime] = useState(true);
	const { data: session } = useSession();
	setTimeout(() => {
		setTime(false);
	}, 2000);
	return (
		<div id="head" style={{ fontFamily: "Unbounded" }}>
			<motion.div
				id="header-1"
				style={{
					background: "linear-gradient(90deg, #81c1e3 0%, #ed78b7 65%, #9c65e3 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
				initial={{ opacity: 0 }}
				transition={{ type: "tween", ease: "easeInOut", delay: 2 }}
				animate={{ opacity: 1 }}
				className="flex flex-row text-2xl absolute"
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
				style={{ color: "#81C1E3" }}
				initial={{ opacity: 1 }}
				transition={{ type: "tween", ease: "easeInOut", delay: 0.5 }}
				animate={{ opacity: 0 }}
				className="flex flex-row text-2xl "
			>
				{header.map((letter, index) => {
					return (
						<motion.div
							key={index}
							initial={{ scale: 0.1, opacity: 0 }}
							transition={{ type: "tween", delay: index * 0.1 }}
							animate={{ scale: 1, opacity: time == true ? 1 : 0 }}
						>
							{letter}
						</motion.div>
					);
				})}
			</div>
			<div id="user-image">
				<motion.img
					initial={{ scale: 0.1, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ type: "tween", delay: 1.5 }}
					src={session?.user?.image}
				/>
			</div>
		</div>
	);
}
