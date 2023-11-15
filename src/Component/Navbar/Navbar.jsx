import React from 'react';
import { Box, Flex, Text, IconButton, Image, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import ColorModeSwitcher from '../../ColorModeSwitcher';
import dollar from "../../assets/dollar.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <>
            <Box>
                <Flex
                    bg={useColorModeValue('white', 'gray.800')}
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    borderBottom={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.600')}
                    align={'center'}
                    justify={["space-between","space-around"]}
                >
                    <Flex
                        
                        display={{ base: 'flex', md: 'none' }}>
                        <IconButton
                            onClick={onToggle}
                            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                    <Flex gap={5}  align={"center"}
                    >
                        <Image src={dollar} width={[8, 8, 10]} />
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.600', 'white')}
                            fontWeight={'600'}
                            fontSize={25}
                        >
                            Boii Crypto
                        </Text>
                    </Flex>
                    <Flex >
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200')
    const linkHoverColor = useColorModeValue('gray.600', 'white')

    return (
        <>
            <Stack display={{ base: 'none', md: 'flex' }} direction={'row'} align={"center"} spacing={5}>
                {NAV_ITEMS.map((navItem) => (
                    <Box key={navItem.label}>
                        <Link
                            to={navItem.href ?? '#'}
                            fontSize={'sm'}
                            fontWeight={500}
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                            }}>
                            <Box fontWeight={600}  color={useColorModeValue('gray.600', 'gray.200')}>
                                {navItem.label}
                            </Box>
                        </Link>  
                    </Box>
                ))}
            </Stack>
            <Stack>
                <ColorModeSwitcher />
            </Stack>
        </>
    )
}

const MobileNav = () => {
    const { onToggle } = useDisclosure()
    return (
        <Stack bg={useColorModeValue('white', 'gray.600')} p={4} display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem,index) => (
                <Stack key={index} onClick={onToggle}>
                    <Link
                        to={navItem.href ?? '#'}
                        justify="space-between"
                        align="center"
                        _hover={{
                            textDecoration: 'none',
                        }}>
                        <Box fontWeight={600} py={2}  color={useColorModeValue('gray.600', 'gray.200')}>
                            {navItem.label}
                        </Box>
                    </Link>
                </Stack>
            ))}
        </Stack>
    )
}


const NAV_ITEMS = [
    {
        label: 'Home',
        href:'/',
    },
    {
        label: 'Coin',
        href: '/coin',
    },
]

export default Navbar;