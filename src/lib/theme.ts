import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: mode("#d3d3d3", "#202023")(props),
    },
    ".swiper-button-prev": {
      left: "45px",
    },
    ".swiper-button-next": {
      right: "45px",
    },
    ".swiper-button-prev:after, .swiper-button-next:after": {
      color: mode("purple.500", "greenLigth.400")(props),
    },
    ".swiper-pagination-bullet": {
      w: "12px",
      h: "12px",
      bg: "gray.400",
      opacity: "1",
    },
    ".swiper-pagination-bullet-active": {
      bg: mode("purple.500", "greenLigth.400")(props),
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
  Link: {
    baseStyle: (props: any) => ({
      fontWeight: "bold",
    }),
  },
};

const fonts = {
  heading: "'Poppins'",
  body: "'Poppins'",
};

const colors = {
  grassTeal: "#88ccca",
  greenLigth: {
    400: "#7CB591",
    600: "#407253",
    700: "#2e523b",
  },
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
