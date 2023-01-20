import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div className="pt-[100px]">
      <p>about page</p>
      <Link href="/">Go to home</Link>
    </div>
  );
};

export default about;
