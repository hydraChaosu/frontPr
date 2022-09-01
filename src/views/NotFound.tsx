import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Flex
      bg="gray"
      alignItems="center"
      justifyContent="center"
      h="calc(100vh - 80px)"
    >
      <Box>
        <Image src="https://http.cat/404" alt="page not found 404" />
      </Box>
    </Flex>
  );
}
