import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { AgeData, CustomTooltipProps, DataType } from "./types";
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

// 막대 그래프 hover 시 출력되는 텍스트 박스
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return <Tooptip>{`${payload[0].value} 명`}</Tooptip>;
  }

  return null;
};
