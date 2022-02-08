import { Stack, HStack, Box, Text, Image, Button, VStack, Tab, Tabs, TabPanels, TabPanel, TabList } from '@chakra-ui/react'
import berk from "../assets/linkedin.svg"
import React from 'react';

function Slide(props) {

    return (
        <Stack width={"100%"} height={"100%"} alignItems={"center"} justifyContent={"center"} >
            <Box width={"50%"} backgroundColor={props.item.color} height={"100%"} borderRadius={"20"} boxShadow='xl' >
                <VStack width={"100%"} height={"100%"}>
                    <Image src={props.item.logo} width={"20%"} />
                    <Text fontSize={"30"} color={"white"}>{props.item.nameService}</Text>
                    <Text>{props.item.description}</Text>
                    <Button variant='solid' color='#FFFFFF'>
                        <Text textColor={"red"}>
                            se deconnecter
                        </Text>
                    </Button>
                </VStack>
            </Box>
        </Stack>
    )
}

function Tabss(props) {

    return (
        <Tabs variant='soft-rounded' colorScheme='green' width={"100%"} height={"100%"} >

            <TabPanels width={"100%"} height={"100%"}>
                {props.me.map((item) => {
                    return (
                        <TabPanel width={"100%"} height={"100%"} >
                            <Slide item={item} />
                        </TabPanel>
                    )
                })}
            </TabPanels>

            <TabList justifyContent={"center"} >
                {props.me.map((item) => {
                    return (
                        <Tab marginLeft={"1%"} bg="green"></Tab>
                    )
                })}
            </TabList>

        </Tabs>
    )
}

export default function Service() {
    const me = [
        {
            "color": "rgba(37, 151, 200, 0.65)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        },
        {
            "color": "rgba(37, 151, 200, 0.30)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        },
        {
            "color": "rgba(37, 151, 200, 1)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        }, {
            "color": "rgba(37, 151, 200, 0.23)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        },
        {
            "color": "rgba(37, 151, 200, 1)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        }, {
            "color": "rgba(37, 151, 200, 0.23)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        },
        {
            "color": "rgba(37, 151, 200, 0.23)",
            "nameService": "Linkedin",
            "subscribe": "true",
            "description": "bablaabalabalabalabLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.alab",
            "logo": berk
        },
    ]

    return (
        <Stack bg="white" width={"100%"} height={"100vh"}>
            <HStack width={"100%"} height={"20%"}>
                <Text
                    bg="#FF0080"
                    bgClip='text'
                    fontSize='3xl'
                    fontWeight='extrabold'
                >
                    Services
                </Text>
            </HStack>
            <Stack width={"100%"} height={"70%"}>

                <Tabss me={me} />
            </Stack>
        </Stack>
    )
};