import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import PetPawIcon from "../components/PetPawnIcon";
import instance from "../providers/client";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  username: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Deve conter 8 caracteres, uma letra maiúscula, uma minúscula e um número"
    ),
});

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await instance.post("/signup", data);
    navigate("/", { replace: true });
  };

  return (
    <Flex flexDirection={["column", "row"]}>
      <Flex
        backgroundImage={["img/login_dog.png", "img/dogo_desktop.png"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        w={["100%", "65%"]}
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
          src="img/logo_desktop.svg"
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
        <Flex flexDirection="column" w={["400px", ""]}>
          <Flex display={["none", "flex"]} mb="26px">
            <PetPawIcon fill="#00ACC1" />
          </Flex>
          <Heading as="h3" color="gray.900" fontSize="24px" fontWeight="600">
            Cadastro
          </Heading>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <FormControl pt="32px">
              <FormLabel fontSize="14px">Nome</FormLabel>
              <Input
                {...register("name")}
                name="name"
                type="text"
                placeholder="Nome"
                focusBorderColor="cyan.400"
                p="8px"
              />
              {errors.name && (
                <FormHelperText
                  w={"100%"}
                  fontSize="10px"
                  color="gray.800"
                  mt="4px"
                >
                  {errors.name.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl pt="16px">
              <FormLabel fontSize="14px">E-mail</FormLabel>
              <Input
                {...register("email")}
                name="email"
                type="email"
                placeholder="E-mail"
                focusBorderColor="cyan.400"
                p="8px"
              />
              {errors.email && (
                <FormHelperText
                  w={"100%"}
                  fontSize="10px"
                  color="gray.800"
                  mt="4px"
                >
                  {errors.email.message}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl pt="16px">
              <FormLabel fontSize="14px">Nome de usuário</FormLabel>
              <Input
                {...register("username")}
                name="username"
                type="text"
                placeholder="Ex.: billbulldog"
                focusBorderColor="cyan.400"
                p="8px"
              />
              {errors.username && (
                <FormHelperText
                  w={"100%"}
                  fontSize="10px"
                  color="gray.800"
                  mt="4px"
                >
                  {errors.username.message}
                </FormHelperText>
              )}
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
                  {...register("password")}
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
              {errors.password && (
                <FormHelperText
                  w={"100%"}
                  fontSize="10px"
                  color="gray.800"
                  mt="4px"
                >
                  {errors.password.message}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              type="submit"
              colorScheme="cyan"
              color="white"
              w="100%"
              mt="40px"
              h="40px"
            >
              Cadastrar
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
          </StyledForm>
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

const StyledForm = styled.form`
  min-width: 300px;
`;

export default SignIn;
