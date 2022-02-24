import {
  Flex,
  Image,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PetPawIcon from "../components/PetPawnIcon";

function SignIn() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const data = { name, email, username, password };

    console.log(data);
  };

  return (
    <Flex flexDirection={["column", "row"]}>
      <Flex
        backgroundImage={["img/login_dog.png", "img/dogo_desktop.png"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w={["100%", "60%"]}
        flexDirection="column"
        justifyContent="center"
        display={"flex"}
        h={["auto", "100vh"]}
      >
        <Image
          src="img/pet_paw.svg"
          alt="paw"
          m="46px 0 44px 32px"
          w="54px"
          display={["flex", "none"]}
        />
        <Image
          display={["none", "flex"]}
          src="img/logo_desktop.png"
          p="0 180px"
        />
      </Flex>
      <Flex
        p={["30px 32px", "72px"]}
        maxW={["400px", "30%"]}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Flex flexDirection="column">
          <Flex display={["none", "flex"]} mb="26px">
            <PetPawIcon fill="#00ACC1" />
          </Flex>
          <Heading as="h3" color="gray.900" fontSize="24px" fontWeight="600">
            Cadastro
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl pt="32px">
              <FormLabel fontSize="14px">Nome</FormLabel>
              <Input
                name="name"
                type="text"
                placeholder="Nome"
                focusBorderColor="cyan.400"
                p="8px"
              />
            </FormControl>
            <FormControl pt="16px">
              <FormLabel fontSize="14px">E-mail</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                focusBorderColor="cyan.400"
                p="8px"
              />
            </FormControl>
            <FormControl pt="16px">
              <FormLabel fontSize="14px">Nome de usuário</FormLabel>
              <Input
                name="username"
                type="text"
                placeholder="Ex.: billbulldog"
                focusBorderColor="cyan.400"
                p="8px"
              />
            </FormControl>
            <FormControl>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                pt="16px"
              >
                <FormLabel fontSize="14px">Senha</FormLabel>
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
                  <Button
                    variant="unstiled"
                    h="30px"
                    outline="none"
                    color="gray.800"
                    onClick={handleClick}
                  >
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormHelperText fontSize="10px" color="gray.800" mt="4px">
                Deve conter no mínimo um número e uma letra maiúscula
              </FormHelperText>
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
              Já possui cadastro?
              <br />
              <Link
                as={LinkRouter}
                to="/login"
                color="cyan.400"
                textDecoration="underline"
              >
                Faça login
              </Link>
            </Text>
          </form>
        </Flex>
      </Flex>
      <Image
        p="0 90px 10px 90px"
        src="./img/logo.png"
        alt="logo"
        display={["flex", "none"]}
      />
    </Flex>
  );
}

const Wrapper = styled.div`
  padding: 32px;
`;

export default SignIn;
