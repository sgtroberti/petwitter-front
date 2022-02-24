import { Link, Outlet } from "react-router-dom";
import { Box, Button, Image, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Menu from "./Menu";
import { Link as LinkRouter } from "react-router-dom";
import AuthStatus from "./AuthStatus";
import NewPetweet from "./NewPetweet";
import styled from "styled-components";
import CustomLink from "./CustomLink";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box maxW={["100%", "1200px"]} margin={[0, "auto"]}>
      <Flex display={["inherit", "flex"]}>
        <Box
          h={["48px", "100vh"]}
          display="flex"
          flexDirection={["row", "column"]}
          boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
          backgroundColor="white"
          width={["100%", "35%"]}
          zIndex="1"
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
          />

          <Flex display={["none", "flex"]} flexDirection="column" pt="40px">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/profile">Meu Perfil</CustomLink>
            <CustomLink to="/conf">Configurações</CustomLink>
          </Flex>
        </Box>
        {/* <AuthStatus /> */}

        {/* <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul> */}
        <Box
          borderRight={["none", "1px solid rgba(0, 0, 0, 0.08)"]}
          h={["auto", "100vh"]}
        >
          <Outlet />
        </Box>
        <Flex
          position={["fixed", "none"]}
          display={["relative", "none"]}
          top="calc(100vh - 64px)"
          alignItems="center"
          justifyContent="center"
          h="64px"
          w="100%"
          border={["1px solid #EEEEEE", "none"]}
          backgroundColor="white"
        >
          <Image
            src={isLoading ? "img/loading.svg" : null}
            alt="loading"
            w="35px"
            h="35px"
            display={["relative", "none"]}
          />
          <Box display={["relative", "none"]}>
            <NewPetweet />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Layout;
