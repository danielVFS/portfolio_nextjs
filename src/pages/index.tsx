import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Profile } from "../components/Profile";
import { Section } from "../components/Section";
import { Skills } from "../components/Skills";

const DynamicBio = dynamic(() => import("../components/Bio"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Container maxW="800px" display="flex" flexDir="column" gap={6} mt={6}>
        <DynamicBio />

        <Profile />
      </Container>
      <Container maxW="1200px" display="flex" flexDir="column" gap={6} mt={6}>
        <Section delay="0.1">
          <Heading as="h3" variant="section-title">
            Habilidades e Experiências
          </Heading>
          <Skills />
        </Section>
      </Container>
    </>
  );
};

export default Home;
