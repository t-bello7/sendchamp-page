import {
    UnorderedList,
    ListItem,
    Box,
    Container,
    Flex,
    Text,
    Heading,
    Grid } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import footerData from "../../assets/data/footer.json"
import { ReactComponent as NigImg } from "../../assets/images/nig.svg"
import { ReactComponent as UsaImg } from "../../assets/images/usa.svg"
import { ReactComponent as SendChampImg } from "../../assets/images/sendchamp-white.svg"


const Footer = () => {
    return (
        <Box bg="brand.700" color="white" pt={20}>
            <Box display="grid" gridGap={5} gridAutoFlow="row dense"
                justifyContent="center"
                px={{base:8, md:32}} 
                gridTemplateColumns={{ base:"repeat(2, minmax(0, 1fr))" ,md:"repeat(auto-fill, 186px)"}}>
            {
                footerData.map( element => (
                    <div key={element?.id}>
                        <Heading color="gray" size="sm" fontWeight="light"> {element?.name} </Heading>
                        <UnorderedList m={0} mt={4}>
                        {
                            element.data.map(el => (
                                < ListItem key={uuidv4()} textDecoration="none" listStyleType="none">
                                    {el.name}
                                </ ListItem>
                            ))
                        }
                        </UnorderedList>
                    </div>
                ))
            }
            </Box>
            <Box px={{base:8, md:32}}>
                <Flex
                gap={5}
                py={12}
                borderBlock="1px"
                mt={16}
                borderColor="gray"
                flexDirection={{base: "column", md: "row"}}
                alignItems="center"
                justifyContent="center"
                textAlign={{ base:"center" , md:"start" }}>
                    <SendChampImg />
                    <Flex justifyContent={{ base: "center", md:"start"}}>
                    <NigImg />
                    <Text ml={4}>
                        142, Ahmadu Bello Way, Victoria Island,  <br />
                        Lagos, Nigeria
                    </Text>
                    </Flex>
                    <Flex alignItems="center">
                        <UsaImg />
                        <Text ml={4}>
                            2055 Limestone Rd STE 200-C Wilmington, <br />
                            DE 19808
                        </Text>
                    </Flex>
                </Flex>
                <Text py={5} textAlign="center" fontSize="sm" color="gray">Built with ❤️ by Tbello All rights reserved</Text>
            </Box>
        </Box>
        )
}

export default Footer;