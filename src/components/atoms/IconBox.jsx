import { Box, Flex } from "@chakra-ui/react";
import { ReactComponent as Sms }from "../../assets/icons/sms-white.svg"
import { ReactComponent as Voice } from "../../assets/icons/voice-white.svg"
import { ReactComponent as Verification }from "../../assets/icons/verification-white.svg"
import { ReactComponent as Whatsapp }from "../../assets/icons/whatsapp-white.svg"
import { ReactComponent as Mail} from "../../assets/icons/mail-white.svg"

const IconBox = (props) => {
    const {unit} = props
    return(

         <Box bg="brand.800" maxW="fit-content" padding={4} borderRadius={12}> 
            <Flex
                w={{base: "24px", md:"32px"}}
                h={{base: "24px", md:"32px"}}
                alignItems="center"
                justify="center"
                fontWeight="thin"
                >
            {
                {
                'sms': <Sms />,
                'sec': <Voice />,
                'email': <Mail />,
                'OTP': <Verification />,
                'msg': <Whatsapp />

                }[unit]
            }
            </Flex>
         </Box>)
}

export default IconBox;