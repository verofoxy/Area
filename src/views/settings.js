import { Stack, HStack, Button, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Text } from '@chakra-ui/react'
import React from "react";

export default function Settings() {
    let navigate = useNavigate();

    return (
        <Stack bg="white" width={"100%"} height={"100vh"}>
            <HStack width={"100%"} height={"100"}>
                <Text
                    bg="#FF0080"
                    bgClip='text'
                    fontSize='3xl'
                    fontWeight='extrabold'
                >
                    Paramettres
                </Text>
            </HStack>

            <VStack width={"20%"} justifyContent={"flex-start"} >

                <Button color='white' bg="#FED7E2" colorScheme="pink" variant='solid'
                    _hover={{ bg: "Pink" }} marginBottom={"10%"}
                    onClick={() => { navigate("/forgotpwd"); }}
                >
                    Changer le mot de passe
                </Button>


                <Button color='white' bg="#FED7E2" colorScheme="pink" variant='solid'
                    _hover={{ bg: "Pink" }} marginBottom={"10%"}
                    onClick={() => { navigate("/login"); }}
                >
                    se deconnecter
                </Button>
            </VStack>
        </Stack>
    )
};