import { Grid, Heading, Image, Text } from "@chakra-ui/react";
// import LogoSecondary from "../../assets/logo-secondary.svg";
import LogoPrimary from "../../assets/logo-primary.svg";

export const LoginInfo = () => (
    <Grid w={["100%", "100%", "50%", "50%"]} paddingRight="100px">
        <Image
            src={LogoPrimary}
            alt="doit"
            boxSize={["120px", "120px", "150px", "150px"]}
        />
        <Heading as="h1" mt="4">
            O jeito fácil, grátis
        </Heading>
        <Text w="350px">Flexível e atrativo de gerenciar</Text>
        <b>seus projetos em uma única plataforma</b>
    </Grid>
);
