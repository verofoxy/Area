import { Stack, HStack, Text, Box, Image, SimpleGrid } from '@chakra-ui/react'
import React from "react";
import logo1 from "../assets/github.svg"
import logo2 from "../assets/youtube.svg"
import logo3 from "../assets/linkedin.svg"

export default function Reaction() {
    const me = [{
        key: "1",
        action: "GitHub Push sur un repo",
        logo: logo1,
        color: "rgba(75, 75, 75, 0.47)"

    }, {
        key: "2",
        action: "YouTube Nouveau commentaire",
        logo: logo2,
        color: "rgba(254, 129, 129, 1)"

    }, {
        key: "3",
        action: "LinkedIn Notif",
        logo: logo3,
        color: "rgba(37, 151, 200, 0.65)"

    }]
    return (
        <Stack width={"100%"} height={"100%"}>
                <Text>Choisir votre reaction</Text>
            <SimpleGrid gap={0} width={"100%"} height={"100%"}
                spacing={1} columns={3} marginLeft={"5%"}>
                {me.map((item) => {
                    return (
                        <>
                            <Box backgroundColor={item.color} borderRadius={"20"} width={"50%"} height={"20%"} >
                                <Image src={item.logo} />
                                <HStack width={"100%"} height={"100%"} justifyContent={"center"}>
                                    <Text>{item.action}</Text>
                                </HStack>
                            </Box>
                        </>
                    )
                })
                }
            </SimpleGrid>

        </Stack>
    )
}

