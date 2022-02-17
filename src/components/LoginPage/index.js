import {
  Image,
  Flex,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Heading,
} from "@chakra-ui/react";

const LoginPage = () => {
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
        <form>
          <FormControl>
            <FormLabel mt="32px">E-mail</FormLabel>
            <Input placeholder="E-mail" />
          </FormControl>
        </form>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
