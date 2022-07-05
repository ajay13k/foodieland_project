import { Stack, Image,bg } from "@chakra-ui/react";
const Inbox = () => {
  return (
    <Stack isInline 
    direction='row'

    >
      <Image size="150px" src="/salad.png" alt="Dan Abramov" />
      <Image size="100px" src="/plate.png" alt="Segun Adebayo" />
    </Stack>
  );
};

export default Inbox;
