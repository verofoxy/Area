import { Stack, HStack, VStack, Box, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import logo from "../assets/AREA.svg"
import { useNavigate } from 'react-router-dom'

export default function Splash() {
    let navigate = useNavigate();
    return (
        <Stack bg="#FFC2C2" width={"100%"} height={"100vh"}>
            <HStack width={"100%"} height={"100vh"}>

                <Box width={"50%"} position={"relative"}>
                    <Image position={"absolute"} width={"40%"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"} src={logo} />
                </Box>

                <VStack direction='column' width={"50%"} spacing={5}>
                    <Button color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='outline'
                        onClick={() => { navigate("/inscription"); }}
                    >
                        S'inscrire
                    </Button>

                    <Button color='#FFFFFF' borderRadius='20px' _hover={{ bg: "rgb(255,255,255,0.4)" }} colorScheme="rgb(255,255,255,0.9)" variant='outline'
                        onClick={() => { navigate("/login"); }}
                    >
                        Se connecter
                    </Button>
                </VStack>

            </HStack>
        </Stack>
    )
};