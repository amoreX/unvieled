"use client";

import { useState } from "react";
import "./Home/Home.scss";
import { motion } from "framer-motion";
import Title from "./Home/Title";
import { connectdb } from "../Backend/controllers/connectdb";
export default function Home() {
	connectdb();
	return (
		<div id="home-container">
			<Title />
		</div>
	);
}
