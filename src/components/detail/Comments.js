import React from "react";
import styled from "styled-components";
import Card from "../ui/Card";
import Sbutton from "../ui/Sbutton";
import Stack from "../ui/Stack";
const Comments = () => {
  const commentArr = [
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
    { userName: "test", comment: "comment" },
  ];
  return (
    <Stack justify={'flex-start'} gap={"2rem"} flexGrow={1} pd={"2rem 0"} direction={"column"}>
      {commentArr.map((comment) => (
        <Card shadow={'0 2px 10px rgba(0, 0, 0, 0.15)'} borderColor={'var(--color-point2)'} pd={'2rem'} gap={'1rem'} wd="30rem" hg="10rem" direction={"column"}>
          <Stack align={'flex-start'} direction={'column'}>
            <h3>{comment.userName}</h3>
            <sapn>{comment.comment}</sapn>
          </Stack>
          <Stack direction={"row"} justify="flex-end">
            <Sbutton border='none' shadow={'0 2px 4px rgba(0, 0, 0, 0.3)'}>삭제</Sbutton>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default Comments;
