import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Image,
  Badge,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";

export function ShopItem(props: {
  name: string;
  id: number;
  category: string;
  quantity: number;
  url: string;
  price: number;
}) {
  return (
    <>
      <Flex
        bg="gray.100"
        // align="center"
        // justify="center"
        // h="20%"
        // w="50%"
        // marginLeft={4}
        // marginTop={4}
        // m={2}

        overflow="hidden"
      >
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
          <Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {props.name}
            </Box>{" "}
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {props.category}
            </Badge>
            <Box>{props.price}</Box>
            <Formik
              initialValues={{
                quantity: 0,
              }}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <VStack spacing={4} align="flex-start">
                    <FormControl display="flex">
                      <FormLabel htmlFor="searchQuery" alignSelf="center">
                        Quantity
                      </FormLabel>
                      <Field
                        as={Input}
                        id="searchQuery"
                        name="searchQuery"
                        type="number"
                        variant="filled"
                      />
                    </FormControl>

                    <Button type="submit" colorScheme="purple" width="full">
                      Buy
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
