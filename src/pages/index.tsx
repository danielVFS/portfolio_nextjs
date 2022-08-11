import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "../components/layouts/Layout";
import { ProjectsDemo } from "../components/ProjectsDemo";
import { Section } from "../components/Section";
import { SkillsAndExperience } from "../components/SkillsAndExperience";

const Bio = dynamic(() => import("../components/Bio"), {
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
          <Heading as="h3" variant="section-title">
            Alguns Projetos
          </Heading>
          <ProjectsDemo />
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
