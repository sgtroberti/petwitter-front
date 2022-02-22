import { Flex, Box, Image, Text, Link } from "@chakra-ui/react";
import Post from "../components/Post";

const Profile = () => {
  return (
    <Flex flexDirection={["column", "row"]} w="100%">
      <Box>
        <Image src="img/background-profile.png" w="100%" />
        <Image
          src="img/avatar/dogo.jpg"
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
          Dogo, o doguinho
        </Text>
        <Text pt="4px" lineHeight="22px" letterSpacing="-0.3px" color="#687684">
          @dogo_doguinho
        </Text>
        <Text
          pt="12px"
          lineHeight="21px"
          letterSpacing="-0.3px"
          color="#424242"
        >
          GHOP - Go Horse Oriented Programming at{" "}
          <Link color="#1fb6c8">@RobertiSoftHouse</Link>
        </Text>
        <Text display="flex" alignItems="center" pt="12px">
          <Image src="img/calendarIcon.png" w="14.5px" h="14.5px" mr="4px" />
          Joined May 2022
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
      <Post
        image={"/img/avatar/dogo.jpg"}
        name={"Dogo, o Doguinho"}
        url={"@dogo_doguinho"}
        time={"2 min"}
        post={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo, error at debitis rem magnam praesentium minima quibusdam tempore officiis, aperiam neque autem. Eaque doloremque dicta repudiandae, non commodi cumque!"
        }
      />
      <Post
        image={"/img/avatar/dogo.jpg"}
        name={"Dogo, o Doguinho"}
        url={"@dogo_doguinho"}
        time={"2 min"}
        post={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo, error at debitis rem magnam praesentium minima quibusdam tempore officiis, aperiam neque autem. Eaque doloremque dicta repudiandae, non commodi cumque!"
        }
      />
      <Post
        image={"/img/avatar/dogo.jpg"}
        name={"Dogo, o Doguinho"}
        url={"@dogo_doguinho"}
        time={"2 min"}
        post={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta explicabo, error at debitis rem magnam praesentium minima quibusdam tempore officiis, aperiam neque autem. Eaque doloremque dicta repudiandae, non commodi cumque!"
        }
      />
    </Flex>
  );
};

export default Profile;
