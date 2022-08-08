import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface LinkItemProps {
  href: string;
  path: string;
  children: React.ReactNode;
}

export function LinkItem({ href, path, children, ...props }: LinkItemProps) {
  const active = path === "href";
  const inactiveColor = useColorModeValue("gray.200", "whiteAlpha.200");

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
}
