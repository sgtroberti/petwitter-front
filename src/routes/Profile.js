import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { format as dateFns } from "date-fns";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation, useOutletContext } from "react-router-dom";
import { format } from "timeago.js";
import Post from "../components/Post";
import instance from "../providers/client";

const Profile = () => {
  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  const [foundProfile, setFoundProfile] = useState();
  const [filteredPosts, setFilteredPosts] = useState();
  const [page, setPage] = useState(-1);
  const [pageCount, setPageCount] = useState();
  const [hasMore, setHasMore] = useState(true);
  const query = useQuery();
  const [isLoading, setIsLoading] = useOutletContext();

  useEffect(() => {
    console.log("profile page no useEffect que pega o usuário: ", page);
    setIsLoading(true);
    const user = query.get("user");
    const request = async () => {
      const response = await instance.get(`/users?user=${user || "self"}`);
      setFoundProfile(response.data.foundUser);
    };
    request();
    setPage(page + 1);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("profile page no useEffect que pega os posts: ", page);
    setIsLoading(true);
    if (foundProfile) {
      const request = async () => {
        const response = await instance.get(
          `/posts?id=${foundProfile.id}&page=${page}`
        );

        if (!filteredPosts) {
          setFilteredPosts(response.data.posts);
          setPageCount(response.data.pagination.pageCount);
          if (response?.data.pagination.pageCount === 1) {
            setHasMore(false);
          }
        } else if (filteredPosts[0]?.id !== response.data.posts[0]?.id) {
          setFilteredPosts(filteredPosts?.concat(response.data.posts));
        }
        setIsLoading(false);
      };
      request();
    }
  }, [page, foundProfile]);

  const fetchMoreData = async () => {
    setIsLoading(true);
    hasMore && page === pageCount && setHasMore(false) && setPage(1);
    hasMore && setPage(page + 1);
    setIsLoading(false);
  };

  return (
    <Flex
      flexDirection={["column"]}
      w="100%"
      mb={["60px", "0"]}
      border={["", "1px solid rgba(0, 0, 0, 0.08)"]}
    >
      <Box>
        <Image
          src={
            (foundProfile && foundProfile.profile.bg_url) ||
            "img/background-profile.png"
          }
          w="100%"
        />
        <Image
          src={
            (foundProfile && foundProfile.profile.avatar_url) ||
            "img/avatar/dogo.jpg"
          }
          borderRadius="100%"
          border="4px solid #FFFFFF"
          w="73px"
          h="73px"
          position="relative"
          mt="-26px"
          left="16px"
        />
      </Box>
      <Box p="16px">
        <Text
          fontSize="22px"
          fontWeight="bold"
          color="#141619"
          lineHeight="30px"
          letterSpacing="-0.3px"
        >
          {foundProfile && foundProfile.name}
        </Text>
        <Text pt="4px" lineHeight="22px" letterSpacing="-0.3px" color="#687684">
          @{foundProfile && foundProfile.username}
        </Text>
        <Text
          pt="12px"
          lineHeight="21px"
          letterSpacing="-0.3px"
          color="#424242"
        >
          {foundProfile && foundProfile.profile.bio}
        </Text>
        <Text display="flex" alignItems="center" pt="12px">
          <Image src="img/calendarIcon.png" w="14.5px" h="14.5px" mr="4px" />
          Joined{" "}
          {foundProfile &&
            dateFns(new Date(foundProfile.createdAt), "MMMM yyyy")}
        </Text>
      </Box>
      <Box
        w="90px"
        ml="16px"
        p="18px 0 7px 0"
        borderBottom="3px solid #00ACC1"
        borderRadius="4px"
      >
        <Text
          color="gray.800"
          fontWeight="600"
          fontSize="16px"
          lineHeight="22px"
          textAlign="center"
        >
          Petposts
        </Text>
      </Box>

      <InfiniteScroll
        dataLength={filteredPosts?.length || 0}
        next={fetchMoreData}
        loader={<></>}
        hasMore={hasMore}
      >
        {filteredPosts &&
          filteredPosts[0]?.id &&
          filteredPosts.map((el) => {
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

export default Profile;
