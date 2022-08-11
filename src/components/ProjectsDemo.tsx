import { Button, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function ProjectsDemo() {
  return (
    <Flex>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
      >
        <SwiperSlide>
          <Flex w="full" h="450px" gap={24} align="center" justify="center">
            <Image
              w="250px"
              h="200px"
              src="/projects/world-trip-demo.png"
              alt="Profile image"
            />
            <Button
              w="180px"
              height="45px"
              bg={useColorModeValue("purple.500", "greenLigth.600")}
              _hover={{ bg: useColorModeValue("purple.700", "greenLigth.700") }}
              color={useColorModeValue("whiteAlpha.900", "whiteAlpha.900")}
              mt={8}
            >
              Ver Projeto
            </Button>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Hello2</SwiperSlide>
      </Swiper>
    </Flex>
  );
}
