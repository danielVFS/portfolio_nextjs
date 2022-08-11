import { Flex, Image, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { Meta } from "./Meta";

interface StackListProps {
  stack: {
    tech: string;
    image: string;
  }[];
}

export function StackList({ stack }: StackListProps) {
  const tooltipBg = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const tooltipColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Flex mt={2} gap={2} align="center">
      <Meta>Stack: </Meta>
      {stack.map((stack) => {
        return (
          <Tooltip
            key={stack.tech}
            label={stack.tech}
            aria-label="Tech tooltip"
            bg={tooltipBg}
            color={tooltipColor}
            fontWeight="bold"
          >
            <Image
              src={`/images/${stack.image}.png`}
              alt="Profile image"
              w="30px"
              h="30px"
              transition="0.1s all"
            />
          </Tooltip>
        );
      })}
    </Flex>
  );
}
