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

interface ModalSuccessProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
    buttonMessage: string;
    onClick: () => void;
    secondaryText: string;
}

export const ModalSuccess = ({
    isOpen,
    onClose,
    buttonMessage,
    message,
    onClick,
    secondaryText,
}: ModalSuccessProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="2" bg="white" color="gray.800">
            <ModalHeader display="flex">
                <Center w="30px" h="30px" bg="purple.500" borderRadius="5px">
                    <FaExclamation color={theme.colors.white} />
                </Center>
                <Text fontWeight="bold" ml="2">
                    Yeesss...
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

            <ModalBody>
                <Text textAlign="center">
                    <Box
                        dangerouslySetInnerHTML={{
                            __html: message,
                        }}
                    />
                </Text>
            </ModalBody>

            <ModalFooter flexDirection="column">
                <Button
                    bg="purple.500"
                    _hover={{ bg: "purple.600" }}
                    color="white"
                    w="100%"
                    h="60px"
                    onClick={onClick}
                >
                    {buttonMessage}
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
