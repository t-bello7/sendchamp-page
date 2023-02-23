import { useRef } from "react";
import {
    Image,
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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as Logo } from "../../assets/images/nav_logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/icons/menu.svg";
import { headerData }from "../../assets/data/header.js"


const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <Box bg="brand.900" px={{base:8, md:32}}>
                <Flex zIndex={2} py={6} px={8} justify="space-between">
                    <Flex>
                        <Link href="/" minWidth="238px">
                            <Logo />
                        </Link>
                        <UnorderedList display={{base: "none", md:"flex"}} alignItems="center">
                            {
                                headerData.map( element => (
                                    <ListItem key={uuidv4()} textDecoration="none" mr={12} listStyleType="none">
                                        {element.data.length ? 
                                            (<Popover
                                                trigger="hover"
                                                openDelay={10}
                                                >
                                                <PopoverTrigger>
                                                    <Button fontWeight="normal" textTransform="capitalize">{element.name}</Button>
                                                </PopoverTrigger>
                                                <Box zIndex="popover">
                                                    <PopoverContent
                                                        px={8} pt={6} pb={10} borderRadius={12}>
                                                    <PopoverHeader
                                                        borderBottom="none"
                                                        textTransform="uppercase"
                                                        color="gray"
                                                        fontSize="xs"
                                                    >{element.name}</PopoverHeader>
                                                    <PopoverBody
                                                        display="flex"
                                                        flexDirection="column"
                                                        alignItems="start"
                                                        fontSize="xs"
                                                        gap={3}
                                                        >
                                                        { element?.data.map(el => {
                                                        
                                                            if (el.icon) return (
                                                                <Link key={uuidv4()}>
                                                                    <Flex>
                                                                        <Image
                                                                        boxSize='24px'
                                                                        objectFit='cover'
                                                                        mr={3}
                                                                        src={el.icon} alt="icon"
                                                                        /> 
                                                                        <Text ml={2}>
                                                                            {el.name}
                                                                        </Text>
                                                                    </Flex>
                                                                </Link>
                                                            )
                                                            return (
                                                                <Link key={uuidv4()}>
                                                                {el.name}
                                                            </Link>
                                                            )
                                                        }
                                                        )}
                                                    </PopoverBody>
                                                </PopoverContent>
                                                </Box>
                                            </Popover>
                                            ): (
                                                <Text  textTransform="capitalize">{element.name} </Text>
                                            )
                                        }                                      
                                    </ListItem>
                                ))
                            }
                        </UnorderedList>
                    </Flex>
                    <Flex gap={3} display={{base: "none", md:"flex"}} alignItems="center">
                        <Button>Login</Button>
                        <Button bg="brand.800" color="white"> Get Started </Button>
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
	    		size="full"
	    		display={{ md: "none"}}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader display="flex" justifyContent="space-between"py={6} px={10} >
                            <Logo />
                            <DrawerCloseButton
                             _focus={{
                                border: "1px",
                                borderRadius: "8px",
                                borderColor: "blue"
                            }}
                            position="static"
                            fontWeight="semibold"
                            outline="none"
                            />
                        </DrawerHeader>
                        <DrawerBody>
                            <Accordion allowToggle>
                                {
                                    headerData.map(element => { 
                                        if (!element.data.length){
                                            return (<Box 
                                            key={uuidv4()}
                                            py={6} px={5} textTransform="uppercase" fontWeight="thin">
                                            {element.name}
                                            </Box>)
                                        }
                                        return(
                                        <AccordionItem key={element.id}>
                                            <AccordionButton justifyContent="space-between" py={6} px={5}   >
                                                    <Box as="span" textTransform="uppercase" fontWeight="thin">
                                                    {element.name}
                                                    </Box>
                                                    <AccordionIcon fontSize="32px" fontWeight="thin" />
                                            </AccordionButton>
                                            <AccordionPanel
                                                pb={4}
                                                display="grid"
                                                gap={8}
                                                py={8}
                                                px={5}
                                                bg="brand.900"
                                                gridTemplateColumns="repeat(2, minmax(0px, 1fr))">
                                                 {
                                                    element.data.map(el => (
                                                        el.icon ? (
                                                        <Flex key={uuidv4()}>
                                                            <Image
                                                            boxSize='24px'
                                                            objectFit='cover'
                                                            mr={3}
                                                            src={el.icon} alt="icon"
                                                            /> 
                                                            <Text> {el.name }</Text>
                                                        </Flex>
                                                        ): (
                                                        <Text key={uuidv4()}> {el.name }</Text>
                                                        )
                                                    ))
                                                 }
                                            </AccordionPanel>
                                        </AccordionItem>
                                    )})
                                }
                      
                            </Accordion>
                        </DrawerBody>

                        <DrawerFooter flexDirection="column" alignItems="center" gap={2}>
                            <Button
                                variant='outline'
                                onClick={onClose}
                                w="full"
                                py={8}
                                px="24px"
                                >
                                Login
                            </Button>
                            <Button
                                bg="brand.800"
                                w="full"
                                py={8}
                                color="white"
                                px="24px"
                                // outline=
                            >Get Started
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
        </Box>
    )
}

export default Navbar;
