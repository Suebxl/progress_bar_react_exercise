import React from "react";
import "./styles.css";

export default function ProgressBar({ children, inputWidth }) {
  const styles = { width: `${inputWidth}%`, backgroundColor: "purple" };
  return (
    <div className="bar">
      <div className="inner-bar" style={styles}>
        {children}
      </div>
    </div>
  );
}
