import { Center, Flex, Heading, Image, useDisclosure } from "@chakra-ui/react";
import Logo from "../../assets/logo-min.svg";
import { Menu } from "./Menu";
import { FaTh } from "react-icons/fa";
import { theme } from "../../styles/theme";

export const Header = () => {
    const { isOpen, onClose, onToggle } = useDisclosure();

    return (
        <Flex
            borderBottom="1px"
            borderColor="#f5f5f5"
            paddingX="8"
            paddingY="2"
        >
            <Flex align="center">
                <Image src={Logo} />
                <Heading ml="4" size="lg">
                    Dashboard
                </Heading>
            </Flex>

            <Center as="button" ml="auto" onClick={onToggle} fontSize="2rem">
                <FaTh color={[theme.colors.gray["300"]]} />
            </Center>

            <Menu isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
};
