import { Box, Link } from "@chakra-ui/react";
import {
  Link as LinkRouter,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Box display="flex" justifyContent={"center"}>
      <Link
        fontWeight="700"
        fontSize="16px"
        lineHeight="24px"
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        p="12px"
        textAlign="center"
        backgroundColor={match ? "#e5f7f9" : "transparent"}
        as={LinkRouter}
        w="100%"
        color={match ? "#00ACC1" : "#424242"}
        borderLeft={match ? "2px solid #00ACC1" : "none"}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && ""} */}
    </Box>
  );
};

export default CustomLink;
