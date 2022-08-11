import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { SkillsAndExperience } from "../components/home/SkillsAndExperience";
import { WorksDemo } from "../components/home/WorksDemo";
import { Layout } from "../components/layouts/Layout";
import { Section } from "../components/Section";

const Bio = dynamic(() => import("../components/home/Bio"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Container
        maxW="1200px"
        display="flex"
        flexDir="column"
        gap={6}
        mt={6}
        mb={6}
      >
        <Bio />

        <Section id="skills" delay="0.1">
          <Heading as="h3" mt={[16, 16, 0]} variant="section-title">
            Alguns Projetos
          </Heading>
          <WorksDemo />
        </Section>
      </Container>
      <Container maxW="1200px" display="flex" flexDir="column" gap={6} mt={6}>
        <Section id="skills" delay="0.1">
          <Heading as="h3" variant="section-title">
            Habilidades e Experiências
          </Heading>
          <SkillsAndExperience />
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
