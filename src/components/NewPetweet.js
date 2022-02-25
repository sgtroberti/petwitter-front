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
import instance from "../providers/client";

const NewPetweet = () => {
  const [tweet, setTweet] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        _active={{ backgroundColor: "none" }}
        _focus={{ outline: "none" }}
        variant="unstyled"
        position="fixed"
        left="calc(100% - 72px)"
        top="calc(100vh - 78px)"
        w="56px"
        h="56px"
      >
        <Image src="img/addPost.png" alt="addPost" />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="bottom"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent h="96vh">
          <form onSubmit={handleSubmit}>
            <DrawerHeader display="flex" justifyContent="space-between" p="8px">
              <Button
                fontWeight="300"
                variant="unstyled"
                outline="none"
                onClick={onClose}
                p="8px"
              >
                Cancelar
              </Button>
              <Flex display="flex" alignItems="center">
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
            </DrawerHeader>

            <DrawerBody p="6px 16px" display="flex">
              <Image
                src="img/avatar/dogo.jpg"
                w="37px"
                h="37px"
                borderRadius="100%"
              />
              <Textarea
                ml="8px"
                variant="unstyled"
                placeholder="O que está acontecendo?"
                h="100%"
                maxLength="140"
                onChange={handleChange}
                name="petweet"
              />
            </DrawerBody>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NewPetweet;
