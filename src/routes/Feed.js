import { useEffect, useState } from "react";
import Post from "../components/Post";
import instance from "../providers/client";
import { format, register } from "timeago.js";
import pt_BR from "timeago.js/lib/lang/pt_BR";
register("pt_BR", pt_BR);

const Feed = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const request = async () => {
      const response = await instance.get("/posts");
      setPosts(response.data);
    };
    request();
  }, []);

  return (
    <>
      {posts &&
        posts.map((el) => {
          return (
            <Post
              key={el.id}
              image={el.author.profile.avatar_url || "/img/avatar/dogo.jpg"}
              name={el.author.name}
              url={`@${el.author.username}`}
              time={format(el.created_at, "pt_BR")}
              post={el.content}
            />
          );
        })}
    </>
  );
};

export default Feed;
