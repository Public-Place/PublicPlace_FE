import { DataType } from "./types";

export const useReChartsEvent = () => {
  const initialData: DataType[] = [
    { name: "10대", uv: 0 },
    { name: "20대", uv: 0 },
    { name: "30대", uv: 0 },
    { name: "40대", uv: 0 },
    { name: "50대", uv: 0 },
    { name: "기타", uv: 0 },
  ];

  return {
    initialData,
  };
};
