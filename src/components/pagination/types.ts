import { Dispatch, SetStateAction } from "react";

export interface PagingType {
  pageNum: number;
  setPageNum: Dispatch<SetStateAction<number>>;
}
