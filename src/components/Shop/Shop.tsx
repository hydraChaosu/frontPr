import { ShopItem } from "./ShopItem";
import { Flex } from "@chakra-ui/react";

export function Shop() {
  return (
    <>
      <Flex
        bg="gray.100"
        p={4}
        align="stretch"
        justify="center"
        minH="calc(100vh - 80px)"
        flexWrap="wrap"
        // flexGrow="1"
        // marginTop={4}
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
          <ShopItem key={item.id} {...item} />
        ))}
      </Flex>
      {/*    paginacja */}
    </>
  );
}
