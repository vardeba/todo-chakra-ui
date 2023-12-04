import { Grid, Heading, VStack, Button, Box, Text } from "@chakra-ui/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import {
    FieldError,
    DeepMap,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";
import { useHistory } from "react-router-dom";

interface LoginFormProps {
    handleSignIn: () => void;
    errors: DeepMap<FieldValues, FieldError>;
    register: UseFormRegister<FieldValues>;
    loading: boolean;
}

export const LoginForm = ({
    handleSignIn,
    errors,
    register,
    loading,
}: LoginFormProps) => {
    const history = useHistory();

    return (
        <Grid
            onSubmit={handleSignIn}
            as="form"
            mt={["4", "4", "0", "0"]}
            w={["100%", "100%", "40%", "40%"]}
            padding="30px 15px"
            border="3px solid"
            borderColor="gray.100"
            bg="white"
            color="gray.900"
        >
            <Heading size="lg">Bem vindo de volta!</Heading>
            <VStack spacing="5" mt="6">
                <Box w="100%">
                    <Input
                        icon={FaEnvelope}
                        label="Login"
                        type="email"
                        error={errors.email}
                        placeholder="Digite seu login"
                        {...register("email")}
                    />
                    {!errors.email && (
                        <Text ml="1" mt="1" color="gray.300">
                            Exemplo: nome@email.com
                        </Text>
                    )}
                </Box>
                <Input
                    icon={FaLock}
                    label="Senha"
                    type="password"
                    error={errors.password}
                    placeholder="Digite sua senha"
                    {...register("password")}
                />
            </VStack>

            <VStack mt="4" spacing="5">
                <Button
                    isLoading={loading}
                    bg="purple.800"
                    w="100%"
                    color="white"
                    h="60px"
                    borderRadius="8px"
                    _hover={{
                        background: "purple.900",
                    }}
                    type="submit"
                >
                    Entrar
                </Button>

                <Text color="gray.400">Ainda não possui uma conta?</Text>
                <Button
                    bg="gray.100"
                    w="100%"
                    color="gray.300"
                    h="60px"
                    borderRadius="8px"
                    onClick={() => history.push("/signup")}
                    _hover={{
                        background: "gray.200",
                    }}
                >
                    Cadastrar
                </Button>
            </VStack>
        </Grid>
    );
};
