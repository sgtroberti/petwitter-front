import { useLocation, useNavigate } from "react-router-dom";
import { Link as LinkRouter } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import {
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
  Link,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import PetPawIcon from "../components/PetPawnIcon";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Deve conter 8 caracteres, uma letra maiúscula, uma minúscula e um número"
    ),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const from = location.state?.from?.pathname || "/";

  async function onSubmit(data) {
    await signin(data);
    navigate(from, { replace: true });
  }

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
          mt="46px"
          ml="32px"
          w="54px"
          display={["flex", "none"]}
        />
        <Image
          display={["none", "flex"]}
          src="img/logo_desktop.svg"
          p="0 180px"
        />
        <Text
          fontSize="36px"
          fontWeight="700"
          lineHeight="49px"
          color="white"
          ml="26px"
          mt="40px"
          mb="25px"
          display={["flex", "none"]}
        >
          Comece agora. Conecte-se já.
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        p={["30px 32px", "72px"]}
        maxW={["400px", "25%"]}
        justifyContent="center"
      >
        <Flex display={["none", "flex"]} mb="26px">
          <PetPawIcon fill="#00ACC1" />
        </Flex>

        <Text
          display={["none", "flex"]}
          color="#00ACC1"
          fontWeight="700"
          fontSize="36px"
          mb="32px"
        >
          Comece agora. Conecte-se já.
        </Text>
        <Heading as="h3" fontWeight="600" fontSize="24px">
          Login
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl pt="32px">
            <FormLabel fontSize="14px">E-mail</FormLabel>
            <Input
              {...register("email")}
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
                {...register("password")}
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
            {errors.password && (
              <FormHelperText>{errors.password.message}</FormHelperText>
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
      <Image
        p="57px 90px 10px"
        src="./img/logo.png"
        alt="logo"
        display={["block", "none"]}
      />
    </Flex>
  );
}

export default Login;
