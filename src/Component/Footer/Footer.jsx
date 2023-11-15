import { Box, Container, Stack, Text, useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function SmallWithSocial() {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={[4]}
        pt={10}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 VivekBoii. All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
            <FaTwitter size={20} />
            <FaYoutube  size={20}/>
            <FaInstagram size={20} />
        </Stack>
      </Container>
    </Box>
  )
}