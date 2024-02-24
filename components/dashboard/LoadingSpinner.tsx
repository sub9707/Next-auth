import React from "react";
import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden bg-black">
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
