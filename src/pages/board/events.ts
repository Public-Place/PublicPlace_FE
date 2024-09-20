import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useBoardEvent = () => {
  const navigate = useNavigate();

  const [isAllClicked, setIsAllClicked] = useState(false);
  const [isFreeClicked, setIsFreeClicked] = useState(false);
  const [isWFootballClicked, setIsWFootballClicked] = useState(false);
  const [isKFootballClicked, setIsKFootballClicked] = useState(false);
  const [isWatchingGameClicked, setIsWatchingGameClicked] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [category, setCategory] = useState("");

  const [pageNum, setPageNum] = useState(1); // 현재 선택된 페이지 번호

  // 카테고리 '전체' 클릭 시
  const handleClickAll = () => {
    setCategory("전체");
    setIsAllClicked(true);
    setIsFreeClicked(false);
    setIsWFootballClicked(false);
    setIsKFootballClicked(false);
    setIsWatchingGameClicked(false);
  };

  // 카테고리 '자유' 클릭 시
  const handleClickFree = () => {
    setCategory("자유");
    setIsAllClicked(false);
    setIsFreeClicked(true);
    setIsWFootballClicked(false);
    setIsKFootballClicked(false);
    setIsWatchingGameClicked(false);
  };

  // 카테고리 '해외축구' 클릭 시
  const handleClickWFootball = () => {
    setCategory("해외축구");
    setIsAllClicked(false);
    setIsFreeClicked(false);
    setIsWFootballClicked(true);
    setIsKFootballClicked(false);
    setIsWatchingGameClicked(false);
  };

  // 카테고리 '국내축구' 클릭 시
  const handleClickKFootball = () => {
    setCategory("국내축구");
    setIsAllClicked(false);
    setIsFreeClicked(false);
    setIsWFootballClicked(false);
    setIsKFootballClicked(true);
    setIsWatchingGameClicked(false);
  };

  // 카테고리 '직관모임' 클릭 시
  const handleClickWatchingGame = () => {
    setCategory("직관모임");
    setIsAllClicked(false);
    setIsFreeClicked(false);
    setIsWFootballClicked(false);
    setIsKFootballClicked(false);
    setIsWatchingGameClicked(true);
  };

  // 특정 게시글 클릭 시
  const handleClickPost = (postId: number) => {
    navigate("/post", { state: postId });
  };

  return {
    sortBy,
    setSortBy,
    category,
    setCategory,
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
    handleClickPost,
  };
};
