import { Flex } from "@chakra-ui/react";
import { ExperienceDescription } from "./ExperienceDescription";
import { Timeline } from "./Timeline";

const jobs = [
  {
    initialDate: "2021",
    finalDate: "Atual",
    occupation: "Desenvolvedor Frontend",
    at: "GoGeo",
    stack: [
      { tech: "React.js", image: "react" },
      { tech: "Angular", image: "angular" },
    ],
  },
  {
    initialDate: "2020",
    finalDate: "2021",
    occupation: "Desenvolvedor Fullstack",
    at: "Freelancer",
    stack: [
      { tech: "React.js", image: "react" },
      { tech: "Spring Boot", image: "spring-boot" },
    ],
  },
];

export function Experience() {
  return (
    <Flex
      mt={12}
      mb={8}
      gap={16}
      flexDir="column"
      align="center"
      justify="center"
    >
      {jobs.map((job, idx) => {
        return (
          <Flex gap={6} key={idx} align="center" justify="center">
            <Timeline initialDate={job.initialDate} finalDate={job.finalDate} />
            <ExperienceDescription
              occupation={job.occupation}
              at={job.at}
              stack={job.stack}
            />
          </Flex>
        );
      })}
    </Flex>
  );
}
