import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";

interface TimelineProps {
  initialDate: string;
  finalDate: string;
}

export function Timeline({ initialDate, finalDate }: TimelineProps) {
  return (
    <Flex flexDir="column" align="center">
      <Text mb={3}>{finalDate}</Text>
      <Box
        width="3px"
        height="80px"
        borderRadius="full"
        bg={useColorModeValue("whiteAlpha.800", "whiteAlpha.200")}
      />
      <Text mt={3}>{initialDate}</Text>
    </Flex>
  );
}
