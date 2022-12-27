// import Image from 'next/image'
import Videos from "../components/Videos";
import { Posts } from "../components/Post";
import styles from "../styles/Home.module.css";

export default function Home() {
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3881651214880348"
    crossorigin="anonymous"
  ></script>;
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
