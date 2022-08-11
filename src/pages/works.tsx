import { Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { SkillsAndExperience } from "../components/home/SkillsAndExperience";
import { Layout } from "../components/layouts/Layout";
import { Section } from "../components/Section";

const Works: NextPage = () => {
  return (
    <Layout title="Trabalhos">
      <Container maxW="1200px" display="flex" flexDir="column" gap={6} mt={6}>
        <Section id="works" delay="0.1">
          <Heading as="h3" variant="section-title">
            Trabalhos
          </Heading>
          <SkillsAndExperience />
        </Section>
      </Container>
    </Layout>
  );
};

export default Works;
