import Videos from "../components/Videos";
import { useEffect, useState } from "react";
import MyImage from "../components/MyImage";
import {db} from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";

export default function Try() {
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
          <Link href={`http://localhost:3000/${item.id}`} key={item.id}>
            <MyImage data={item} />
          </Link>
        ))}
    </div>
  );
}
