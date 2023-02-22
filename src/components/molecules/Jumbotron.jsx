import Input from "../atoms/Input"
import { Heading, Text, Flex, Box, Container, Select } from "@chakra-ui/react"

const Jumbotron = () => {
    return (
        <Flex textAlign="center" py={24} px={8} justifyItems="center" alignItems="center" flexDirection={{ base:"column"}} bg="brand.900" gap={6}>
                {/* <Container> */}
                <Heading size="xl" fontWeight="bold"> Pricing for every business </Heading>
                <Text> No hidden fees or charges - simple & flexible pricing that fits with your business at any stage. </Text>
                <Flex flexDirection={{ base:"column", md: "row"}} alignItems="center" gap={4}>
                    <Select variant='outline' bg="white" borderColor="brand.800" borderRadius={12}  placeholder='Nigeria' w="282px">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Select variant='outline' bg="white" borderColor="brand.800" borderRadius={12} placeholder='NGN' w="282px">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                </Flex>
            {/* </Container> */}
        </Flex>
    )
}

export default Jumbotron;