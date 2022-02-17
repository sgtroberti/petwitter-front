import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import PublicPage from "./routes/PublicPage";
import ProtectedPage from "./routes/ProtectedPage";

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
      800: "#424242",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
