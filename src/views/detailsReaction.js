import { Stack, VStack, Image, Text, Input, Button } from "@chakra-ui/react";
import logo1 from "../assets/github.svg"

export default function DetailsReaction() {
    const me = [{
        color: "rgba(75, 75, 75, 0.47)",
        logo: logo1
    }]
    return (
        <Stack width={"100%"} height={"100%"} alignItems={"center"} >
                <Text>Configurer votre reaction </Text>

            {me.map((item) => {
                return (
                    <>
                        <VStack width={"50%"} height={"80%"} bg={item.color} borderRadius={"4%"} justifyContent={"center"} >
                            <VStack width={"100%"} height={"100%"} justifyContent={"center"}>
                                <Image src={item.logo} width={"15%"} marginBottom={"3%"} />
                                <Input variant='solid' placeholder='enter tagada' colorScheme="rgb(255,255,255,0.9)" width={"70%"} />
                                <Input variant='solid' placeholder='enter blabla' colorScheme="rgb(255,255,255,0.9)" width={"70%"} height={"40%"} />
                                <Button variant='solid' color='#FFFFFF'>
                                    <Text textColor={item.color}>
                                        se deconnecter
                                    </Text>
                                </Button>
                            </VStack>
                        </VStack>
                    </>
                )
            })}
        </Stack>
    )
}

