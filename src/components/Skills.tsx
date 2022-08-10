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
    <Flex
      flexWrap="wrap"
      align="center"
      justify="center"
      mt={12}
      mb={8}
      gap={12}
    >
      {skills.map((skill) => {
        return (
          <Flex flexDir="column" gap={2} key={skill.tech}>
            <Flex
              bg={color}
              borderRadius="full"
              w="80px"
              h="80px"
              align="center"
              justify="center"
            >
              <Image
                src={`/images/${skill.image}.png`}
                alt="Profile image"
                w="40px"
                h="40px"
                transition="0.1s all"
                _hover={{ transform: "rotate(20deg)" }}
              />
            </Flex>
            <Text
              maxW={"80px"}
              textAlign="center"
              fontSize="sm"
              fontWeight="bold"
            >
              {skill.tech}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
}
