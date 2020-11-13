import styled, { css } from "styled-components";

export const ContainerCard = styled.div`
  background: ${(props) => props.color};
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px 10px 30px;
  position: relative;
  cursor: pointer;
  ::after {
    content: "";
    width: 10px;
    height: 10px;
    background: ${(props) => props.color};
    border-radius: 50%;
    position: absolute;
    right: ${(props) =>
      props.pointUbication === "right" ? "-20px" : "initial"};
    left: ${(props) => (props.pointUbication === "left" ? "-20px" : "initial")};

    @media screen and (max-width: 375px) {
      right: ${(props) =>
        props.pointUbication === "right" ? "-16px" : "initial"};
      left: ${(props) =>
        props.pointUbication === "left" ? "-16px" : "initial"};
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    padding: 15px;
  }
`;
export const ContainerTitleYear = styled.div`
  width: calc(100% - 30px);
`;
export const Title = styled.p`
  font-size: 0.9em;
  line-height: 17px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 500px) {
    width: 83px;
  }
  @media screen and (max-width: 320px) {
    width: 70px;
  }
`;
export const Year = styled.p`
  line-height: 17px;
  font-size: 0.9em;
  color: white;
`;
export const ContainerImage = styled.div`
  width: 30px;
  height: 30px;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
`;
