import {
  Button,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { StackList } from "./StackList";

export function ProjectsDemo() {
  return (
    <Flex mt={28} mb={16}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
      >
        <SwiperSlide>
          <Flex gap={16} align="center" justify="center">
            <Image
              w="450px"
              h="300px"
              src="/projects/world-trip-demo.png"
              alt="Profile image"
              borderRadius="10"
            />
            <Flex flexDir="column">
              <Heading mb={2}>World Trip</Heading>
              <StackList
                stack={[
                  { tech: "React.js", image: "react" },
                  { tech: "Next.js", image: "next-js" },
                  { tech: "Chakra UI", image: "chakra" },
                  { tech: "Figma", image: "figma" },
                ]}
              />
              <Button
                w="180px"
                height="45px"
                mt={10}
                bg={useColorModeValue("purple.500", "greenLigth.600")}
                _hover={{
                  bg: useColorModeValue("purple.700", "greenLigth.700"),
                }}
                color={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
              >
                Ver Projeto
              </Button>
            </Flex>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Hello2</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
