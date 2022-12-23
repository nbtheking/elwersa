import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <div className={styles.about}>
      <p>about page</p>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default about;
