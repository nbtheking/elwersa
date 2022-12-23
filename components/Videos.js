import React from "react";
import styles from "../styles/Home.module.css";

const Videos = ({ data }) => {
  return (
    <div className={styles.yourvideo}>
          <iframe width="100%" height="100%" src={data.url} />
    </div>
  );
};

export default Videos;
