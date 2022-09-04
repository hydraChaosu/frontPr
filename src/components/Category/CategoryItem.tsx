import { Box } from "@chakra-ui/react";

export function CategoryItem(props: { name: string }) {
  return (
    <Box
      as="button"
      bg="white"
      w="100%"
      p={4}
      color="tomato"
      _hover={{ bg: "gray.200" }}
    >
      {props.name}
    </Box>
  );
}
