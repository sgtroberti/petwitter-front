import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";
import SignIn from "./routes/SignIn";
import Feed from "./routes/Feed";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    text: "Open Sans",
  },
  colors: {
    cyan: {
      400: "#00ACC1",
    },
    gray: {
      600: "#757575",
      800: "#424242",
      900: "#212121",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route path="/" element={<PublicPage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/protected" element={<ProtectedPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
