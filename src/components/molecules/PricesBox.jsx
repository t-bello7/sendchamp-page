import Price from "./Price"
import { Box, Grid } from "@chakra-ui/react"
const PricesBox = () => {
    return (
        <Grid
            mt={10}
            mb={32}
            px={8}
            gap={8}
            gridTemplateColumns={{
                base:"repeat(1, minmax(0px, 1fr))",
                md: "repeat(2, minmax(0px, 1fr))",
                lg:"repeat(3, minmax(0px, 1fr))"
                }}
            data-aos="fade-up">
            <Price />
            <Price />
            <Price />
            <Price />
            <Price />
            <Price />
        </Grid>
    )
}

export default PricesBox