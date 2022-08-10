import { Box, useColorModeValue } from "@chakra-ui/react";

interface LabelProps {
  children: string;
}

export function Label({ children }: LabelProps) {
  return (
    <Box
      as="span"
      py={1}
      px={2}
      borderRadius={4}
      color={useColorModeValue("purple.600", "greenLigth400")}
      fontWeight="bold"
    >
      {children}
    </Box>
  );
}
