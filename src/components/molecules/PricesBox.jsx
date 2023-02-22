import { Grid } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from "recoil"
import { filteredPriceState } from "../../state/selector"
import Price from "./Price"

const PricesBox = () => {
    const [price] = useRecoilValue(filteredPriceState);
    return (
        <Grid
            mt={10}
            mb={32}
            px={8}
            gap={8}
            gridTemplateColumns="repeat(auto-fill, minmax(0, 25rem))"
            data-aos="fade-up">
         
            {
                price.prices.map( element => (
                    <Price key={element.id}
                    name={element.name}
                    unit={element.unit} 
                    sendPrice={element.sendPrice}
                    recievePrice={element.recievePrice}
                    />
                ))
            }
        </Grid>
    )
}

export default PricesBox