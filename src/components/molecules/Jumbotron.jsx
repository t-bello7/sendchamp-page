import { Heading, Text, Flex, Box, Container, Select } from "@chakra-ui/react"
import { useRecoilState } from "recoil";
import { priceFilterState } from "../../state/atom";

const Jumbotron = () => {
    const [prices, setPrices] = useRecoilState(priceFilterState)
    return (
        <Flex textAlign="center" py={24} px={8} justifyItems="center" alignItems="center" flexDirection={{ base:"column"}} bg="brand.900" gap={6}>
                {/* <Container> */}
                <Heading size="xl" fontWeight="bold"> Pricing for every business </Heading>
                <Text> No hidden fees or charges - simple & flexible pricing that fits with your business at any stage. </Text>
                <Flex flexDirection={{ base:"column", md: "row"}} alignItems="center" gap={4}>
                    <Select
                        variant='outline'
                        bg="white"
                        borderColor="brand.500"
                        borderRadius={12}
                        w="282px"
                        name="base"
                        value={prices.base}
                        onChange={(e) => {
                            setPrices({ ...prices,
                                "base": e.target.value
                            })
                        }}
                    >
                        <option value='NGN'>Nigeria</option>
                        <option value='USD'>United States</option>
                        <option value='AED'>United Arab Emirates</option>
                    </Select>
                    <Select
                        variant='outline'
                        bg="white"
                        borderColor="brand.500"
                        borderRadius={12}
                        w="282px"
                        name="convert"
                        value={prices.convert}
                        onChange={(e) => {
                            setPrices({ ...prices,
                                "convert": e.target.value
                            })
                        }}
                    >
                        <option value='NGN'>NGN</option>
                        <option value='USD'>USD</option>
                        <option value='AED'>AED</option>
                    </Select>
                </Flex>
            {/* </Container> */}
        </Flex>
    )
}

export default Jumbotron;