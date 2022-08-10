import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

interface SectionProps {
  children: React.ReactNode;
  id: string;
  delay?: string;
}

export function Section({ children, id, delay = "0" }: SectionProps) {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: "0.8", delay }}
      mb={6}
      id={id}
    >
      {children}
    </StyledDiv>
  );
}
