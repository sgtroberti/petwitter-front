import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { useRef } from "react";

const NewPetweet = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
            <Button
              colorScheme="cyan"
              boxShadow="2px 4px 4px rgba(0, 0, 0, 0.09)"
              borderRadius="10px"
              p="8px"
              color="white"
            >
              Petwittar
            </Button>
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
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NewPetweet;
