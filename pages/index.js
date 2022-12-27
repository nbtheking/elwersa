// import Image from 'next/image'
import Videos from "../components/Videos";
import { Posts } from "../components/Post";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {Posts &&
        Posts.map((item) => (
          <div key={item.id} className={styles.myvideos}>
            <Videos data={item} />
          </div>
        ))}
    </div>
  );
}
