import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxW="800px">
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mt={6}
        mb={6}
        textAlign="center"
      >
        Olá, Sou o Daniel, um desenvolvedor frontend que mora no Brasil!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Vitor
          </Heading>
          <p>Desenvolvedor Frontend (React.js / Angular)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
