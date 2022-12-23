import Posts from "../components/Post";
import { useRouter } from "next/router";
import Videos from "../components/Videos";
import VideoDetail from "../components/VideoDetail";

const Details = () => {
  const router = useRouter();
  const {id}=router.query;
  return (
    <div>
      {Posts &&
        Posts.filter((user) => user.id === id).map((item) => (
          <div>
            {/* <Videos data={user} /> */}
            <h1>{item.title}</h1>
          </div>
        ))}

      <p>{id}</p>
    </div>
  );
};
export default Details;
