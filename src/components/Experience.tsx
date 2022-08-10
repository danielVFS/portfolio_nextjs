import { Flex, useColorModeValue } from "@chakra-ui/react";

const skills = [
  { tech: "Javascript", image: "javascript" },
  { tech: "Typescript", image: "typescript" },
  { tech: "HTML", image: "html" },
  { tech: "CSS", image: "css" },
  { tech: "Git", image: "git" },
  { tech: "Figma", image: "figma" },
  { tech: "Sass", image: "sass" },
  { tech: "Java", image: "java" },
  { tech: "Spring Boot", image: "spring-boot" },
  { tech: "Angular", image: "angular" },
  { tech: "React.js", image: "react" },
  { tech: "Redux", image: "redux" },
  { tech: "Chakra UI", image: "chakra" },
  { tech: "Material UI", image: "mu5" },
  { tech: "Styled Components", image: "styled-components" },
  { tech: "Framer Motion", image: "framer" },
];

export function Experience() {
  const color = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");

  return (
    <Flex flexWrap="wrap" mt={12} mb={8} gap={8}>
      <p>Experience</p>
    </Flex>
  );
}
