import { Stack, HStack, VStack, Box, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from "../assets/AREA.svg"
import { useNavigate } from 'react-router-dom'
import { Input, Text } from '@chakra-ui/react'
import React from 'react';

export default function Login() {
    let navigate = useNavigate();
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Stack bg="#FFC2C2" width={"100%"} height={"100vh"}>
            <HStack width={"100%"} height={"100vh"}>

                <Box width={"50%"} position={"relative"} >
                    <Image position={"absolute"} width={"40%"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} src={logo} />
                </Box>

                <VStack direction='column' spacing={5} width={"50%"} alignItems={"center"} >
                    <Text color="white" fontSize={"50"}>Connexion</Text>
                    <Input variant='filled' placeholder='Mail' _hover={{ bg: "#FFFFFF", opacity: "80%" }} colorScheme="rgb(255,255,255,0.9)" width={"40%"} />

                    <Stack width={"100%"} height={"100%"} direction={"row"} justifyContent={"center"} alignItems={"center"} >
                        <Input ml="6%" type={show ? 'text' : 'password'} variant='filled' placeholder='Mot de passe' _hover={{ bg: "rgb(255,255,255,0.8)" }} colorScheme="rgb(255,255,255,0.9)" width={"40%"} />
                        <Button h='30%' w={"5%"} size='sm' onClick={handleClick}>
                            {show ? 'Hide' : 'Show'}
                        </Button>
                    </Stack>

                    <Button color="white" variant='link' fontSize={"10"} onClick={() => { navigate("/forgotpwd"); }}>
                        J'ai oublié mon mot de passe
                    </Button>
                    <Button color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='solid'
                        onClick={() => { navigate("/slidebar"); }}
                    >
                        se connecter
                    </Button>
                    <Button color="white" variant='link' onClick={() => { navigate("/inscription"); }}>
                        Je n'ai pas deja de compte
                    </Button>
                    <Text color="white">____________ou ___________</Text>
                    <Button marginTop={"300%"} color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='outline'>
                        Se connecter avec Google
                    </Button>
                    <Button marginTop={"300%"} color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='outline'>
                        Se connecter avec Twitter
                    </Button>
                </VStack>
            </HStack>
        </Stack>
    )
};