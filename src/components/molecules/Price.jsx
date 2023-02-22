import { Heading, Box, Text, Flex } from "@chakra-ui/react" 
import IconBox from "../atoms/IconBox"
const Price = () => {
    return  (
    <Flex gap={5} flexDirection="column" px={5} py={10} border='1px' borderRadius={12} borderColor="brand.800">
        <IconBox />

        <Heading> SMS </Heading>
        <Flex justify="space-between">
        <Box> 
            <Text>To make Calls</Text>
            <Text as="span"> <Text as="span" fontWeight="bold">NGN 217.000</Text>/sec</Text>
        </Box>
        <Box>
            <Text>To make Calls</Text>
            <Text as="span"> Coming Soon</Text>
        </Box>
        </Flex>
    </Flex>
)}

export default Price;