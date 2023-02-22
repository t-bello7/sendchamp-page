import {UnorderedList, ListItem, Box, Container, Flex, Text, Heading } from "@chakra-ui/react";
import footerData from "../../assets/data/footer.json"

const Footer = () => {
    return (
        <Box bg="brand.700" color="white" pt={20}>
            <Container display="grid" gridGap={5} gridAutoFlow="row dense" gridTemplateColumns="repeat(2, minmax(0, 1fr))">
            {
                footerData.map( element => ( <div key={element?.id}>
                        <Heading color="gray" size="sm" fontWeight="light"> {element?.name} </Heading>
                        <UnorderedList m={0} mt={4}>
                        {
                            element.data.map(el => (
                                < ListItem key={el.id} textDecoration="none" listStyleType="none" >
                                    {el.name}
                                </ ListItem>
                            ))
                        }
                        </UnorderedList>
                    </div>
                ))
            }
            </Container>
            <Container>
                <Flex gap={5} py={12} borderBlock="1px" mt={16} borderColor="gray" flexDirection={{base: "column", md: "row"}} alignItems="center" textAlign="center">
                    {/* <img src=".." alt="" /> */}
                    <Flex>
                    <Text>
                        142, Ahmadu Bello Way, Victoria Island,  <br />
                        Lagos, Nigeria
                    </Text>
                    </Flex>
                    <Flex>
                    <Text>
                        2055 Limestone Rd STE 200-C Wilmington, <br />
                        DE 19808
                    </Text>
                    </Flex>
                </Flex>

                <Text py={5} textAlign="center" fontSize="sm" color="gray">Built with ❤️ All rights reserved</Text>
            </Container>
        </Box>
        )
}

export default Footer;