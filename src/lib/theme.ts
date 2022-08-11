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
      color: "#ffba08",
    },
    ".swiper-pagination-bullet": {
      w: "12px",
      h: "12px",
      bg: "#999999",
      opacity: "1",
    },
    ".swiper-pagination-bullet-active": {
      background: "#ffba08",
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
  greenLigth400: "#7CB591",
  greenLigth600: " #407253",
  greenLigth700: "#2e523b",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
