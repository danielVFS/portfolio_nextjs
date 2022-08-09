import { Box, useColorModeValue } from "@chakra-ui/react";

interface LabelProps {
  children: string;
}

export function Label({ children }: LabelProps) {
  return (
    <Box
      as="span"
      bg={useColorModeValue("whiteAlpha.900", "darkAqua")}
      py={1}
      px={2}
      borderRadius={4}
      color={useColorModeValue("darkBlue", "greenLigth")}
      fontWeight="bold"
    >
      {children}
    </Box>
  );
}
