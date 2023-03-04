import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
      theme={{
        fontFamily: "Inter, sans-serif",
        colors: {
          black: ['#04152d', '#041226', '#020c1b'],
          blue: ['#1c4b91', '#173d77'],
          pink: ['#da2f68'],
          orange: ['#f89e00'],
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
