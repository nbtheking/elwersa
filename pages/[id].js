import Posts from "../components/Post";
import { useRouter } from "next/router";
import MyVideos from "../components/Videos";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [singleData, setSingleData] = useState({});
  useEffect(() => {
    const docRef = doc(db, "episodes", id);
    const fetchSingleData = async () => {
      try {
        const docSnap = await getDoc(docRef);
        setSingleData(docSnap.data());
      } catch (error) {
        console.log("No such document!");
      }
    };
    fetchSingleData();
  }, []);
  return (
    <div className=" flex pt-[100px] md:pt-[200px] w-full h-full items-center justify-center">
      <MyVideos data={singleData} />
    </div>
  );
};
export default Details;
