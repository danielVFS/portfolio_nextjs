import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  const logoImg = `/images/d-logo.png`;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImg} width={25} height={25} alt="logo" />
          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontWeight="semibold"
            fontFamily='M PLUS Rounded 1c", sans-serif'
            ml={3}
          >
            Daniel Vitor
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
}

const LogoBox = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;
