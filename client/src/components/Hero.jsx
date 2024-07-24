import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Dots from "./Dots";
import GradientEdges from "./GradientEdges";
import Side1 from "./Side1";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const Hero = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((prev) => (prev === components.length - 1 ? 0 : prev + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < components.length - 1) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 h-[70vh]">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing w-full"
      >
        <CarouselContent imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const CarouselContent = ({ imgIndex }) => {
  return (
    <>
      {components.map((Component, idx) => (
        <motion.div
          key={idx}
          animate={{ scale: imgIndex === idx ? 1 : 0.85 }}
          transition={SPRING_OPTIONS}
          className="w-full shrink-0"
        >
          {Component}
        </motion.div>
      ))}
    </>
  );
};

const components = [<Side1 />, <Side1 />, <Side1 />];

export default Hero;
