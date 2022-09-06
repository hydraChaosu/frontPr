import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

export function BasketItem(props: {
  name: string;
  id: number;
  quantity: number;
  url: string;
  price: number;
}) {
  return (
    <Flex>
      <Box
        bg="white"
        p={6}
        m={2}
        rounded="md"
        // w={64}
        // maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={props.url} />
      </Box>
      <Box>
        <p>{props.name}</p>
        <p>{props.quantity}</p>
        <p>{props.price}</p>
      </Box>
      <Button type="submit" colorScheme="red">
        Delete
      </Button>
    </Flex>
  );
}
