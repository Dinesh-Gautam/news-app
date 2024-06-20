import React from "react";
import styles from "./skeleton.module.css";
import { cn } from "../utils/common";

const createSkeletonComponent =
  (specificClass) =>
  ({ ...props }) => {
    return <div className={cn(styles.default, specificClass)} {...props} />;
  };

const Title = createSkeletonComponent(styles.title);
const Image = createSkeletonComponent(styles.image);
const Span = createSkeletonComponent(styles.span);
const Button = createSkeletonComponent(styles.button);

const Paragraph = ({ lineCount = 3, ...props }) => {
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
            {...props}
          />
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
  Button,
};

export default Skeleton;
