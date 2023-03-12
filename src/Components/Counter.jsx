"use client";
import React, { useRef } from "react";
import { motion, animate } from "framer-motion";

export default function Counter({ from, to }) {
  const ref = useRef(null);

  return (
    <div style={{ display: "flex" }}>
      <div> ₹</div>
      <motion.div
        style={{ width: "1.5em" }}
        initial="hidden"
        whileInView="visible"
        ref={ref}
        onViewportEnter={() => {
          const controls = animate(from, to, {
            duration: 1.5,
            onUpdate(value) {
              ref.current.textContent = value.toFixed(0);
            },
          });
          return () => controls.stop();
        }}
      />
      <div style={{ fontSize: "0.4em", alignSelf: "center" }}>per KG</div>
    </div>
  );
}
