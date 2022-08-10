import { Box, Flex } from "@chakra-ui/react";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function SkillsAndExperience() {
  return (
    <Flex flexDir={["column", "column", "row"]} justify="space-between">
      <Box width={["100%", "100%", "50%"]}>
        <Skills />
      </Box>
      <Box width={["100%", "100%", "40%"]}>
        <Experience />
      </Box>
    </Flex>
  );
}
