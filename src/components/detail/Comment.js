import React from "react";
import Card from "../ui/Card";
import Stack from "../ui/Stack";
import MyButton from "../ui/MyButton";

const Comment = ({ comment }) => {
  return (
    <Card
      shadow={"0 2px 10px rgba(0, 0, 0, 0.15)"}
      borderColor={"var(--color-point2)"}
      pd={"0.1rem 2rem "}
      gap={"1rem"}
      wd="30rem"
      direction={"column"}
    >
      <Stack align={"flex-start"} direction={"column"}>
        <h3>{comment.nickname}</h3>
        <span>{comment.content}</span>
      </Stack>
      <Stack direction={"row"} justify="flex-end">
        <MyButton border="none" shadow={"0 2px 4px rgba(0, 0, 0, 0.3)"}>
          삭제
        </MyButton>
      </Stack>
    </Card>
  );
};

export default Comment;
