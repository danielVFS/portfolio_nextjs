import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#d3d3d3", "#202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Text: {
    variants: {
      userName: (props: any) => ({
        fontSize: 24,
        fontWeight: "bold",
        color: mode("darkBlue", "greenLigth")(props),
      }),
      job: (props: any) => ({
        fontSize: 18,
        fontWeight: "bold",
        color: mode("darkBlue", "greenLigth")(props),
      }),
    },
  },
  Link: {
    baseStyle: (props: any) => ({
      color: mode("darkBlue", "greenLigth")(props),
      fontWeight: "bold",
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
  greenLigth: "#35F7C2",
  darkBlue: "#3d7aed",
  darkAqua: "#163840",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
