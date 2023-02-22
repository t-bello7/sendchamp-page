import { useRef } from "react";
import { 
    Flex,
    Button,
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
import { ReactComponent as Logo  } from "../../assets/images/nav_logo.svg";
import { ReactComponent as MenuIcon  } from "../../assets/icons/menu.svg";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
    <Box  bg="brand.900">
    <Container data-aos="flip-left">
        <Flex zIndex={2} py={6} px={8} justify="space-between">
            <Logo />
            <button type="button" className="nav-button" ref={btnRef} onClick={onOpen}>
                <MenuIcon />
            </button>
        </Flex>
        <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder='Type here...' /> */}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
    </Box>
)}

export default Navbar;