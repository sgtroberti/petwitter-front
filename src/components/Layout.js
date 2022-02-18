import { Link, Outlet } from "react-router-dom";
import { Box, Button, Image } from "@chakra-ui/react";

import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <div>
      <Box
        h="48px"
        display="flex"
        boxShadow="0px 2px 4px rgba(33, 33, 33, 0.2)"
      >
        <Button
          _active={{ backgroundColor: "none" }}
          _focus={{ outline: "none" }}
          variant="unstyled"
          position="fixed"
          p="16px"
        >
          <Image src="./img/layout/burger_button.svg" alt="menu" />
        </Button>
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

      <Outlet />
    </div>
  );
}

export default Layout;
