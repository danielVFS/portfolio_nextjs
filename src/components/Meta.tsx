import { Badge } from "@chakra-ui/react";

interface MetaProps {
  children: string;
}

export function Meta({ children }: MetaProps) {
  return (
    <Badge
      display="flex"
      colorScheme="green"
      alignItems="center"
      justifyContent="center"
      height="20px"
    >
      {children}
    </Badge>
  );
}
