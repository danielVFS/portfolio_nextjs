import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Main } from "../components/layouts/Main";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
