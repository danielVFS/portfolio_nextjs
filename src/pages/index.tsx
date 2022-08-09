import { Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Bio } from "../components/Bio";
import { Profile } from "../components/Profile";

const Home: NextPage = () => {
  return (
    <Container maxW="800px" display="flex" flexDir="column" gap={6} mt={6}>
      <Bio />

      <Profile />
    </Container>
  );
};

export default Home;
