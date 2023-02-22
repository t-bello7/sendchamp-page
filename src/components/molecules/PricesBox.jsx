import Price from "./Price"
import { Box } from "@chakra-ui/react"
const PricesBox = () => {
    return (
        <Box mt={10} mb={32} px={8} data-aos="fade-up">
            <Price />
        </Box>
    )
}

export default PricesBox