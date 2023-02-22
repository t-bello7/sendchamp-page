import { useRef } from "react";
import {
    Link,
    Text,
    Flex,
    UnorderedList,
    ListItem,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Container,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from "@chakra-ui/react"
import { ReactComponent as Logo } from "../../assets/images/nav_logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import headerData from "../../assets/data/header.json"


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <Box bg="brand.900">
            <Container data-aos="flip-left">
                <Flex zIndex={2} py={6} px={8} justify="space-between">
                    <Flex>
                        <Link href="/" minWidth="238px">
                            <Logo />
                        </Link>
                        <UnorderedList display={{base: "none", md:"flex"}} alignItems="center" gap={2}>
                            {
                                headerData.map( element => (
                                    <ListItem key={element.id} textDecoration="none" listStyleType="none">
                                        {
                                            element.data.length ? 
                                            (
                                                <Popover
                                                trigger="hover"
                                            >
                                                <PopoverTrigger>
                                                    <Button>{element.name}</Button>
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                    <PopoverHeader>{element.name}</PopoverHeader>
                                                    <PopoverBody display="flex" flexDirection="column">
                                                        { element?.data.map(el => (
                                                            <Link>
                                                                {el.name}
                                                            </Link>
                                                        ))}
                                                    </PopoverBody>
                                                </PopoverContent>
                                            </Popover>
                                            ): (
                                                <Text>{element.name} </Text>
                                            )
                                        }
                                    
                                       
                                    </ListItem>
                                ))
                            }
                        </UnorderedList>
                    </Flex>
                    <Flex display={{base: "none", md:"flex"}}>
                        <Button>Login</Button>
                        <Button colorScheme="blue"> Get Started </Button>
                        <Text as="span">🇳🇬</Text>
                    </Flex>

                    <Button
                        _focus={{
                            border: "1px",
                            borderRadius: "8px",
                            borderColor: "blue"
                        }}
                        ref={btnRef}
                        onClick={onOpen}
                        px={3} minWidth={10}
                        fontWeight="semibold"
                        outline="none"
                        bg="none"
	    		        display={{ md: "none"}}
                    >
                        <MenuIcon />
                    </Button>
                </Flex>
                <Drawer
	    		isOpen={isOpen}
	    		placement='bottom'
	    		onClose={onClose}
	    		finalFocusRef={btnRef}
	    		size="lg"
	    		display={{ md: "none"}}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                         Send Champ
                        </DrawerHeader>

                        <DrawerBody>
                            <Accordion allowToggle>
                                {
                                    headerData.map(element => (
                                        <AccordionItem key={element.id}>
                                        <h2>
                                            <AccordionButton>
                                                    <Box as="span" flex='1' textAlign='left'>
                                                    {element.name}
                                                    </Box>
                                                    <AccordionIcon />
                                                    <AccordionPanel pb={4}>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo consequat.
                                                    </AccordionPanel>
                                            </AccordionButton>
                                        </h2>
                                        </AccordionItem>
            
                                    ))
                                }
                      
                            </Accordion>
                        </DrawerBody>

                        <DrawerFooter flexDirection="column">
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Login
                            </Button>
                            <Button colorScheme='blue'>Get Started</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Container>
        </Box>
    )
}

export default Navbar;
