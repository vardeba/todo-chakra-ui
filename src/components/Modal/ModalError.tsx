import {
    Box,
    Button,
    Center,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface ModalErrorProps {
    isOpen: boolean;
    onClose: () => void;
    error: string;
    secondaryText: string;
}

export const ModalError = ({
    isOpen,
    onClose,
    error,
    secondaryText,
}: ModalErrorProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="gray.800">
            <ModalHeader display="flex">
                <Center w="30px" h="30px" bg="red.600" borderRadius="5px">
                    <FaExclamation color={theme.colors.white} />
                </Center>
                <Text fontWeight="bold" ml="2">
                    Oops!
                </Text>
                <Center
                    onClick={onClose}
                    as="button"
                    ml="auto"
                    w="32px"
                    h="32px"
                    bg="red.600"
                    _hover={{ bg: "red.700" }}
                    fontSize="lg"
                    borderRadius="md"
                >
                    <FaTimes color={theme.colors.white} />
                </Center>
            </ModalHeader>
            <ModalBody color="gray.400" textAlign="center">
                <Text>
                    Ocorreu um erro! <b>{error}</b>{" "}
                </Text>
            </ModalBody>

            <ModalFooter display="column">
                <Button
                    bg="red.600"
                    color="white"
                    w="100%"
                    h="60px"
                    _hover={{ bg: "red.700" }}
                    onClick={onClose}
                >
                    Tentar novamente
                </Button>
                <Text textAlign="center" mt="4">
                    <Box
                        dangerouslySetInnerHTML={{
                            __html: secondaryText,
                        }}
                    />
                </Text>
            </ModalFooter>
        </ModalContent>
    </Modal>
);
