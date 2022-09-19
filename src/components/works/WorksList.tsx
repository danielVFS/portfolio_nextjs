import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { projects } from "../../core/data/projects";
import { Project } from "../../core/models/Project";
import { StackList } from "../StackList";

export function WorksList() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {projects.map((project) => {
        return <WorkListItem key={project.project_name} project={project} />;
      })}
    </Grid>
  );
}

interface WorkListItemProps {
  project: Project;
}

function WorkListItem({ project }: WorkListItemProps) {
  return (
    <GridItem
      py={4}
      px={4}
      borderRadius={6}
      width="100%"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
    >
      <Image
        src={`/projects/${project.image}.png`}
        alt="Profile image"
        borderRadius="10"
      />
      <Flex flexDir="column" align="center" justify="center">
        <Heading mt={4}>{project.project_name}</Heading>
        <StackList stack={project.stack} />
        <Text fontWeight="300" fontStyle="oblique" mt={8}>
          {project.description}
        </Text>
        <Button
          width="100%"
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
    </GridItem>
  );
}
