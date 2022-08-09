import { Box, useColorModeValue } from "@chakra-ui/react";

export function Bio() {
  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      p={3}
      textAlign="center"
    >
      Olá, Sou o Daniel, um desenvolvedor frontend que mora no Brasil!
    </Box>
  );
}
