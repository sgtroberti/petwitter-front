import { useLocation, useNavigate } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Link,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signin({ email, password });
    navigate(from, { replace: true });
  }

  /* 
  password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Deve conter 8 caracteres, uma letra maiúscula, uma minúscula e um número",
      )
*/

  return (
    <Flex flexDirection={["column", "row"]}>
      <Flex
        backgroundImage="img/login_dog.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w="100%"
        flexDirection="column"
        display={["flex", "none"]}
      >
        <Image src="img/pet_paw.svg" alt="paw" mt="46px" ml="32px" w="54px" />
        <Text
          fontSize="36px"
          fontWeight="700"
          lineHeight="49px"
          color="white"
          ml="26px"
          mt="40px"
          mb="25px"
        >
          Comece agora. Conecte-se já.
        </Text>
      </Flex>
      <Flex flexDirection="column" p="30px 32px">
        <Heading as="h3" fontWeight="600" fontSize="24px">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl pt="32px">
            <FormLabel fontSize="14px">E-mail</FormLabel>
            <Input
              name="email"
              placeholder="E-mail"
              focusBorderColor="cyan.400"
              p="8px"
            />
          </FormControl>
          <FormControl>
            <Flex alignItems="center" justifyContent="space-between" pt="32px">
              <FormLabel fontSize="14px">Senha</FormLabel>
              <Link
                color="cyan.400"
                textDecoration="underline"
                fontSize="12px"
                mb="8px"
              >
                Esqueci minha senha
              </Link>
            </Flex>
            <InputGroup size="md">
              <Input
                name="password"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Senha"
                focusBorderColor="cyan.400"
                p="8px"
              />
              <InputRightElement width="4.5rem">
                <Button variant="link" color="gray.800" onClick={handleClick}>
                  {show ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            colorScheme="cyan"
            color="white"
            w="100%"
            mt="40px"
            h="40px"
          >
            Entrar
          </Button>
          <Text fontSize="md" mt="24px">
            Ainda não possui uma conta?
            <br />
            <Link
              as={LinkRouter}
              to="/sign_in"
              color="cyan.400"
              textDecoration="underline"
            >
              Cadastrar-se
            </Link>
          </Text>
        </form>
      </Flex>
      <Image p="57px 90px 10px" src="./img/logo.png" alt="logo" />
    </Flex>
  );
}

export default Login;
