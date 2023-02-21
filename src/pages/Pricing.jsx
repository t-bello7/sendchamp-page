import Navbar from "../components/molecules/Navbar"
import Button from  "../components/atoms/Button"
import Jumbotron from "../components/molecules/Jumbotron"
import PricesBoxes from "../components/molecules/PricesBox"
import Footer from "../components/molecules/Footer"
import { Text, Box, Container, Heading, Flex } from "@chakra-ui/react"

const Pricing = () => {
  
    return (
        <Container>
            <Navbar />
            <Jumbotron />
            <PricesBoxes />
            <Box data-aos="fade-up">
                <Heading> Sendchamp for Startups </Heading>
                <Text fontSize={32}> Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding. </Text>
                <Button />
            </Box>
            <Box data-aos="fade-up">
                <Heading> Start building better communication experience with Sendchamp </Heading>
                <Text> Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family. </Text>
                <Flex>
                    <Button />
                    <Button />
                </Flex>
            </Box>
            <Footer />
        </Container>
    )
}

export default Pricing;