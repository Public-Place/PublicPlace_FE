export interface DataType {
  name: string;
  uv: number;
}

export interface AgeData {
  ageData: number[];
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number }[];
}
