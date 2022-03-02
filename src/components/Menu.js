import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

const Menu = () => {
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
        p="16px"
      >
        <Image src="./img/layout/burger_button.svg" alt="menu" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            flexDir="column"
            pt="40px"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="img/avatar/dogo.jpg"
              borderRadius="100%"
              w="56px"
              h="56px"
              mb="40px"
            />
            <Link
              _focus={{
                color: "#00ACC1",
                borderLeft: "2px solid #00ACC1",
                textDecoration: "none",
                backgroundColor: "#e5f7f9",
              }}
              w="100%"
              textAlign="center"
              textDecoration="none"
              as={LinkRouter}
              to="/"
              p="4px"
              mb="8px"
            >
              Home
            </Link>
            <Link
              _focus={{
                color: "#00ACC1",
                borderLeft: "2px solid #00ACC1",
                textDecoration: "none",
                backgroundColor: "#e5f7f9",
              }}
              w="100%"
              textAlign="center"
              textDecoration="none"
              as={LinkRouter}
              to="/user"
              p="4px"
              mb="8px"
            >
              Meu perfil
            </Link>
            <Link
              _focus={{
                color: "#00ACC1",
                borderLeft: "2px solid #00ACC1",
                textDecoration: "none",
                backgroundColor: "#e5f7f9",
              }}
              w="100%"
              textAlign="center"
              textDecoration="none"
              as={LinkRouter}
              to="/"
              p="4px"
              mb="8px"
            >
              Configurações
            </Link>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
