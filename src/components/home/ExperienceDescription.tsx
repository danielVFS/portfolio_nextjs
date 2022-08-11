import { Flex, Heading, Text } from "@chakra-ui/react";
import { StackList } from "../StackList";

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
  return (
    <Flex flexDir="column">
      <Heading as="h3" size="sm">
        {occupation}
      </Heading>
      <Text>{at}</Text>
      <StackList stack={stack} />
    </Flex>
  );
}
