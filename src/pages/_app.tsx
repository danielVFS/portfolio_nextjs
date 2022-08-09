import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Main } from "../components/layouts/Main";
import theme from "../lib/theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
}

export default MyApp;
