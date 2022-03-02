import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Image,
  Textarea,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import styled from "styled-components";
import instance from "../providers/client";

const NewPetweetDesktop = () => {
  const [tweet, setTweet] = useState("");

  const handleChange = (event) => {
    setTweet(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const content = formData.get("petweet");
    const data = {
      content,
    };
    const response = await instance.post("/posts", data);
    console.log(response);
    window.location.reload(true);
  };

  return (
    <>
      <Flex
        h="200px"
        w="100%"
        p="34px 27px 25px 27px"
        borderBottom={"10px solid rgba(0, 0, 0, 0.08)"}
      >
        <StyledForm onSubmit={handleSubmit}>
          <Flex>
            <Image
              src="img/avatar/dogo.jpg"
              w="37px"
              h="37px"
              borderRadius="100%"
            />
            <Textarea
              ml="16px"
              variant="unstyled"
              placeholder="O que está acontecendo?"
              maxLength="140"
              onChange={handleChange}
              name="petweet"
              resize="none"
              width="100%"
            />
          </Flex>
          <Flex display="flex" alignItems="center" justifyContent={"flex-end"}>
            <Text
              color="#828282"
              fontWeight="400"
              fontSize="14px"
              lineHeight="24px"
              mr="8px"
            >
              {tweet ? tweet.length : 0}/140
            </Text>
            <Button
              colorScheme="cyan"
              boxShadow="2px 4px 4px rgba(0, 0, 0, 0.09)"
              borderRadius="10px"
              p="8px"
              color="white"
              type="submit"
            >
              Petwittar
            </Button>
          </Flex>
        </StyledForm>
      </Flex>
    </>
  );
};

const StyledForm = styled.form`
  width: 100%;
`;

export default NewPetweetDesktop;
