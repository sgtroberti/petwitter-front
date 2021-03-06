import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Feed from "./routes/Feed";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Settings from "./routes/Settings";
import SignIn from "./routes/SignIn";
import User from "./routes/User";

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
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/conf" element={<Settings />} />
            <Route path="/user" element={<User />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
