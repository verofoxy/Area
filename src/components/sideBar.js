import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Stack, HStack } from '@chakra-ui/react'
import logo from "../assets/AREA.svg"
import Service from "../views/services"
import Areas from "../views/areas"
import Settings from "../views/settings"

export default function SlideBar() {
    return (
        <Tabs defaultIndex={1} orientation="vertical" colorScheme={"whiteAlpha"}  >
            <Stack bg="white" width={"100%"} height={"100vh"}>
                <HStack width={"100%"} height={"100vh"}>

                    <TabList width={"20%"} height={"100vh"} bg={"#FFC2C2"} position={"relative"} alignItems={"center"}>
                        <Image width={"30%"} marginBottom={"50%"} src={logo} />
                        <Tab fontSize={25} fontWeight={'bold'} textColor={"white"}>Services</Tab>
                        <Tab fontSize={25} fontWeight={'bold'} textColor={"white"}>Areas</Tab>
                        <Tab fontSize={25} fontWeight={'bold'} textColor={"white"}>Paramettres</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Service />
                        </TabPanel>
                        <TabPanel>
                            <Areas />
                        </TabPanel>
                        <TabPanel>
                            <Settings />
                        </TabPanel>
                    </TabPanels>

                </HStack>
            </Stack>
        </Tabs>
    )
};