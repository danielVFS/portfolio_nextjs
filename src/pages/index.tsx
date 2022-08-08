import { Box, Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
        Olá, Sou o Daniel, um desenvolvedor frontend que mora no Brasil!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Daniel Vitor
          </Heading>
          <p>Desenvolvedor Frontend (React.js/Angular)</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
