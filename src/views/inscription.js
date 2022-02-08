import { Stack, HStack, VStack, Box, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from "../assets/AREA.svg"
import { useNavigate } from 'react-router-dom'
import { Input, Text } from '@chakra-ui/react'

export default function Inscription() {
    let navigate = useNavigate();

    return (
        <Stack bg="#FFC2C2" width={"100%"} height={"100vh"}>
            <HStack width={"100%"} height={"100vh"}>

                <Box width={"50%"} position={"relative"}>
                    <Image position={"absolute"} width={"40%"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} src={logo} />
                </Box>

                <VStack direction='column' spacing={5} width={"50%"} >
                    <Text color="white" fontSize={"50"}>Inscription</Text>
                    <Input variant='filled' placeholder='Mail' _hover={{ bg: "rgb(255,255,255,0.8)" }} colorScheme="rgb(255,255,255,0.9)" width={"40%"} />
                    <Input variant='filled' placeholder='Mot de passe' _hover={{ bg: "rgb(255,255,255,0.8)" }} colorScheme="rgb(255,255,255,0.9)" width={"40%"} />
                    <Input variant='filled' placeholder='confirmer votre mot de passe' _hover={{ bg: "rgb(255,255,255,0.8)" }} colorScheme="rgb(255,255,255,0.9)" width={"40%"} />

                    <Button color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='solid'>
                        S'inscrire
                    </Button>
                    <Button color="white" variant='link' onClick={() => { navigate("/login"); }}>
                        J'ai deja un compte
                    </Button>
                    <Text color="white">____________ou ___________</Text>
                    <Button marginTop={"300%"} color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='outline'>
                        S'inscrire avec Google
                    </Button>
                    <Button marginTop={"300%"} color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='outline'>
                        S'inscrire avec Twitter
                    </Button>
                </VStack>
            </HStack>
        </Stack>
    )
};