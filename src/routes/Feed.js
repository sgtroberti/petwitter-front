import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useOutletContext } from "react-router-dom";
import { format, register } from "timeago.js";
import pt_BR from "timeago.js/lib/lang/pt_BR";
import NewPetweetDesktop from "../components/NewPetweetDesktop";
import Post from "../components/Post";
import instance from "../providers/client";
register("pt_BR", pt_BR);

const Feed = () => {
  const [posts, setPosts] = useState();
  const [feedPage, setFeedPage] = useState(1);
  const [feedPageCount, setFeedPageCount] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useOutletContext();

  useEffect(() => {
    console.log("feed page no useEffect que pega os posts: ", feedPage);
    setIsLoading(true);
    const request = async () => {
      const response = await instance.get(`/posts?page=${feedPage}`);
      if (!posts) {
        setPosts(response.data.posts);
        setFeedPageCount(response.data.pagination.pageCount);
        if (posts?.data.pagination.pageCount === 1) {
          setHasMore(false);
        }
      } else if (posts[0]?.id !== response.data.posts[0]?.id) {
        setPosts(posts?.concat(response.data.posts));
      }
      setIsLoading(false);
    };
    request();
    // eslint-disable-next-line
  }, [feedPage]);

  const fetchMoreData = async () => {
    setIsLoading(true);
    console.log("feed page no fetch more: ", feedPage);
    hasMore &&
      feedPage === feedPageCount &&
      setHasMore(false) &&
      setFeedPage(1);
    hasMore && setFeedPage(feedPage + 1);
    setIsLoading(false);
  };

  return (
    <Flex
      flexDirection="column"
      mb={["60px", "0"]}
      pt={["45px", "0"]}
      minH={["", "100vh"]}
      borderRight={["0", "1px solid rgba(0, 0, 0, 0.08)"]}
    >
      <Flex display={["none", "flex"]}>
        <NewPetweetDesktop />
      </Flex>

      <InfiniteScroll
        dataLength={posts?.length || 0}
        next={fetchMoreData}
        loader={<></>}
        hasMore={hasMore}
      >
        {posts &&
          posts[0]?.id &&
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
      </InfiniteScroll>
      <Box
        display={["none", "flex"]}
        h="90px"
        justifyContent={"center"}
        alignItems={"center"}
        position={["none", "relative"]}
      >
        {isLoading && (
          <Image
            src={isLoading ? "img/loading.svg" : null}
            alt=""
            w="50px"
            h="50px"
            display={["none", "flex"]}
          />
        )}
      </Box>
    </Flex>
  );
};

export default Feed;
