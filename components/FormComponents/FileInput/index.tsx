import React from "react";
import { Input, Image, Flex } from "@chakra-ui/react";

const FileInput = ({ handleSelectImages }: any) => {
  return (
    <Flex align={"center"} flexDirection={"column"} gap={2}>
      <Image
        key={previewImage}
        src={previewImage}
        alt={previewImage}
        w="100px"
      />
      <Input
        onChange={handleSelectImages}
        type="file"
        accept="image/png"
        border="none"
        id="image[]"
        fontSize={"sm"}
        flexFlow={"wrap column"}
        isRequired
      />
    </Flex>
  );
};

export default FileInput;
