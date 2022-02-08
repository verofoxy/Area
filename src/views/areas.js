import { Stack, HStack, Box, Image, Text, VStack, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import React from "react";
import plus from "../assets/plus.svg"
import { SimpleGrid } from '@chakra-ui/react'

function AreasBtn(props) {

    return (
        <Stack width={"100%"} height={"100%"} >

            <SimpleGrid gap={9} width={"100%"} height={"100%"}
                spacing={3} columns={3}>
                {props.me.map((item) => {
                    return (
                        <Box bg={item.colorBox} borderRadius={"20"} width={"90%"} height={"50%"} justifyContent={"center"}>
                            <HStack width={"100%"} height={"100%"}>
                                <VStack width={"50%"} height={"100%"} marginLeft={"3%"}>
                                    <Text noOfLines={4} color={"white"} >Si</Text>
                                    <Text noOfLines={4} >{item.si} </Text>
                                </VStack>
                                <VStack width={"50%"} height={"100%"}>
                                    <Text noOfLines={4} color={"white"} >Alors</Text>
                                    <Text noOfLines={4} >{item.alors}</Text>
                                </VStack>
                            </HStack>
                        </Box>

                    )
                })
                }
            </SimpleGrid>
        </Stack>
    )
}

export default function Areas() {
    const me = [{
        key: "1",
        si: "siiiiiiiiurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populaiiiiiiiiiii1",
        alors: "taturvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populaatat",
        colorsi: "#F87E7E",
        coloralors: "rgba(59, 186, 240, 0.65)",
        colorBox: "#FF9393"
    }, {
        key: "2",
        si: "siiiiiiurvived not only so the leap into electronic typesetting, remaining essentially unchanged. It was populaiiiiiiiiiiiii2",
        alors: "tataurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populatat",
        colorsi: "rgba(236, 120, 120, 1)",
        coloralors: "rgba(246, 195, 102, 0.65)",
        colorBox: "#F6C773"
    }, {
        key: "3",
        si: "siiurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populaiii3",
        alors: "tataurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populatat",
        colorsi: "rgba(252, 163, 163, 1)",
        coloralors: "rgba(106, 220, 157, 0.65)",
        colorBox: "rgba(58, 217, 129, 0.56)"
    }, {
        key: "4",
        si: "siiiiiiiiiivurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populaiiiiiiiii4",
        alors: "tataturvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populaat",
        colorsi: "rgba(159, 157, 157, 1)",
        coloralors: "rgba(105, 187, 222, 0.65)",
        colorBox: "#ABBBF5"
    }, {
        key: "5",
        si: "siiiiiiiiiiiurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populaiiiiiiii5",
        alors: "tataurvived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was populatat",
        colorsi: "rgba(217, 206, 150, 1)",
        coloralors: "rgba(103, 187, 223, 0.65)",
        colorBox: "#A1EEFF"
    }, {
        key: "6",
        si: "siiiiiiiiiiiiiiiiiii6",
        alors: "tatatat6",
        colorsi: "rgba(252, 163, 163, 1)",
        coloralors: "rgba(105, 187, 222, 0.65)",
        colorBox: "rgba(198, 159, 238, 0.56)"
    }]
    let navigate = useNavigate();
    return (
        <Stack bg="white" width={"100%"} height={"100vh"}>
            <HStack width={"100%"} height={"100"} justifyContent={"space-between"}  >
                <Text
                    bg="#FF0080"
                    bgClip='text'
                    fontSize='3xl'
                    fontWeight='extrabold'
                >
                    Vos Areas
                </Text>
                <Button onClick={() => { navigate("/stepbar"); }} borderRadius={"50%"} height={"0%"}>
                    <Image src={plus} />
                </Button>
            </HStack>
            <AreasBtn me={me} />
        </Stack>
    )
};