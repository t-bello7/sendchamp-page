import Input from "../atoms/Input"
import { Heading, Text, Flex } from "@chakra-ui/react"

const Jumbotron = () => {
    return (
        <Flex flexDirection={{ base:"column"}}>
        <Heading> Pricing for every business </Heading>
        <Text> No hidden fees or charges - simple & flexible pricing that fits with your business at any stage. </Text>
        <Flex flexDirection={{ base:"column", md: "row"}}>
            <Input />
            <Input />
        </Flex>
        </Flex>
    )
}

export default Jumbotron;