import { Link, Outlet } from "react-router-dom";
import { Box, Button, Image, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Menu from "./Menu";

import AuthStatus from "./AuthStatus";
import NewPetweet from "./NewPetweet";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      <Box
        h="48px"
        display="flex"
        boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
        backgroundColor="white"
        position="fixed"
        w="100%"
      >
        <Menu />

        <Image
          src="./img/layout/logo.png"
          alt="logo"
          h="28px"
          m="auto"
          mt="10px"
        />
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
      <Box pb="48px" />
      <Outlet />
      <Flex
        position="fixed"
        top="calc(100vh - 64px)"
        alignItems="center"
        justifyContent="center"
        h="64px"
        w="100%"
        border="1px solid #EEEEEE"
        backgroundColor="white"
      >
        <Image
          src={isLoading ? "img/loading.svg" : null}
          alt="loading"
          w="35px"
          h="35px"
        />

        <NewPetweet />
      </Flex>
    </div>
  );
}

export default Layout;
