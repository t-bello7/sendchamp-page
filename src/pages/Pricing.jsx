import { Text, Box, Container, Heading, Flex, Button } from "@chakra-ui/react"
import Navbar from "../components/molecules/Navbar"
import Jumbotron from "../components/molecules/Jumbotron"
import PricesBoxes from "../components/molecules/PricesBox"
import Footer from "../components/molecules/Footer"

const Pricing = () => {
  
    return (
        <>
            <Navbar />
            <Jumbotron />
            <PricesBoxes />
            <Box data-aos="fade-up" bg="brand.900" pt={10} pb={20}>
                <Container textAlign="center">
                    <Flex flexDirection="column" gap={10}>
                        <Heading> Sendchamp for Startups </Heading>
                        <Text> Apply for $1,000 in credits, if you are a startup that is less than 3 years old with less than $500k in total funding. </Text>
                        <Button colorScheme='blue'> Apply now </Button>
                    </Flex>
                </Container>
            </Box>
            <Box data-aos="fade-up"  pt={10} pb={20}>
                <Container textAlign="center" >
                    <Flex flexDirection="column" gap={10}>
                        <Heading> Start building better communication experience with Sendchamp </Heading>
                        <Text> Access a platform that is modernizing communications and making it possible for your customers to communicate with your business the same way they do with their friends and family. </Text>
                        <Flex justify="center" gap={2}>
                            <Button colorScheme='blue'> Start for free </Button>
                            <Button colorScheme='blue'> Talk to Sales </Button>
                        </Flex>
                    </Flex>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Pricing;