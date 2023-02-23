import { Heading, Box, Text, Flex, Badge } from "@chakra-ui/react" 
import IconBox from "../atoms/IconBox"

const Price = (props) => {
    const {name, unit, sendPrice, recievePrice } = props
    return  (
    <Flex bg="white" gap={5} flexDirection="column" px={5} py={10} border='1px' borderRadius={12} borderColor="brand.500">
        <IconBox unit={unit}/>

        <Heading
            fontWeight="semibold"
            fontSize="lg"
        > {name} </Heading>
        <Flex justify="space-between">
        <Box> 
            <Text>To make Calls</Text>
            <Text as="span"> <Text as="span" fontWeight="bold">NGN {sendPrice}</Text>/{unit}</Text>
        </Box>
        <Box>
            <Text>To make Calls</Text>

            { recievePrice ? (
                <Text as="span"> <Text as="span" fontWeight="bold">NGN {recievePrice}</Text>/{unit}</Text>
            ) : (
                <Badge as="span"
                bg="brand.900"
                color="brand.600"
                px={3}
                py={1}
                fontWeight="light"
                borderRadius="full"
                fontSize="xs"> Coming Soon</Badge>
            )}
            
        </Box>
        </Flex>
    </Flex>
)}

export default Price;