import { Grid, Heading, VStack, Button, Box, Text } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Input } from "../../components/Form/Input";
import {
    FieldError,
    DeepMap,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";
// import { useHistory } from "react-router-dom";

interface SignUpData {
    handleSignUp: () => void;
    errors: DeepMap<FieldValues, FieldError>;
    register: UseFormRegister<FieldValues>;
    loading: boolean;
}

export const SignUpForm = ({
    handleSignUp,
    errors,
    register,
    loading,
}: SignUpData) => {
    // const history = useHistory();

    return (
        <Grid
            onSubmit={handleSignUp}
            as="form"
            mt={["4", "4", "0", "0"]}
            w={["100%", "100%", "40%", "40%"]}
            padding="30px 25px"
            border="3px solid"
            borderColor="gray.100"
            bg="white"
            color="gray.900"
        >
            <Heading size="lg">Crie sua conta</Heading>
            <VStack spacing="5" mt="6">
                <Input
                    icon={FaUser}
                    label="Nome"
                    type="text"
                    error={errors.name}
                    placeholder="Digite seu nome"
                    {...register("name")}
                />
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
                <Input
                    icon={FaLock}
                    label="Confirmação de senha"
                    type="password"
                    error={errors.confirm_password}
                    placeholder="Confirme sua senha"
                    {...register("confirm_password")}
                />
            </VStack>

            <Button
                isLoading={loading}
                mt="8"
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
                Finalizar cadastro
            </Button>
        </Grid>
    );
};
