import { useLocation } from "react-router-dom";
import {
  Advertisement,
  CommentBtnArea,
  CommentContent,
  Commenter,
  CommenterImage,
  CommenterInfo,
  CommenterLeft,
  CommenterNickname,
  CommenterRight,
  CommentInputAndBtn,
  CommentInputArea,
  CommentTime,
  Container,
  NicknameAndTime,
  PostCategory,
  PostComments,
  PostContent,
  PostDetail,
  PostDetailLeft,
  PostDetailRight,
  PosterImage,
  PosterNickname,
  PostHeader,
  PostHeaderLeft,
  PostHeaderRight,
  PostImage,
  PostingTime,
  PostLikes,
  PostTitle,
  PostViews,
  Wrapper,
  WriteComment,
} from "./styles";
import { FaEllipsisVertical } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { InputTitle } from "../../components/text/Text";
import { CommentInput } from "../../components/input/Input";
import { WriteCommentBtn } from "../../components/button/Button";
import { usePostEvent } from "./events";
import { useEffect } from "react";
import { KebabModal } from "../../components/modal/Modal";

export default function Post() {
  // 클릭한 게시글의 postId
  const location = useLocation();
  const postId = location.state;

  const {
    postInfo,
    handleGetPostInfo,
    newComment,
    setNewComment,
    handleCreateComment,
    handleDeleteComment,
    isKebabOpen,
    handleClickKebab,
  } = usePostEvent({ postId });

  useEffect(() => {
    handleGetPostInfo();
  }, []);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PostHeader>
          <PostHeaderLeft>
            <PostCategory>{postInfo?.category}</PostCategory>
            <PostTitle>{postInfo?.title}</PostTitle>
          </PostHeaderLeft>
          <PostHeaderRight>
            <FaEllipsisVertical
              size={25}
              style={{ cursor: "pointer" }}
              onClick={handleClickKebab}
            />
            {isKebabOpen && <KebabModal postId={postId} />}
          </PostHeaderRight>
        </PostHeader>
        <PostDetail>
          <PostDetailLeft>
            <PosterImage>
              <img
                src={postInfo?.profileImg}
                alt="Profile"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid white",
                }}
              />
            </PosterImage>
            <PosterNickname>{postInfo?.authorNickname}</PosterNickname>
            <PostingTime>
              {postInfo?.createdDate
                ? `${new Date(postInfo.createdDate).getFullYear()}년 ${String(
                    new Date(postInfo.createdDate).getMonth() + 1
                  ).padStart(2, "0")}월 ${String(
                    new Date(postInfo.createdDate).getDate()
                  ).padStart(2, "0")}일 ${String(
                    new Date(postInfo.createdDate).getHours()
                  ).padStart(2, "0")}:${String(
                    new Date(postInfo.createdDate).getMinutes()
                  ).padStart(2, "0")}`
                : ""}
            </PostingTime>
          </PostDetailLeft>
          <PostDetailRight>
            <PostViews>조회 수 {postInfo?.viewCount}</PostViews>
            <PostLikes>추천 {postInfo?.likeCount}</PostLikes>
            <PostComments>댓글 수 {postInfo?.commentCount}</PostComments>
          </PostDetailRight>
        </PostDetail>
        <PostContent>
          {postInfo?.content?.split("\n").map((line, index) => (
            <span key={index} style={{ margin: "0.25rem 0rem" }}>
              {line}
              <br />
            </span>
          ))}
        </PostContent>
        <PostImage>
          {postInfo?.postImg && postInfo.postImg.startsWith("http") ? (
            <img
              src={postInfo.postImg}
              alt="postImg"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                border: "1px solid white",
              }}
            />
          ) : (
            <></>
          )}
        </PostImage>
        <hr style={{ width: "100%", margin: "2rem 0rem" }} />
        {postInfo?.comments?.map((comment) => (
          <Commenter key={comment.commentId}>
            <CommenterLeft>
              <CommenterImage>
                <img
                  src={comment.profileImg} // 프로필 이미지가 없을 경우 기본 이미지 사용
                  alt="Commenter Profile"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    objectFit: "cover",
                    borderRadius: "50%",
                    border: "1px solid white",
                  }}
                />
              </CommenterImage>
              <CommenterInfo>
                <NicknameAndTime>
                  <CommenterNickname>{comment.nickname}</CommenterNickname>
                  <CommentTime>
                    {comment.createdDate
                      ? `${new Date(
                          comment.createdDate
                        ).getFullYear()}년 ${String(
                          new Date(comment.createdDate).getMonth() + 1
                        ).padStart(2, "0")}월 ${String(
                          new Date(comment.createdDate).getDate()
                        ).padStart(2, "0")}일 ${String(
                          new Date(comment.createdDate).getHours()
                        ).padStart(2, "0")}:${String(
                          new Date(comment.createdDate).getMinutes()
                        ).padStart(2, "0")}`
                      : ""}
                  </CommentTime>
                </NicknameAndTime>
                <CommentContent>{comment.content}</CommentContent>
              </CommenterInfo>
            </CommenterLeft>
            <CommenterRight>
              <GoTrash
                size={25}
                style={{ cursor: "pointer" }}
                onClick={() => handleDeleteComment(comment.commentId)}
              />
            </CommenterRight>
          </Commenter>
        ))}
        <WriteComment
          tabIndex={0} // 키보드 입력을 받기 위한 tabIndex 설정
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleCreateComment({ newComment, postId });
            }
          }}
        >
          <InputTitle text={"댓글 작성"} />
          <CommentInputAndBtn>
            <CommentInputArea>
              <CommentInput value={newComment} setValue={setNewComment} />
            </CommentInputArea>
            <CommentBtnArea>
              <WriteCommentBtn
                handleCreateComment={() =>
                  handleCreateComment({ newComment, postId })
                }
              />
            </CommentBtnArea>
          </CommentInputAndBtn>
        </WriteComment>
      </Wrapper>
      <Advertisement></Advertisement>
    </Container>
  );
}
