import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import HeroImg from "../assets/hero.png";
import { FcAssistant, FcCollaboration, FcDonate } from "react-icons/fc";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [stat, setstat] = useState([]);
  const [date, setdate] = useState("1h");
  const [loading, setloading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    aos.init({ duration: 1500 });
    const fetchAllCoin = async () => {
      try {
        setloading(true);
        const statResponse = await axios.get(
          `https://api.coinranking.com/v2/stats`
        );
        setstat(statResponse);
        setloading(false);
      } catch (error) {
        console.error(error);
        setloading(false);
      }
    };
    fetchAllCoin();

    return () => {
      // Clean up here if needed
    };
  }, [id, date]);

  return (
    <>
      <Container
        maxW={"7xl"}
        minH={"85vh"}
        display={"flex"}
        alignItems={"center"}
      >
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 0 }}
          py={{ base: 10, md: 10 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                Free & Powerful,
              </Text>
              <br />
              <Text as={"span"} color={"red.400"}>
                Crypto Portfolio Tracker!
              </Text>
            </Heading>
            <Text color={"gray.500"}>
              Track your crypto earnings like a pro, with a user-friendly and
              reliable portfolio tracker that you can rely on
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                height={["10", "12"]}
                colorScheme={"red"}
                bg={"red.400"}
                as={motion.div}
                whileHover={{ scale: 0.9 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition='2s forwards'
                _hover={{ bg: "red.500" }}
              >
                <Link to={"/coin"}>Get Started</Link>
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            overflow={"hidden"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Box position={"relative"} rounded={"2xl"} zIndex={100}>
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                zIndex={100}
                src={HeroImg}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
      <Box  w={"full"}>
        <Stack
          spacing={10}
          as={Container}
          maxW={"3xl"}
          py={"10"}
          textAlign={"center"}
        >
          <span data-aos='fade-up'>
            <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
              What we BoiiCrypto Offer ?
            </Heading>
          </span>
          <span data-aos='fade-up'>
            <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
              BoiiCrypto provides a fundamental analysis of the crypto market.
              In addition to tracking price, volume and market capitalisation,
              CoinGecko tracks community growth, open-source code development,
              major events and on-chain metrics.
            </Text>
          </span>
        </Stack>

        <Container p={0} mx={"auto"}  maxW={"7xl"}>
          <Flex flexWrap='wrap' gap={"10"} justifyContent={"space-evenly"}>
            <span data-aos='zoom-in'>
              <Card
                heading={"Real-time Price Data (10,000+ coins)"}
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                description={
                  "From the world's largest independent cryptocurrency data aggregator"
                }
                href={"#"}
              />
            </span>
            <span data-aos='zoom-in'>
              <Card
                heading={"Synced across Web & Mobile App"}
                icon={<Icon as={FcCollaboration} w={10} h={10} />}
                description={
                  "Portfolio tracking at your fingertips - anytime, anywhere"
                }
                href={"#"}
              />
            </span>
            <span data-aos='zoom-in'>
              <Card
                heading={"Create Multiple Portfolios"}
                icon={<Icon as={FcDonate} w={10} h={10} />}
                description={
                  "Cover all strategies - conservative, risky, long term HODL, DeFi, low-cap gems, high risk positions and more!"
                }
                href={"#"}
              />
            </span>
          </Flex>
        </Container>
      </Box>

      <Stack
        maxW={["full", "full", "container.xl"]}
        margin={"auto"}
        py={2}
        px={[4, 10]}
        flexWrap={"wrap"}
        justify={"center"}
        direction={["column", "column", "row"]}
        my={["10", "20"]}
        gap={"5"}
      >
        <VStack
          w={["full"]}
          flex={1}
          // margin={"auto"}
          px={10}
          display={"flex"}
          justifyContent={"space-between"}
          fontSize={"xl"}
        >
          <Text>Best Performing Coin</Text>
          <HStack
            w={"full"}
            justify={"space-between"}
            fontSize={["md"]}
            color={useColorModeValue("gray.600", "white")}
            fontWeight={600}
          >
            <Text as={"span"} fontSize={["md"]}>
              All coins
            </Text>
            <Text as={"span"} fontSize={["md"]}>
              Symbol
            </Text>
          </HStack>
          {stat && stat.data && stat.data.data.bestCoins.map((coin) => {
            return (
              <HStack
                key={coin.symbol}
                w={"full"}
                fontSize={["md"]}
                color={useColorModeValue("gray.600", "white")}
                fontWeight={600}
              >
                <HStack flex={1}>
                  <Link to={"/coin/" + coin.uuid}>
                    <Image htmlWidth={42} src={coin.iconUrl} />
                    <Text my={1} fontSize={["md"]}>
                      {coin.name}
                    </Text>
                  </Link>
                </HStack>
                <Text as={"span"} fontSize={["md"]}>
                  {coin.symbol}
                </Text>
              </HStack>
            );
          })}
        </VStack>
        <VStack
          w={["full"]}
          flex={1}
          // margin={"auto"}
          px={10}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"lg"}>NewestCoin</Text>
          <HStack
            w={"full"}
            justify={"space-between"}
            fontSize={["md"]}
            color={useColorModeValue("gray.600", "white")}
            fontWeight={600}
          >
            <Text as={"span"} fontSize={["md"]}>
              All coins
            </Text>
            <Text as={"span"} fontSize={["md"]}>
              Symbol
            </Text>
          </HStack>
          {stat && stat.data && stat.data.data.newestCoins.map((coin) => {
            return (
              <HStack
                key={coin.symbol}
                w={"full"}
                fontSize={["md"]}
                color={useColorModeValue("gray.600", "white")}
                fontWeight={600}
              >
                <HStack flex={1}>
                  <Link to={"/coin/" + coin.uuid}>
                    <Image htmlWidth={30} src={coin.iconUrl} />
                    <Text my={1} fontSize={["md"]}>
                      {coin.name}
                    </Text>
                  </Link>
                </HStack>
                <Text as={"span"} fontSize={["md"]}>
                  {coin.symbol}
                </Text>
              </HStack>
            );
          })}
        </VStack>
      </Stack>
    </>
  );
}

// card
const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size='md'>{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button colorScheme={"blue"} size={"sm"}>
          <Link to={"/coin"}>Learn more</Link>
        </Button>
      </Stack>
    </Box>
  );
};

// Blob

const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox='0 0 578 440'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
        fill='currentColor'
      />
    </Icon>
  );
};
