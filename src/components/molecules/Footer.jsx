import { Flex, Text } from "@chakra-ui/react";
import footerData from "../../assets/data/footer.json"

const Footer = () => {
    return (
        <div>
            <div>
            {
                footerData.map( element => ( <div key={element?.id}>
                        <h2> {element?.name} </h2>
                        <ul>
                        {
                            element.data.map(el => (
                                <li key={el.id}>
                                    {el.name}
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                ))
            }
            </div>
            <Flex>
                {/* <img src=".." alt="" /> */}
                <Flex>
                <Text>
                    142, Ahmadu Bello Way, Victoria Island,  <br />
                    Lagos, Nigeria
                </Text>
                </Flex>
                <Flex>
                <Text>
                    2055 Limestone Rd STE 200-C Wilmington, <br />
                    DE 19808
                </Text>
                </Flex>
            </Flex>
            <Text>
            {/* Built with ❤️ at Sendchamp Inc. - © 2023  | All rights reserved */}
            </Text>
        </div>
        )
}

export default Footer;