import { Heading, Text, Flex, Box, Select } from "@chakra-ui/react"
import { useRecoilState } from "recoil";
import { priceFilterState } from "../../state/atom";

const Jumbotron = () => {
    const [prices, setPrices] = useRecoilState(priceFilterState)
    return (
        <Flex
            textAlign="center"
            py={24}
            px={{base: 8, md: 24}}
            justifyItems="center"
            alignItems="center"
            flexDirection={{ base:"column"}} bg="brand.900">
                <Box 
                w="50%"
                gap={6}
                display="flex"
                flexDirection={{ base:"column"}}
                >
                <Heading size="2xl" fontWeight="bold"> Pricing for every business </Heading>
                <Text> No hidden fees or charges - simple & flexible pricing that fits with your business at any stage. </Text>
                <Flex flexDirection={{ base:"column", md: "row"}} alignItems="center" gap={4}>
                    <Select
                        variant='outline'
                        bg="white"
                        borderColor="brand.500"
                        borderRadius={12}
                        w="282px"
                        size="lg"
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
                        size="lg"
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
            </Box>
        </Flex>
    )
}

export default Jumbotron;