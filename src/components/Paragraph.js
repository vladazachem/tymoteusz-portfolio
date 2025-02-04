"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Paragraph({ paragraph }) {
  useEffect(() => {
    const disableCopy = (e) => e.preventDefault();
    const disableContextMenu = (e) => e.preventDefault();

    document.addEventListener("copy", disableCopy);
    document.addEventListener("cut", disableCopy);
    document.addEventListener("contextmenu", disableContextMenu);

    return () => {
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("cut", disableCopy);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="text-p py-2 leading-7"
    >
      {paragraph.content}
    </motion.p>
  );
}
