import { Stack, VStack, HStack, Text, Image, Button } from '@chakra-ui/react'
import React from "react";
import logo1 from "../assets/github.svg"
import logo2 from "../assets/youtube.svg"

export default function ConfirmArea() {
    const me = [{
        action: {
            logo: logo1,
            color: "rgba(75, 75, 75, 0.47)",
            description: "bldnhgrhtoerthserthzeruthzreih"
        },
        reaction: {
            logo: logo2,
            color: "rgba(254, 129, 129, 1)",
            description: "fjjd,qsdjfneklnfrnrhprj"
        },
        nameofarea: "beanos"

    }]
    return (
        <Stack width={"100%"} height={"100%"} alignItems={"center"}>
                <Text>confirmer votre Area</Text>
            {me.map((item) => {
                return (
                    <>
                        <VStack width={"50%"} height={"80%"} bg="pink" borderRadius={"20"} justifyContent={"center"} >
                            <Text fontSize={33} >si</Text>
                            <VStack backgroundColor={item.action.color} borderRadius={"20"} width={"50%"} height={"20%"} >
                                <Image src={item.action.logo} />
                                <HStack width={"100%"} height={"100%"} justifyContent={"center"}>
                                    <Text>{item.action.description}</Text>
                                </HStack>
                            </VStack>

                            <Text fontSize={33} >alors</Text>
                            <VStack backgroundColor={item.reaction.color} borderRadius={"20"} width={"50%"} height={"20%"} >
                                <Image src={item.reaction.logo} />
                                <HStack width={"100%"} height={"100%"} justifyContent={"center"}>
                                    <Text>{item.reaction.description}</Text>
                                </HStack>
                            </VStack>

                            <VStack>
                                <Button variant='solid' color='#FFFFFF' marginTop={"20%"}>
                                    <Text textColor="pink">
                                        se deconnecter
                                    </Text>
                                </Button>
                            </VStack>
                        </VStack>
                    </>
                )
            })
            }
        </Stack>
    )
}
