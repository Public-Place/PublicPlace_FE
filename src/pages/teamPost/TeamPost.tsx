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
  PostContent,
  PosterImage,
  PostHeader,
  PostHeaderLeft,
  PostHeaderRight,
  PostImage,
  Wrapper,
  WriteComment,
} from "../post/styles";
import { TeamPostDetail, TeamPosterName, TeamPostingDay } from "./styles";
import { FaEllipsisVertical } from "react-icons/fa6";
import KakaoMap from "../../components/map/KakaoMap";
import { InputTitle, LeftMiddleText } from "../../components/text/Text";
import { GoTrash } from "react-icons/go";
import { CommentInput } from "../../components/input/Input";
import { WriteCommentBtn } from "../../components/button/Button";
import { useTeamPostEvent } from "./events";
import { useEffect } from "react";
import { KebabModal } from "../../components/modal/Modal";

export default function TeamPost() {
  const location = useLocation();
  const teamBoardId = location.state;

  const {
    teamPost,
    handleGetPostInfo,
    comment,
    setComment,
    handleClickWriteCommentBtn,
    handleClickDeleteCommentBtn,
    isWriter,
    handleAuthWriter,
    isKebabOpen,
    handleClickKebab,
  } = useTeamPostEvent();

  useEffect(() => {
    if (!teamBoardId) {
      alert("찾을 수 없는 게시글입니다.");
    } else {
      handleGetPostInfo(teamBoardId);
    }
  }, []);

  useEffect(() => {
    if (teamPost) {
      handleAuthWriter();
    }
  }, [teamPost]);

  return (
    <Container>
      <Advertisement></Advertisement>
      <Wrapper>
        <PostHeader>
          <PostHeaderLeft>
            <PosterImage>
              <img
                src={teamPost?.profileImg}
                alt="error"
                style={{
                  width: "4rem",
                  height: "4rem",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "1px solid white",
                }}
              />
            </PosterImage>
            <TeamPostDetail>
              <TeamPosterName>{teamPost?.userName}</TeamPosterName>
              <TeamPostingDay>
                {teamPost?.createdDate
                  ? `${new Date(teamPost.createdDate).getFullYear()}년 ${String(
                      new Date(teamPost.createdDate).getMonth() + 1
                    ).padStart(2, "0")}월 ${String(
                      new Date(teamPost.createdDate).getDate()
                    ).padStart(2, "0")}일 ${String(
                      new Date(teamPost.createdDate).getHours()
                    ).padStart(2, "0")}:${String(
                      new Date(teamPost.createdDate).getMinutes()
                    ).padStart(2, "0")}`
                  : ""}
              </TeamPostingDay>
            </TeamPostDetail>
          </PostHeaderLeft>
          {isWriter ? (
            <PostHeaderRight>
              <FaEllipsisVertical
                size={25}
                style={{ cursor: "pointer" }}
                onClick={handleClickKebab}
              />
              {isKebabOpen && (
                <KebabModal postId={teamBoardId} isTeamPost={true} />
              )}
            </PostHeaderRight>
          ) : (
            <PostHeaderRight>
              <></>
            </PostHeaderRight>
          )}
        </PostHeader>
        <PostContent>
          {teamPost?.content?.split("\n").map((line, index) => (
            <span key={index} style={{ margin: "0.25rem 0rem" }}>
              {line}
              <br />
            </span>
          ))}
        </PostContent>
        <PostImage>
          {teamPost?.image && teamPost.image.startsWith("http") ? (
            <img
              src={teamPost?.image}
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
        <div
          style={{
            height: "1rem",
          }}
        />
        {teamPost?.matchLocation && (
          <>
            <LeftMiddleText text={"활동 장소"} />
            <KakaoMap
              Lat={teamPost?.latitude}
              Lng={teamPost?.longitude}
              height={"20rem"}
              isShow={true}
            />
          </>
        )}
        <hr
          style={{
            width: "100%",
            marginBlock: "2rem",
          }}
        />
        {teamPost?.comments?.map((comment) => (
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
                  <CommenterNickname>{comment.userName}</CommenterNickname>
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
                onClick={() => handleClickDeleteCommentBtn(comment.commentId)}
              />
            </CommenterRight>
          </Commenter>
        ))}
        <WriteComment
          tabIndex={0} // 키보드 입력을 받기 위한 tabIndex 설정
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleClickWriteCommentBtn(teamBoardId);
            }
          }}
        >
          <InputTitle text={"댓글 작성"} />
          <CommentInputAndBtn>
            <CommentInputArea>
              <CommentInput value={comment} setValue={setComment} />
            </CommentInputArea>
            <CommentBtnArea>
              <WriteCommentBtn
                handleCreateComment={() =>
                  handleClickWriteCommentBtn(teamBoardId)
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
