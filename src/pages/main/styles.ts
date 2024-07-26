import styled from "styled-components";
import img from "../../assets/images/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: end;

  color: white;

  background-image: url(${img});
  background-size: cover;
`;

export const Slogan = styled.div`
  width: 40rem;
  height: 10rem;

  margin-right: 15rem;
  margin-bottom: 20rem;

  display: flex;
  align-items: center;
  justify-content: end;

  text-align: end;

  font-size: 4rem;
  color: white;
`;
