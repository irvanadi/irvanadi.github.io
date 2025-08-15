"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedElementProps {
	children: ReactNode;
	className?: string;
	animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn";
	delay?: number;
	duration?: number;
}

const animations = {
	fadeInUp: {
		initial: { opacity: 0, y: 60 },
		animate: { opacity: 1, y: 0 },
	},
	fadeInLeft: {
		initial: { opacity: 0, x: -60 },
		animate: { opacity: 1, x: 0 },
	},
	fadeInRight: {
		initial: { opacity: 0, x: 60 },
		animate: { opacity: 1, x: 0 },
	},
	scaleIn: {
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
	},
};

export const AnimatedElement = ({
	children,
	className,
	animation = "fadeInUp",
	delay = 0,
	duration = 0.6,
}: AnimatedElementProps) => {
	const { ref, isInView } = useScrollAnimation(0.1, true);

	const selectedAnimation = animations[animation];

	return (
		<motion.div
			ref={ref}
			initial={selectedAnimation.initial}
			animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
			transition={{
				duration,
				ease: "easeOut",
				delay: isInView ? delay : 0,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export const AnimatedSection = ({
	children,
	className,
	stagger = false,
	delay = 0,
	id,
}: {
	children: ReactNode;
	className?: string;
	stagger?: boolean;
	delay?: number;
	id?: string;
}) => {
	const { ref, isInView } = useScrollAnimation(0.1, true);

	return (
		<motion.section
			ref={ref}
			id={id}
			initial="initial"
			animate={isInView ? "animate" : "initial"}
			variants={
				stagger
					? {
							initial: {},
							animate: {
								transition: {
									staggerChildren: 0.1,
									delayChildren: delay,
								},
							},
					  }
					: undefined
			}
			className={className}
		>
			{children}
		</motion.section>
	);
};
