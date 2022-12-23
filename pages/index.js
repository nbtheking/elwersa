// import Image from 'next/image'
import Videos from "../components/Videos";
import { Posts } from "../components/Post";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {Posts &&
        Posts.map((item) => (
          <Link href={"/" + item.id} key={item.id} className={styles.myvideos}>
            <Videos data={item} />
          </Link>
        ))}
    </div>
  );
}
