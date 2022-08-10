import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Label } from "./Label";

export default function Bio() {
  return (
    <Flex
      h="400px"
      flexDir={["column", "column", "row"]}
      align="center"
      justify={["center", "center", "space-between"]}
      borderRadius="lg"
    >
      <Text lineHeight="1.7">
        <Box>
          <Heading as="h2">Daniel Vitor</Heading>
          <Text fontWeight="300" fontStyle="oblique">
            Desenvolvedor Frontend (React.js / Angular)
          </Text>
        </Box>
        <Text mt={2}>
          Tenho 21 anos,
          <Text as="span" fontWeight="bold">
            &nbsp;sou Dev Frontend
          </Text>
          ,&nbsp;com 1 ano de experiência com <Label>REACT.JS</Label>
          &nbsp;e&nbsp;
          <Label>ANGULAR</Label>.
        </Text>
        <Text mt={2}>
          Sou estudante do curso de
          <NextLink href="http://cursos.ifg.edu.br/info/bach/bach-ciencia-da-computacao/CP-ANAPOLI">
            <Link>&nbsp;Ciência da Computação&nbsp;</Link>
          </NextLink>
          do IFG câmpus Anápolis.
        </Text>
      </Text>

      <Box>
        <Image
          src="/images/profile.jpg"
          alt="Profile image"
          mt={[8, 8, 0]}
          borderColor={useColorModeValue("whiteAlpha.800", "greenLigth")}
          borderWidth={3}
          borderStyle="solid"
          maxW={["120px", "120px", "150px"]}
          borderRadius="full"
          transition="0.2s all"
          _hover={{ transform: "scale(1.1)" }}
        />
      </Box>
    </Flex>
  );
}
