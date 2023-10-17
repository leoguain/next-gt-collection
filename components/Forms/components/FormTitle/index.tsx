import { Flex, Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
  subtitle: string;
}

export const FormTitle = ({ title, subtitle }: TitleProps) => {
  return (
    <Flex flexDirection={"column"} mt={4}>
      <Text
        align={"center"}
        color={"secondary.100"}
        fontSize={"sm"}
        lineHeight={"25%"}
      >
        {subtitle}
      </Text>
      <Text align={"center"} color={"#fff"} fontSize={"lg"}>
        {title}
      </Text>
    </Flex>
  );
};
