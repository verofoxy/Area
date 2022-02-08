import { HStack, Image, VStack, Tab, Tabs, TabPanels, TabPanel, TabList, Box, Text } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom'
import logo from "../assets/AREA.svg"
import Action from '../views/actions';
import Reaction from '../views/reactions';
import DetailsReaction from '../views/detailsReaction';
import DetailsAction from '../views/detailsAction';
import ConfirmArea from '../views/confirmArea';

function Tabss() {

    return (
        <Tabs variant='soft-rounded' colorScheme='purple' width={"100%"} height={"100%"}  >

            <TabList justifyContent={"center"} width={"100%"} height={"10%"} >
                <Tab width={"2%"} height={"40%"} borderRadius={"45%"} bg="pink">1</Tab>
                <Box width={"2%"} height={"2%"} marginTop={"1%"} borderRadius={"45%"} backgroundColor={"#FFC2C2"} textColor="white" />
                <Tab width={"2%"} height={"40%"} borderRadius={"45%"} bg="pink">2</Tab>
                <Box width={"2%"} height={"2%"} marginTop={"1%"} borderRadius={"45%"} backgroundColor={"#FFC2C2"} textColor="white" />
                <Tab width={"2%"} height={"40%"} borderRadius={"45%"} bg="pink">3</Tab>
                <Box width={"2%"} height={"2%"} marginTop={"1%"} borderRadius={"45%"} backgroundColor={"#FFC2C2"} textColor="white" />
                <Tab width={"2%"} height={"40%"} borderRadius={"45%"} bg="pink">4</Tab>
                <Box width={"2%"} height={"2%"} marginTop={"1%"} borderRadius={"45%"} backgroundColor={"#FFC2C2"} textColor="white" />
                <Tab width={"2%"} height={"40%"} borderRadius={"45%"} bg="pink">5</Tab>
            </TabList>

            <TabPanels width={"100%"} height={"100%"} >

                <TabPanel width={"100%"} height={"100%"}>
                    <Action />
                </TabPanel>

                <TabPanel width={"100%"} height={"100%"}>
                    <DetailsAction />
                </TabPanel>

                <TabPanel width={"100%"} height={"100%"}>
                    <Reaction />
                </TabPanel>


                <TabPanel width={"100%"} height={"100%"}>
                    <DetailsReaction />
                </TabPanel>

                <TabPanel width={"100%"} height={"100%"} >
                    <ConfirmArea />
                </TabPanel>

            </TabPanels>

        </Tabs>
    )
}

export default function StepBar() {

    let navigate = useNavigate();
    return (

        <HStack bg="white" width={"100%"} height={"100vh"}>

            <VStack width={"20%"} height={"100vh"}  >
                <Tabs width={"100%"} height={"100%"} defaultIndex={1} orientation="vertical" colorScheme={"whiteAlpha"}  >
                    <TabList bg={" #FFC2C2"} boxShadow='2xl' position={"relative"} alignItems={"center"}>
                        <Image width={"30%"} marginBottom={"50%"} src={logo} />
                        <Tab textColor={"white"} fontSize={25} fontWeight={'bold'} onClick={() => { navigate("/slideBar"); }}>Services</Tab>
                        <Tab textColor={"white"} fontSize={25} fontWeight={'bold'} onClick={() => { navigate("/slideBar"); }}>Areas</Tab>
                        <Tab textColor={"white"} fontSize={25} fontWeight={'bold'} onClick={() => { navigate("/slideBar"); }}>Paramettres</Tab>
                    </TabList>
                </Tabs>
            </VStack>

            <VStack width={"100%"} height={"100%"}>
                <Tabss />
            </VStack>
        </HStack>
    )
};