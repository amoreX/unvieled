"use client";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { navelements } from "./svgs";

export default function Navbar() {
	const [currtab, setCurrtab] = useState(0);
	const handleclick = (ind) => {
		setCurrtab(ind);
	};
	return (
		<>
			<motion.div
				id="nav-container"
				initial={{ y: 500 }}
				animate={{ y: 0 }}
				transition={{ type: "tween", delay: 1.5, ease: "easeOut" }}
			>
				{navelements.map((tab, index) => (
					<div
						onClick={() => {
							handleclick(index);
						}}
					>
						{index === currtab ? tab[1] : tab[0]}
					</div>
				))}
			</motion.div>
		</>
	);
}
