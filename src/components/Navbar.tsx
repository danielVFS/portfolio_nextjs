import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { LinkItem } from "./LinkItem";
import { Logo } from "./Logo";

interface NavbarProps {
  path: string;
}

export function Navbar({ path, ...props }: NavbarProps) {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202328")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      mt={1}
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Projetos
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/danielVFS/portfolio_nextjs"
            path={path}
            display="inline-flex"
            alignItems="center"
            gap={2}
            pl={2}
          >
            <IoLogoGithub />
            Código
          </LinkItem>
        </Stack>

        <Box display="flex" flex={1} justifyContent="flex-end">
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Projetos</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/danielVFS/portfolio_nextjs"
                  passHref
                >
                  <a target="_blank">
                    <MenuItem as={Link}> Ver código</MenuItem>
                  </a>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
