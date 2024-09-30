import {
  LeftAndRightBtn,
  PageRange,
  PaginationContainer,
  SpecificPage,
  TeamPagination,
} from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { GoDotFill, GoDot } from "react-icons/go";
import { usePagingEvent } from "./events";
import { PagingType } from "./types";

export const Paging = ({ pageNum, setPageNum }: PagingType) => {
  const { pageRange, handlePageClick, handleNext, handlePrevious } =
    usePagingEvent({ setPageNum });

  return (
    <PaginationContainer>
      <LeftAndRightBtn onClick={handlePrevious}>
        <FaAngleLeft size={"1.5rem"} />
      </LeftAndRightBtn>
      <PageRange>
        {Array.from({ length: 10 }, (_, i) => i + pageRange[0]).map((num) => (
          <SpecificPage
            key={num}
            onClick={() => handlePageClick(num)}
            style={{
              fontWeight: pageNum === num ? "bold" : "normal",
              fontSize: pageNum === num ? "1.3rem" : "1rem",
            }}
          >
            {num}
          </SpecificPage>
        ))}
      </PageRange>
      <LeftAndRightBtn onClick={handleNext}>
        <FaAngleRight size={"1.5rem"} />
      </LeftAndRightBtn>
    </PaginationContainer>
  );
};

export const TeamPaging = ({ currentIndex }: { currentIndex: number }) => {
  const totalDots = 5;

  return (
    <TeamPagination>
      {Array.from({ length: totalDots }, (_, index) =>
        index === currentIndex ? (
          <GoDotFill key={index} style={{ cursor: "pointer" }} />
        ) : (
          <GoDot key={index} style={{ cursor: "pointer" }} />
        )
      )}
    </TeamPagination>
  );
};
