import { useEffect, useState } from "react";
import { BoardRulesBtn, CategoryBtn } from "../../components/button/Button";
import { SearchPost, SortPostInput } from "../../components/input/Input";
import { PageLeftText } from "../../components/text/Text";
import { useBoardEvent } from "./events";
import {
  Advertisement,
  CategoryLayer,
  Container,
  Filter,
  Information,
  Post,
  PostCategory,
  PostComment,
  PostContainer,
  Poster,
  PostIndex,
  PostInfo,
  PostMainInfo,
  PostRecommend,
  PostSubInfo,
  PostTime,
  PostTitle,
  PostViews,
  SearchLayer,
  Wrapper,
} from "./styles";
import { Paging } from "../../components/pagination/Paging";
import { GetPostsAPI } from "../../services/api/post/GetPostsAPI";
import { PostType } from "./types";

export default function Board() {
  const {
    sortBy,
    setSortBy,
    category,
    isAllClicked,
    isFreeClicked,
    isWFootballClicked,
    isKFootballClicked,
    isWatchingGameClicked,
    handleClickAll,
    handleClickFree,
    handleClickWFootball,
    handleClickKFootball,
    handleClickWatchingGame,
    pageNum,
    setPageNum,
  } = useBoardEvent();

  const [posts, setPosts] = useState<PostType[]>([]);

  // 기본 카테고리는 '전체'로 설정
  // 기본 정렬 방식은 '최신 순'으로 설정
  useEffect(() => {
    handleClickAll();
    setSortBy("createdAt");
  }, []);

  // 테스트 코드
  useEffect(() => {
    if (category && sortBy && pageNum) {
      const getPosts = async () => {
        const postArray = await GetPostsAPI({ category, sortBy, pageNum });
        // console.log("postArray : ", postArray);
        setPosts(postArray);
      };

      getPosts();
      // console.log("posts : ", posts);
    }
  }, [category, sortBy, pageNum]);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <Information>
          <PageLeftText text={"게시판"} />
          <BoardRulesBtn />
        </Information>
        <Filter>
          <SearchLayer>
            <div
              style={{
                width: "7rem",
              }}
            >
              <SortPostInput value={sortBy} setValue={setSortBy} />
            </div>
            <div
              style={{
                width: "20rem",
              }}
            >
              <SearchPost />
            </div>
          </SearchLayer>
          <CategoryLayer>
            <CategoryBtn
              text={"전체"}
              handleClick={handleClickAll}
              isClicked={isAllClicked}
            />
            <CategoryBtn
              text={"자유"}
              handleClick={handleClickFree}
              isClicked={isFreeClicked}
            />
            <CategoryBtn
              text={"해외축구"}
              handleClick={handleClickWFootball}
              isClicked={isWFootballClicked}
            />
            <CategoryBtn
              text={"국내축구"}
              handleClick={handleClickKFootball}
              isClicked={isKFootballClicked}
            />
            <CategoryBtn
              text={"직관모임"}
              handleClick={handleClickWatchingGame}
              isClicked={isWatchingGameClicked}
            />
          </CategoryLayer>
        </Filter>
        <div style={{ width: "100%", padding: "0rem 2rem" }}>
          <PostContainer>
            {posts.map((post, index) => (
              <>
                <Post key={post.postId}>
                  <PostIndex>{post.postId}</PostIndex>
                  <PostInfo>
                    <PostMainInfo>
                      <PostCategory>{post.category}</PostCategory>
                      <PostTitle>{post.title}</PostTitle>
                    </PostMainInfo>
                    <PostSubInfo>
                      <Poster>{post.authorNickname}</Poster>
                      <PostViews>조회 수 {post.viewCount}</PostViews>
                      <PostComment>댓글 수 {post.commentCount}</PostComment>
                      <PostRecommend>추천 {post.likeCount}</PostRecommend>
                      <PostTime>
                        {`${new Date(
                          post.createdDate
                        ).getFullYear()}년 ${String(
                          new Date(post.createdDate).getMonth() + 1
                        ).padStart(2, "0")}월 ${String(
                          new Date(post.createdDate).getDate()
                        ).padStart(2, "0")}일`}{" "}
                        {`${String(
                          new Date(post.createdDate).getHours()
                        ).padStart(2, "0")}:${String(
                          new Date(post.createdDate).getMinutes()
                        ).padStart(2, "0")}`}
                      </PostTime>
                    </PostSubInfo>
                  </PostInfo>
                </Post>
                {index !== 9 && (
                  <hr
                    style={{
                      width: "100%",
                      padding: "0",
                      margin: "0.29rem 0rem",
                    }}
                  />
                )}
              </>
            ))}
          </PostContainer>
        </div>
        <Paging pageNum={pageNum} setPageNum={setPageNum} />
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
