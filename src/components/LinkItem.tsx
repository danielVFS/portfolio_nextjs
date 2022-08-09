import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface LinkItemProps {
  href: string;
  path: string;
  target?: string;
  children: React.ReactNode;
  [x: string]: any;
}

export function LinkItem({
  href,
  path,
  target,
  children,
  ...props
}: LinkItemProps) {
  const active = path === "href";
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
}
