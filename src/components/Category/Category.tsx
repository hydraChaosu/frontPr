import { CategoryItem } from "./CategoryItem";
import { Box, Flex } from "@chakra-ui/react";

export function Category() {
  //show category items to filter
  return (
    <Flex
      bg="gray.100"
      // align="center"
      // justify="center"
      h="calc(100vh - 80px)"
      direction="column"
      minW="20vw"
      borderRight="1px"
      borderRightColor="black"
    >
      <Box bg="tomato" w="100%" p={4} color="white" textAlign="center">
        Categories
      </Box>
      {/* //onClicklater*/}
      {["all", "alcohol", "apples"].map((item) => (
        <CategoryItem name={item} />
      ))}
    </Flex>
  );
}
