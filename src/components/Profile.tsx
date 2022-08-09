import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex flexDir={["column", "row"]} justify="space-between">
      <Box>
        <Heading as="h2" variant="page-title">
          Daniel Vitor
        </Heading>
        <p>Desenvolvedor Frontend (React.js / Angular)</p>
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Image
          src="/images/profile.jpg"
          alt="Profile image"
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          maxW="100px"
          display="inline-block"
          borderRadius="full"
        />
      </Box>
    </Flex>
  );
}
