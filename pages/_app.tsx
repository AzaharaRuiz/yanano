import "../styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraProvider } from "@chakra-ui/react";
import Context from "../context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Context>
  );
}

export default MyApp;
