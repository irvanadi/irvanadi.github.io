import { useInView } from "framer-motion";
import { useRef } from "react";

export const useScrollAnimation = (amount = 0.1, once = true) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		amount,
		once,
		margin: "-100px 0px -100px 0px",
	});

	return { ref, isInView };
};

export const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInLeft = {
	initial: { opacity: 0, x: -60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

export const fadeInRight = {
	initial: { opacity: 0, x: 60 },
	animate: { opacity: 1, x: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export const scaleIn = {
	initial: { opacity: 0, scale: 0.8 },
	animate: { opacity: 1, scale: 1 },
	transition: { duration: 0.5, ease: "easeOut" },
};
