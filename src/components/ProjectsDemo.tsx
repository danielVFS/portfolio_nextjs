import {
  Button,
  Flex,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../core/data/ProjectsData";
import { StackList } from "./StackList";

export function ProjectsDemo() {
  const bgColorMode = useColorModeValue("purple.500", "greenLigth.600");
  const bgHoverColorMode = useColorModeValue("purple.700", "greenLigth.700");
  const colorMode = useColorModeValue("whiteAlpha.900", "whiteAlpha.900");

  return (
    <Flex mt={28} mb={16}>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.project_name}>
              <Flex
                gap={[8, 8, 8, 16]}
                flexDir={["column", "column", "column", "row"]}
                align="center"
                justify="center"
              >
                <Image
                  w="400px"
                  h="250px"
                  src={`/projects/${project.image}.png`}
                  alt="Profile image"
                  borderRadius="10"
                />
                <Flex flexDir="column">
                  <Heading mb={2}>{project.project_name}</Heading>
                  <StackList stack={project.stack} />
                  <Button
                    w="180px"
                    height="45px"
                    mt={10}
                    bg={bgColorMode}
                    _hover={{
                      bg: bgHoverColorMode,
                    }}
                    color={colorMode}
                  >
                    Ver Projeto
                  </Button>
                </Flex>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
