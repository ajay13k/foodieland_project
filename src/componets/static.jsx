import { Image, Box, Flex,Heading,Text,Button,Spacer } from "@chakra-ui/react";
const Static = () => {
  return (
    <>
      <Flex >
        <Flex marginLeft="60px">
        <Box boxSize="sm" marginTop="60px">
          <Heading>Everyone can be a chef in their own kichen</Heading>
          <Text>Lorem ipsum dolor sit, amet consectetur
             adipisicing elit. Doloremque eligendi, unde, 
             sit vero mollitia esse aperiam</Text>
             <Button bg ="black" color="white"marginTop="20px">Learn More</Button>
        </Box>
        </Flex>
        <Spacer/>
        <Flex marginRight="60px">
        <Box boxSize="sm" >
          <Image src="/image.png" alt="Dan Abramov" />
        </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Static;
