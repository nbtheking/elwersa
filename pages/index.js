import { useEffect, useState } from "react";
import { db } from "../firebase";
import Link from "next/link";
import MyImage from "../components/MyImage";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "episodes"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
          console.log(doc.data());
        });
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mx-10 md:mx-20 pt-[100px] ">
      {data &&
        data.map((item) => (
          <Link href={`/${item.id}`} key={item.id}>
            <MyImage data={item} />
          </Link>
        ))}
    </div>
  );
}
