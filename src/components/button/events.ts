import { useState } from "react";

export const useButtonEvent = () => {
  const [userName, setUserName] = useState("");

  const loginLogic = () => {
    if (userName) {
      setUserName("");
      alert("로그아웃 되었습니다.");
    } else {
      const name = prompt("이름을 입력하세요 :");
      if (name == "김영훈") {
        setUserName(name);
        alert("로그인 되었습니다.");
      } else {
        alert("이름이 일치하지 않습니다.\n다시 시도해주세요.");
      }
    }
  };

  return { loginLogic, userName };
};
