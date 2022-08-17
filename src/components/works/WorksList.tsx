import {
  Button,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { projects } from "../../core/data/ProjectsData";
import { StackList } from "../StackList";

export function WorksList() {
  return (
    <Flex
      gap={[8, 8, 8, 16]}
      flexDir={["column", "column", "column", "row"]}
      mt={16}
      p={8}
      borderWidth="1px"
      borderStyle="solid"
      borderColor={useColorModeValue("purple.500", "greenLigth.600")}
      borderRadius={6}
      width="100%"
    >
      <Image
        w="400px"
        h="250px"
        src={`/projects/${"next-blog-demo"}.png`}
        alt="Profile image"
        borderRadius="10"
      />
      <Flex flexDir="column">
        <Heading mb={2}>{"World Trip"}</Heading>
        <StackList stack={projects[0].stack} />
        <Button
          w="180px"
          height="45px"
          mt={10}
          bg={useColorModeValue("purple.500", "greenLigth.600")}
          _hover={{
            bg: useColorModeValue("purple.700", "greenLigth.700"),
          }}
          color={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
        >
          Ver Projeto
        </Button>
      </Flex>
    </Flex>
  );
}
