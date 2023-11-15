import { Box , Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { ChevronRightIcon , ChevronLeftIcon} from '@chakra-ui/icons'

const Pagination = (props) => {
    let numOfPages = Math.ceil(props.numOfCoin/50)
  return (
    <>
    {props.currPage<=4?(
        <Box w={"full"} mt={10}>
            <HStack justifyContent={"center"}>
                <Button onClick={()=>{props.setcurrPage(props.currPage-1>0?props.currPage-1:1)}} bgColor='red.400' p={2} height={8}><ChevronLeftIcon/></Button>
                <Button style={{backgroundColor:props.currPage==1?"#F56565":""}} onClick={()=>{props.setcurrPage(1)}} fontSize={10} p={2} height={8}>1</Button>
                <Button style={{backgroundColor:props.currPage==2?"#F56565":""}} onClick={()=>{props.setcurrPage(2)}} fontSize={10} p={2} height={8}>2</Button>
                <Button style={{backgroundColor:props.currPage==3?"#F56565":""}} onClick={()=>{props.setcurrPage(3)}} fontSize={10} p={2} height={8}>3</Button>
                <Button style={{backgroundColor:props.currPage==4?"#F56565":""}} onClick={()=>{props.setcurrPage(4)}} fontSize={10} p={2} height={8}>4</Button>
                <Button style={{backgroundColor:props.currPage==numOfPages?"#F56565":""}} onClick={()=>{props.setcurrPage(numOfPages)}} fontSize={10} p={2} height={8}>{numOfPages}</Button>
                <Button onClick={()=>{props.setcurrPage(props.currPage+1<=numOfPages?props.currPage+1:numOfPages)}} bgColor='red.400' p={2} height={8}><ChevronRightIcon/></Button>
            </HStack>
        </Box>
    ):(
        props.currPage>=numOfPages-3 ? (
                <Box w={"full"} mt={10}>
            <HStack justifyContent={"center"}>
                <Button onClick={()=>{props.setcurrPage(props.currPage-1>0?props.currPage-1:1)}} bgColor='red.400' p={2} height={8}><ChevronLeftIcon/></Button>
                <Button style={{backgroundColor:props.currPage==1?"#F56565":""}} onClick={()=>{props.setcurrPage(1)}} fontSize={10} p={2} height={8}>1</Button>
                <Button style={{backgroundColor:props.currPage==numOfPages-3?"#F56565":""}} onClick={()=>{props.setcurrPage(numOfPages-3)}} fontSize={10} p={2} height={8}>{numOfPages-3}</Button>
                <Button style={{backgroundColor:props.currPage==numOfPages-2?"#F56565":""}} onClick={()=>{props.setcurrPage(numOfPages-2)}} fontSize={10} p={2} height={8}>{numOfPages-2}</Button>
                <Button style={{backgroundColor:props.currPage==numOfPages-1?"#F56565":""}} onClick={()=>{props.setcurrPage(numOfPages-1)}} fontSize={10} p={2} height={8}>{numOfPages-1}</Button>
                <Button style={{backgroundColor:props.currPage==numOfPages?"#F56565":""}} onClick={()=>{props.setcurrPage(numOfPages)}} fontSize={10} p={2} height={8}>{numOfPages}</Button>
                <Button onClick={()=>{props.setcurrPage(props.currPage+1<=numOfPages?props.currPage+1:numOfPages)}} bgColor='red.400' p={2} height={8}><ChevronRightIcon/></Button>
            </HStack>
        </Box>
        ):(
            <Box w={"full"} mt={10}>
                <HStack justifyContent={"center"}>
                    <Button onClick={()=>{props.setcurrPage(props.currPage-1>0?props.currPage-1:1)}} bgColor='red.400' p={2} height={8}><ChevronLeftIcon/></Button>
                    <Button onClick={()=>{props.setcurrPage(1)}} fontSize={10} p={2} height={8}>1</Button>
                    <Button bgColor={"red.400"} onClick={()=>{props.setcurrPage(props.currPage)}} fontSize={10} p={2} height={8}>{props.currPage}</Button>
                    <Button onClick={()=>{props.setcurrPage(props.currPage+1)}} fontSize={10} p={2} height={8}>{props.currPage+1}</Button>
                    <Button onClick={()=>{props.setcurrPage(props.currPage+2)}} fontSize={10} p={2} height={8}>{props.currPage+2}</Button>
                    <Button onClick={()=>{props.setcurrPage(numOfPages)}} fontSize={10} p={2} height={8}>{numOfPages}</Button>
                    <Button onClick={()=>{props.setcurrPage(props.currPage+1<=numOfPages?props.currPage+1:numOfPages)}} bgColor='red.400' p={2} height={8}><ChevronRightIcon/></Button>
                </HStack>
            </Box>
        )
    )}
    </>
  )
}

export default Pagination;

// pageSize,currPage