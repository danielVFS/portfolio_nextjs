import { Box, Link, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { Label } from "./Label";

export default function Bio() {
  return (
    <Box
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      p={3}
    >
      <Text lineHeight="1.7">
        <Text as="span" fontWeight="bold" fontSize="2xl">
          Sou&nbsp;
        </Text>
        <Text as="span" variant="userName">
          Daniel Vitor Ferreira Silva
        </Text>
        <Text mt={2}>
          Tenho 21 anos,
          <Text as="span" variant="job">
            sou Dev Frontend
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
    </Box>
  );
}
