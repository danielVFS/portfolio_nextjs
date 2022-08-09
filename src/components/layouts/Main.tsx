import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import { Navbar } from "../Navbar";

interface MainProps {
  children: React.ReactNode;
  router: Router;
}

export function Main({ children, router }: MainProps) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Vitor - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="1200px" pt={14}>
        {children}
      </Container>
    </Box>
  );
}
