import { Dispatch, SetStateAction, useState } from "react";

export const usePagingEvent = ({
  setPageNum,
}: {
  setPageNum: Dispatch<SetStateAction<number>>;
}) => {
  const [pageRange, setPageRange] = useState([1, 10]); // 현재 표시할 페이지 범위

  const handlePageClick = (num: SetStateAction<number>) => {
    setPageNum(num);
  };

  const handleNext = () => {
    setPageRange([pageRange[0] + 10, pageRange[1] + 10]);
  };

  const handlePrevious = () => {
    if (pageRange[0] > 1) {
      setPageRange([pageRange[0] - 10, pageRange[1] - 10]);
    }
  };

  return {
    setPageNum,
    pageRange,
    handlePageClick,
    handleNext,
    handlePrevious,
  };
};
