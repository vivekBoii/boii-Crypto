import {  Divider, HStack, Heading ,Text ,Image , useColorModeValue} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../Component/Spinner/Spinner';
import Pagination from '../Component/Pagination/Pagination';
import { Link } from 'react-router-dom';

const Coin = () => {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [currPage, setcurrPage] = useState(1);
    const [numOfCoin, setnumOfCoin] = useState(1);

    useEffect(() => {

      const fetchAllCoin = async() =>{
        try {
            setloading(true);
            const response = await axios.get(`https://api.coinranking.com/v2/coins?offset=${currPage}`);
            const coins = response.data.data.coins; 
            setnumOfCoin(parseInt(response.data.data.stats.totalCoins));
            setdata(coins);
            setloading(false);
        } catch (error) {
            
        }
      }
      fetchAllCoin();
    
      return () => {
    
      }
    }, [currPage])
    
  return (
    <>
        {loading ? (<Spinner/>):(
            <>
            <Heading color={useColorModeValue("gray.600","white")} textAlign={"center"} my={4} fontWeight={600}>Coins</Heading>
                <Divider as={"div"} border={"1px solid #BDBDBD"}/>
                <HStack maxW={"container.lg"} margin={"auto"} px={10} display={"flex"} justifyContent={"space-between"}>
                    <HStack flex={1} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                        <Text as={"span"} fontSize={["14"]}>All coins</Text>
                    </HStack>
                    <HStack flex={1} display={["none","flex"]} justify={"center"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                        <Text as={"span"} fontSize={["14"]}>24h</Text>
                    </HStack>
                    <HStack flex={1} display={["none","none","flex"]}  justify={"center"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                        <Text as={"span"} fontSize={["14"]}>Market cap</Text>
                    </HStack>
                    <HStack flex={.5} justify={"flex-end"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                        <Text as={"span"} fontSize={["14"]}>Price</Text>
                    </HStack>
                </HStack>
                <Divider as={"div"} border={"1px solid #BDBDBD"}/>
                <HStack maxW={"container.lg"} margin={"auto"} h={10} px={10} py={2} display={"flex"} justifyContent={"space-between"}></HStack>
                {
                    data.map((coin,index)=>{
                        return(
                            <>
                                <Divider key={index} as={"div"} border={"1px solid #BDBDBD"}/>
                                <HStack key={coin.uuid} maxW={"container.lg"} margin={"auto"} px={10} py={2} display={"flex"} justifyContent={"space-between"}>
                                        <HStack cursor={'pointer'} display={"flex"} flex={1} gap={2} color={useColorModeValue("gray.600","white")} fontWeight={600} align={"center"}>
                                            <Link to={coin.uuid}>
                                                    <HStack>
                                                        <Text fontSize={["12"]}t>{(currPage-1)*50+index+1}.</Text>
                                                        <Image htmlWidth={30} src={coin.iconUrl}/>
                                                        <Text fontSize={["14"]}>{coin.name}</Text>
                                                    </HStack>
                                            </Link>
                                        </HStack>
                                    <HStack flex={1} display={["none","flex"]} justify={"center"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                        <Text as={"span"} fontSize={["14"]}>{coin.symbol}</Text>
                                    </HStack>
                                    <HStack flex={1} display={["none","none","flex"]} justify={"center"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                        <Text as={"span"} fontSize={["14"]}>${coin.marketCap.slice(0,3)+" billion"}</Text>
                                    </HStack>
                                    <HStack flex={.5} justify={"flex-end"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                        <Text as={"span"} fontSize={["14"]}>${parseFloat(coin.price).toFixed(2)}</Text>
                                    </HStack>
                                </HStack>
                            </>
                        )
                    })
                }
                <Pagination numOfCoin={numOfCoin} currPage={currPage} setcurrPage={setcurrPage}/>
            </>
        )}
    </>
  )
}

export default Coin;