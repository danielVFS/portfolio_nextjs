import {
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { Meta } from "./Meta";

interface ExperienceDescriptionProps {
  occupation: string;
  at: string;
  stack: {
    tech: string;
    image: string;
  }[];
}

export function ExperienceDescription({
  occupation,
  at,
  stack,
}: ExperienceDescriptionProps) {
  const tooltipBg = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const tooltipColor = useColorModeValue("gray.800", "white");

  return (
    <Flex flexDir="column">
      <Heading as="h3" size="sm">
        {occupation}
      </Heading>
      <Text>{at}</Text>
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
    </Flex>
  );
}
