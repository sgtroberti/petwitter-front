import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Image, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Menu from "./Menu";
import { Link as LinkRouter } from "react-router-dom";
import NewPetweet from "./NewPetweet";
import styled from "styled-components";
import CustomLink from "./CustomLink";

function Layout() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box w={"100%"}>
      <Flex display={["inherit", "flex"]} justifyContent="center">
        <Box
          minH={["48px", "100vh"]}
          display="flex"
          flexDirection={["row", "column"]}
          boxShadow={[
            "0px 2px 4px rgba(33, 33, 33, 0.2)",
            "0px 1px 3px rgba(33, 33, 33, 0.2)",
          ]}
          backgroundColor="white"
          width={["100%", "20%"]}
          zIndex="1"
          position={["fixed", "relative"]}
        >
          <Box display={["relative", "none"]} position={["fixed", ""]}>
            <Menu />
          </Box>

          <Image
            src="./img/layout/logo.svg"
            alt="logo"
            h={["28px", "54px"]}
            margin={["auto", "0"]}
            mt={["10px", "30px"]}
            onClick={handleClick}
          />

          <Flex display={["none", "flex"]} flexDirection="column" pt="40px">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/user">Meu Perfil</CustomLink>
            <CustomLink to="/conf">Configurações</CustomLink>
          </Flex>
        </Box>

        <Box w={["auto", "45%"]}>
          <Outlet context={[isLoading, setIsLoading]} />
        </Box>
        <Flex
          position={["fixed", "none"]}
          display={["flex", "none"]}
          top="calc(100vh - 64px)"
          alignItems="center"
          justifyContent="center"
          h="64px"
          w="100%"
          backgroundColor="white"
        >
          {isLoading && (
            <Image
              src={isLoading ? "img/loading.svg" : null}
              alt=""
              w="35px"
              h="35px"
              display={["relative", "none"]}
            />
          )}

          <Box display={["relative", "none"]}>
            <NewPetweet />
          </Box>
        </Flex>
        <Box display={["none", "flex"]} w="20%" />
      </Flex>
    </Box>
  );
}

export default Layout;
