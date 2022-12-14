import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <a
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LogoBox>
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
  gap: 5px;

  &:hover img {
    transform: rotate(20deg);
  }
`;
