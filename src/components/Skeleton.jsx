import React from "react";
import styles from "./skeleton.module.css";
import { cn } from "../utils/common";

const Title = () => {
  return <div className={cn(styles.default, styles.title)}></div>;
};

const Image = () => {
  return <div className={cn(styles.default, styles.image)}></div>;
};

const Span = () => {
  return <div className={cn(styles.default, styles.span)}></div>;
};

const Paragraph = ({ lineCount = 3 }) => {
  return (
    <div className={styles.paragraphContainer}>
      {Array.from({ length: lineCount }).map((_, i) => {
        const isLast = i === lineCount - 1;
        return (
          <div
            key={i}
            className={cn(
              styles.default,
              styles.paragraph,
              isLast && styles.half
            )}
          ></div>
        );
      })}
    </div>
  );
};

const Skeleton = {
  Title,
  Image,
  Span,
  Paragraph,
};

export default Skeleton;
