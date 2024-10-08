import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  LabelList,
} from "recharts";
import { AgeData, DataType } from "./types";
import { useReChartsEvent } from "./events";
import { Tooptip } from "./styles";

// 팀 회원 나이 분포도
export const BarCharts = ({ ageData }: AgeData) => {
  const { initialData } = useReChartsEvent();
  const [data, setData] = useState<DataType[]>(initialData);

  useEffect(() => {
    if (ageData && ageData.length === 6) {
      // ageData 배열을 data의 uv 필드에 매핑
      const updatedData = initialData.map((item, index) => ({
        ...item,
        uv: ageData[index],
      }));
      setData(updatedData);
    }
  }, [ageData]);

  return (
    <ResponsiveContainer width="90%" height="80%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip content={<CustomTooltip />} shared={false} />
        <Bar dataKey="uv" fill="white" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

// 커스텀 Tooltip 컴포넌트
interface CustomTooltipProps {
  active?: boolean;
  payload?: { name: string; value: number }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <Tooptip>{`${payload[0].value} 명`}</Tooptip>;
  }

  return null;
};
