import { BasketItem } from "../components/Basket/BasketItem";
import { Button, Flex } from "@chakra-ui/react";

export function BasketView() {
  //show basket, can change quantity of element, can delete item in basket
  //buy
  return (
    <Flex
      // justify="center"
      direction="column"
      maxH="calc(100vh - 80px)"
      bg="gray.100"
      w="80%"
      alignSelf="center"
      mx="auto"
    >
      {[
        {
          id: 1,
          name: "aaaaa",
          price: 1,
          quantity: 0,
          url: "http://www.shop.com",
          category: "aaa",
        },
        {
          id: 1,
          name: "aaaaa",
          price: 1,
          quantity: 0,
          url: "http://www.shop.com",
          category: "aaa",
        },
      ].map((item) => (
        <BasketItem
          id={item.id}
          quantity={item.quantity}
          name={item.name}
          price={item.price}
          url={item.url}
        />
      ))}
      <Button type="submit" colorScheme="purple">
        Buy
      </Button>
    </Flex>
  );
}
