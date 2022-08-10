import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

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

export function Skills() {
  const color = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");

  return (
    <Flex flexWrap="wrap" mt={12} mb={8} gap={8}>
      {skills.map((skill) => {
        return (
          <Flex flexDir="column" align="center" gap={2} key={skill.tech}>
            <Flex
              bg={color}
              borderRadius="full"
              w="100px"
              h="100px"
              align="center"
              justify="center"
            >
              <Image
                src={`/images/${skill.image}.png`}
                alt="Profile image"
                w="60px"
                h="60px"
              />
            </Flex>
            <Text>{skill.tech}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
