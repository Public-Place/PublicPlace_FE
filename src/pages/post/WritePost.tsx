import { useEffect, useState } from "react";
import { InputTitle, PageCenterText } from "../../components/text/Text";
import {
  Advertisement,
  WriteInfo,
  Container,
  Wrapper,
  WriteCategory,
  WriteName,
  WriteTitle,
  WriteContent,
  WriteImage,
} from "./styles";
import {
  CategoryInput,
  ContentInput,
  FixNickNameInput,
  PostImageInput,
  TitleInput,
} from "../../components/input/Input";
import { WritePostBtn } from "../../components/button/Button";
import { useWritePostEvent } from "./events";
import { useMyInfoEvent } from "../myinfo/events";

export default function WritePost() {
  const { user, GetUserInfo } = useMyInfoEvent();
  const {
    postCategory,
    setpostCategory,
    postTitle,
    setPostTitle,
    postContent,
    setPostContent,
    postImage,
    postImageRef,
    handlePostImageClick,
    handleFileChange,
    handleClickWritePostBtn,
  } = useWritePostEvent();

  useEffect(() => {
    GetUserInfo();
  }, []);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PageCenterText text={"게시글 작성"} />
        <hr
          style={{ width: "100%", margin: "0rem 0rem", marginBottom: "1rem" }}
        />
        <WriteInfo>
          <WriteCategory>
            <InputTitle text={"카테고리"} />
            <CategoryInput value={postCategory} setValue={setpostCategory} />
          </WriteCategory>
          <WriteName>
            <InputTitle text={"작성자"} />
            <FixNickNameInput value={user?.nickname} />
          </WriteName>
        </WriteInfo>
        <WriteInfo>
          <WriteTitle>
            <InputTitle text={"제목"} />
            <TitleInput value={postTitle} setValue={setPostTitle} />
          </WriteTitle>
        </WriteInfo>
        <WriteInfo align={"space-between"}>
          <WriteContent>
            <InputTitle text={"내용"} />
            <ContentInput value={postContent} setValue={setPostContent} />
          </WriteContent>
          <WriteImage>
            <InputTitle text={"첨부 이미지"} />
            <>
              <PostImageInput
                src={postImage}
                handlePostImageClick={handlePostImageClick}
              />
              <input
                type="file"
                style={{ display: "none" }}
                ref={postImageRef}
                onChange={handleFileChange}
                accept="image/*"
              />
            </>
          </WriteImage>
        </WriteInfo>
        <WriteInfo align="center">
          <WritePostBtn
            text={"작성"}
            handleClickWritePostBtn={handleClickWritePostBtn}
          />
        </WriteInfo>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
