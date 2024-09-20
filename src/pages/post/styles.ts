import styled from "styled-components";
import { DefaultBackgroundColor } from "../../constants/FixValues";

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;

  background-color: ${DefaultBackgroundColor};
`;

export const Advertisement = styled.div`
  width: 30%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 40%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  color: white;
  background-color: transparent;
`;

export const PostHeader = styled.div`
  width: 100%;
  height: fit-content;

  padding: 2rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const PostHeaderLeft = styled.div`
  width: 90%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  background-color: transparent;
`;

export const PostHeaderRight = styled.div`
  width: 10%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;

  background-color: transparent;
`;

export const PostCategory = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0rem 1rem;

  font-size: 1.8rem;
  font-weight: bold;

  background-color: transparent;
`;

export const PostTitle = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0rem 0rem;
  margin-left: 0.5rem;

  font-size: 1.6rem;
  font-weight: bold;

  background-color: transparent;
`;

export const PostDetail = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const PostDetailLeft = styled.div`
  width: 60%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  background-color: transparent;
`;

export const PostDetailRight = styled.div`
  width: 40%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;

  background-color: transparent;
`;

export const PosterImage = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const PosterNickname = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
`;

export const PostingTime = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: darkgray;
  font-size: 0.8rem;
`;

export const PostViews = styled.div`
  width: fit-content;
  height: fit-content;

  margin-right: 1rem;

  color: darkgray;
  font-size: 0.6rem;
`;

export const PostLikes = styled.div`
  width: fit-content;
  height: fit-content;

  margin-right: 1rem;

  color: darkgray;
  font-size: 0.6rem;
`;

export const PostComments = styled.div`
  width: fit-content;
  height: fit-content;

  color: darkgray;
  font-size: 0.6rem;
`;

export const PostContent = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1.5rem 0rem;

  display: flex;
  align-items: start;
  justify-content: start;

  background-color: transparent;
`;

export const PostImage = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const Commenter = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const CommenterLeft = styled.div`
  width: 90%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  background-color: transparent;
`;

export const CommenterRight = styled.div`
  width: 10%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: row;

  background-color: transparent;
`;

export const CommenterImage = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const CommenterInfo = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 1rem;

  gap: 0.5rem;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

export const NicknameAndTime = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: row;

  background-color: transparent;
`;

export const CommenterNickname = styled.div`
  width: fit-content;
  height: fit-content;

  font-size: 1rem;
  font-weight: bold;
`;

export const CommentTime = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 1rem;
  margin-bottom: 0.2rem;

  font-size: 0.6rem;

  background-color: transparent;
`;

export const CommentContent = styled.div`
  width: fit-content;
  height: fit-content;

  font-size: 0.8rem;

  background-color: transparent;
`;

export const WriteComment = styled.div`
  width: 100%;
  height: fit-content;

  padding: 1rem 0rem;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  background-color: transparent;
`;

export const CommentInputAndBtn = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: transparent;
`;

export const CommentInputArea = styled.div`
  width: 88%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const CommentBtnArea = styled.div`
  width: 10%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;
