import React from "react";
import styles from "./skeleton.module.css";
import { cn } from "../utils/common";

const title = () => {
  return <div className={cn(styles.default, styles.title)}></div>;
};

const image = () => {
  return <div className={cn(styles.default, styles.image)}></div>;
};

const span = () => {
  return <div className={cn(styles.default, styles.span)}></div>;
};

const paragraph = ({ lineCount = 4 }) => {
  return Array.from(lineCount).map((_, i) => {
    const isLast = i === lineCount - 1;
    return (
      <div
        key={i}
        className={cn(styles.default, styles.paragraph, isLast && styles.half)}
      ></div>
    );
  });
};

const Skeleton = {
  title,
  paragraph,
  image,
  span,
};

export default Skeleton;
