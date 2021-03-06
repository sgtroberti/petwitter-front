import { Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Post = ({ image, name, url, time, post }) => {
  return (
    <Flex p="20px 16px" borderBottom={"1px solid #EEEEEE"}>
      <Image
        src={image}
        alt="avatar"
        borderRadius="100%"
        width="48px"
        height="48px"
        mr="8px"
      />
      <Flex flexDirection="column">
        <Flex flexDirection="row" alignItems="end">
          <Text
            color="gray.600"
            fontSize="14px"
            mr="4px"
            fontWeight="bold"
            letterSpacing="-0.261081px"
          >
            <Link to={`profile?user=${url.replace(/^./, "")}`}>{name}</Link>
          </Text>
          <Text
            color="gray.600"
            fontSize="12px"
            letterSpacing="-0.261081px"
            fontWeight="300"
            mr="4px"
          >
            {url} • {time}
          </Text>
        </Flex>
        <Text
          color="#141619"
          letterSpacing="-0.261081px"
          fontSize="14px"
          lineHeight="18px"
        >
          {post}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Post;
