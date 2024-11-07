import { InterestSubTitle, InterestTitle } from "../text/Text";
import { InterestContainer } from "./styles";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoBarChart } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";

export const Interest01 = () => {
  return (
    <InterestContainer>
      <div style={{ width: "100%", textAlign: "center" }}>
        <FaPeopleGroup color="white" size={100} />
      </div>
      <div style={{ height: "1.5rem" }} />
      <InterestTitle text={"회원 수"} />
      <div style={{ height: "1.5rem" }} />
      <InterestSubTitle text={"원하는 팀 규모를 선택하세요."} />
      <InterestSubTitle
        text={
          "큰 규모의 팀에서는 다양한 사람들과 활동할 수 있으며, 작은 규모의 팀에서는 더 끈끈한 팀워크를 경험할 수 있습니다."
        }
      />
    </InterestContainer>
  );
};

export const Interest02 = () => {
  return (
    <InterestContainer>
      <div style={{ width: "100%", textAlign: "center" }}>
        <IoBarChart color="white" size={100} />
      </div>
      <div style={{ height: "1.5rem" }} />
      <InterestTitle text={"평균 연령대"} />
      <div style={{ height: "1.5rem" }} />
      <InterestSubTitle
        text={
          "팀원들의 연령대에 따라 비슷한 나이대의 사람들과 함께 편안하게 축구를 즐길 수 있습니다. 나와 잘 맞는 연령대의 팀을 찾아보세요."
        }
      />
    </InterestContainer>
  );
};

export const Interest03 = () => {
  return (
    <InterestContainer>
      <div style={{ width: "100%", textAlign: "center" }}>
        <IoCalendarOutline color="white" size={100} />
      </div>
      <div style={{ height: "1.5rem" }} />
      <InterestTitle text={"창단일"} />
      <div style={{ height: "1.5rem" }} />
      <InterestSubTitle
        text={
          "팀의 역사와 경험을 중요하게 생각한다면, 창단일을 기준으로 오래된 팀의 전통을 경험하거나 새로 창단된 팀에서 신선한 분위기를 느껴보세요. "
        }
      />
    </InterestContainer>
  );
};

export const Interest04 = () => {
  return (
    <InterestContainer>
      <div style={{ width: "100%", textAlign: "center" }}>
        <GrMapLocation color="white" size={100} />
      </div>
      <div style={{ height: "1.5rem" }} />
      <InterestTitle text={"활동 장소"} />
      <div style={{ height: "1.5rem" }} />
      <InterestSubTitle
        text={
          "내가 원하는 지역에 있는 팀을 찾아 쉽게 접근할 수 있습니다. 가까운 위치에서 정기적으로 모임을 가지며 활동하는 팀을 선택해보세요."
        }
      />
    </InterestContainer>
  );
};
