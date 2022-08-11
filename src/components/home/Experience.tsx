import { Flex } from "@chakra-ui/react";
import { jobs } from "../../core/data/ExperienceData";
import { ExperienceDescription } from "./ExperienceDescription";
import { Timeline } from "./Timeline";

export function Experience() {
  return (
    <Flex
      mt={12}
      mb={8}
      gap={16}
      flexDir="column"
      align="flex-start"
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
