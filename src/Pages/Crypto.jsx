import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Component/Spinner/Spinner';
import { Stack ,Button, Divider, HStack, Text, useColorModeValue, Image, StatHelpText, Stat, StatArrow, VStack, Progress, Badge } from '@chakra-ui/react';
import { LineChart } from '../Component/Chart.jsx/Chart';

const Crypto = () => {
    const [data, setdata] = useState([]);
    const [stat, setstat] = useState([]);
    const [date, setdate] = useState("1h");
    const [loading, setloading] = useState(false);
    const { id } = useParams();
    const [lineData, setlineData] = useState([]);

    useEffect(() => {
        const fetchAllCoin = async () => {
            try {
                setloading(true);
                const response = await axios.get(
                    `https://api.coinranking.com/v2/coins?uuids[]=${id}`
                );
                const responseData = await axios.get(
                    `https://api.coinranking.com/v2/coin/${id}/history?timePeriod=${date}`
                );
                const statResponse = await axios.get(
                    `https://api.coinranking.com/v2/stats`
                );
                setlineData(responseData.data.data.history);
                const coins = response.data.data.coins;
                setdata(coins);
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
    }, [id,date]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <Divider as={"div"} mt={10} border={"1px solid #BDBDBD"} />
                    {data.length > 0 ? (
                        <>
                            <HStack
                                maxW={"container.lg"}
                                margin={"auto"}
                                py={2}
                                px={[4,10]}
                                display={"flex"}
                                justifyContent={"space-between"}
                            >
                                <HStack
                                    flex={1.3}
                                    fontSize={["14"]}
                                    color={useColorModeValue("gray.600", "white")}
                                    fontWeight={600}
                                >
                                    <Image htmlWidth={45} src={data[0].iconUrl} />
                                    <Text fontSize={["14", '18']}>{data[0].name}</Text>
                                </HStack>
                                <HStack
                                    flex={1}
                                    fontSize={["14"]}
                                    color={useColorModeValue("gray.600", "white")}
                                    justify={"center"}
                                    fontWeight={600}
                                >
                                    <Text fontSize={["14", '16']}>Rank #{data[0].rank}</Text>
                                </HStack>
                                <HStack
                                    flex={.4}
                                    fontSize={["14"]}
                                    justify={"center"}
                                    color={useColorModeValue("gray.600", "white")}
                                    fontWeight={600}
                                >
                                    <Text fontSize={["14", '16']}>{data[0].symbol}</Text>
                                </HStack>
                                <HStack
                                    flex={0.5}
                                    fontSize={["14"]}
                                    justify={"flex-end"}
                                    color={useColorModeValue("gray.600", "white")}
                                    fontWeight={600}
                                >
                                    <Text fontSize={["14", '16']}>${parseFloat(data[0].price).toFixed(2)}</Text>
                                </HStack>
                            </HStack>
                            <Divider as={"div"} border={"1px solid #BDBDBD"} />
                            <HStack
                                maxW={"container.lg"}
                                margin={"auto"}
                                py={2}
                                px={[4,10]}
                                justifyContent={"space-between"}
                            >
                                <Stat>
                                    <StatHelpText fontSize={"16"} mt={1}>
                                        <StatArrow type={parseInt(data[0].change)>0?"increase":"decrease"}/>{data[0].change}
                                    </StatHelpText>
                                </Stat>
                                <HStack
                                    flex={2}
                                    fontSize={["14"]}
                                    justify={"flex-end"}
                                    color={useColorModeValue("gray.600", "white")}
                                    fontWeight={600}
                                >
                                    <Text fontSize={["14", '16']}>Market Capital ${data[0].marketCap.slice(0,5)/100} billion</Text>
                                </HStack>
                            </HStack>
                            <Divider as={"div"} border={"1px solid #BDBDBD"} />
                            <HStack
                                maxW={"container.lg"}
                                margin={"auto"}
                                py={2}
                                px={[4,10]}
                                justifyContent={"space-between"}
                            >
                                <CustomBar high={data[0].sparkline[0]} low={data[0].sparkline[data[0].sparkline.length-2]}/>
                            </HStack>
                            <Divider as={"div"} border={"1px solid #BDBDBD"} />
                            <HStack
                                maxW={"container.lg"}
                                margin={"auto"}
                                py={2}
                                px={[4,10]}
                            >
                            {
                                lineData.length>0?(<LineChart linedata={lineData} date={date}/>):(
                                    <div>No data available</div>
                                )
                            }
                            </HStack>
                            <HStack
                                maxW={"container.lg"}
                                margin={"auto"}
                                py={2}
                                px={[4,10]}
                                flexWrap={"wrap"}
                                justify={"center"}
                            >
                                <Button style={{backgroundColor:date=="1h"?"#F56565":""}} onClick={()=>{setdate("1h")}} fontSize={10} p={2} height={8}>1h</Button>
                                <Button style={{backgroundColor:date=="3h"?"#F56565":""}}  onClick={()=>{setdate("3h")}} fontSize={10} p={2} height={8}>3h</Button>
                                <Button style={{backgroundColor:date=="12h"?"#F56565":""}}  onClick={()=>{setdate("12h")}} fontSize={10} p={2} height={8}>12h</Button>
                                <Button style={{backgroundColor:date=="24h"?"#F56565":""}}  onClick={()=>{setdate("24h")}} fontSize={10} p={2} height={8}>24h</Button>
                                <Button style={{backgroundColor:date=="7d"?"#F56565":""}}  onClick={()=>{setdate("7d")}} fontSize={10} p={2} height={8}>7d</Button>
                                <Button style={{backgroundColor:date=="30d"?"#F56565":""}}  onClick={()=>{setdate("30d")}} fontSize={10} p={2} height={8}>30d</Button>
                                <Button style={{backgroundColor:date=="3m"?"#F56565":""}}  onClick={()=>{setdate("3m")}} fontSize={10} p={2} height={8}>3m</Button>
                                <Button style={{backgroundColor:date=="1y"?"#F56565":""}}  onClick={()=>{setdate("1y")}} fontSize={10} p={2} height={8}>1y</Button>
                                <Button style={{backgroundColor:date=="3y"?"#F56565":""}}  onClick={()=>{setdate("3y")}} fontSize={10} p={2} height={8}>3y</Button>
                                <Button style={{backgroundColor:date=="5y"?"#F56565":""}}  onClick={()=>{setdate("5y")}} fontSize={10} p={2} height={8}>5y</Button>
                            </HStack>
                            <Stack
                                maxW={["full","full","container.lg"]}
                                margin={"auto"}
                                py={2}
                                px={[4,10]}
                                flexWrap={"wrap"}
                                justify={"center"}
                                direction={["column","column","row"]}
                                my={["4","10"]}
                                gap={"5"}
                            >
                                <VStack w={["full"]} flex={1} margin={"auto"} px={10} display={"flex"} justifyContent={"space-between"}>
                                    <Text>Best Performing Coin</Text>
                                        <HStack w={"full"} justify={"space-between"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                            <Text as={"span"} fontSize={["14"]}>All coins</Text>
                                            <Text as={"span"} fontSize={["14"]}>Symbol</Text>
                                        </HStack>
                                    {
                                        stat.data.data.bestCoins.map((coin)=>{
                                            return(
                                                <HStack w={"full"}fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                                    <HStack flex={1}>
                                                        <Link to={"/coin/"+coin.uuid}>
                                                            <Image htmlWidth={30} src={coin.iconUrl}/>
                                                            <Text my={1} fontSize={["14"]}>{coin.name}</Text>
                                                        </Link>
                                                    </HStack>
                                                    <Text as={"span"} fontSize={["14"]}>{coin.symbol}</Text>
                                                </HStack>
                                            )
                                        })
                                    }
                                </VStack>
                                <VStack w={["full"]} flex={1} margin={"auto"} px={10} display={"flex"} justifyContent={"space-between"}>
                                    <Text>NewestCoin</Text>
                                        <HStack w={"full"} justify={"space-between"} fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                            <Text as={"span"} fontSize={["14"]}>All coins</Text>
                                            <Text as={"span"} fontSize={["14"]}>Symbol</Text>
                                        </HStack>
                                    {
                                        stat.data.data.newestCoins.map((coin)=>{
                                            return(
                                                <HStack w={"full"}fontSize={["14"]} color={useColorModeValue("gray.600","white")} fontWeight={600} >
                                                    <HStack flex={1}>
                                                        <Link to={"/coin/"+coin.uuid}>
                                                            <Image htmlWidth={30} src={coin.iconUrl}/>
                                                            <Text my={1} fontSize={["14"]}>{coin.name}</Text>
                                                        </Link>
                                                    </HStack>
                                                    <Text as={"span"} fontSize={["14"]}>{coin.symbol}</Text>
                                                </HStack>
                                            )
                                        })
                                    }
                                </VStack>    
                            </Stack>
                        </>
                    ) : (
                        <div>No data available</div>
                    )}
                    <Divider as={"div"} border={"1px solid #BDBDBD"} />
                </>
            )}
        </>
    );
};

const CustomBar = ({high , low}) =>{
    return(
        <>
            <VStack w={"container.lg"}>
                <Progress value={50} colorScheme='teal' w="full"/>
                <HStack justifyContent={"space-between"} w={"full"}>
                    <Badge children={parseFloat(high).toFixed(2)} colorScheme='red'/>
                    <Text fontSize={"sm"}>24hr Range</Text>
                    <Badge children={parseFloat(low).toFixed(2)} colorScheme='green'/>
                </HStack>
            </VStack>
        </>
    )
}

export default Crypto;


// const price = linedata.map((object)=>{return(object.price);});
//   const timeStamp = linedata.map((object)=>{return(new Date(object.timestamp*1000).toTimeString().slice(0,8));});