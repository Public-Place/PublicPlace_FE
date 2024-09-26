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
  width: 25%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: fit-content;
  min-height: 100%;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  color: white;
  background-color: transparent;
`;

export const Information = styled.div`
  width: calc(100% - 4rem);
  height: fit-content;

  padding: 0rem 2rem;

  display: flex;
  align-items: end;
  justify-content: start;
  flex-direction: row;

  border-bottom: 1px solid white;
  background-color: transparent;

  position: relative;
`;

export const Filter = styled.div`
  width: calc(100% - 4rem);
  height: fit-content;

  padding: 0.5rem 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SearchLayer = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const CategoryLayer = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
`;

export const PostContainer = styled.div`
  width: calc(100% - 6rem);
  height: fit-content;
  min-height: 38rem;

  padding: 0.2rem 1rem;
  padding-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  border: 1px solid white;
  border-radius: 1rem;

  background-color: #3c3c3c;
`;

export const Post = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0rem 0rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

export const PostIndex = styled.div`
  width: 3%;
  height: fit-content;

  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;

  background-color: transparent;
`;

export const PostInfo = styled.div`
  width: 97%;
  height: fit-content;

  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 0.3rem;

  background-color: transparent;
`;

export const PostMainInfo = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  background-color: transparent;
`;

export const PostCategory = styled.div`
  width: fit-content;
  min-width: 5rem;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  color: white;
`;

export const PostTitle = styled.div`
  width: fit-content;
  height: fit-content;

  margin-left: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;
  font-weight: bold;
`;

export const PostSubInfo = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;

  background-color: transparent;
`;

export const Poster = styled.div`
  width: fit-content;
  min-width: 5rem;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.6rem;
  color: darkgray;
`;

export const PostViews = styled.div`
  width: fit-content;
  min-width: 3.5rem;
  height: fit-content;

  margin-left: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 0.6rem;
  color: darkgray;
`;

export const PostRecommend = styled.div`
  width: fit-content;
  min-width: 3.5rem;
  height: fit-content;

  margin-left: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 0.6rem;
  color: darkgray;
`;

export const PostTime = styled.div`
  width: fit-content;
  min-width: 10rem;
  height: fit-content;

  margin-left: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 0.6rem;
  color: darkgray;
`;

export const PostComment = styled.div`
  width: fit-content;
  min-width: 3.5rem;
  height: fit-content;

  margin-left: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: start;

  font-size: 0.6rem;
  color: darkgray;
`;
