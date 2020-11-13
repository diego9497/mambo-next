import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  height: calc(100vh - var(--headerHeight) * 2);
`;

export const ContainerList = styled.div`
  width: ${({ open }) => (open ? "100%" : "65%")};
  height: 100%;
  padding-top: 40px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(80, 21, 21, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(175, 175, 175, 0.3);
    border-radius: 4px;
  }

  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-top: 0;
    display: none;
  }
`;
export const ContainerHeaderTimeline = styled.div`
  display: none;
  height: 60px;
  background: blue;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  line-height: 17px;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const ContainerListLeftRight = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 500px) {
    padding: 10px;
  }
  /* display: none; */
`;
export const TextHeaderTimeline = styled.div`
  font-size: 1.2em;
`;
export const ContainerIconHeaderTimeline = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
`;
export const ContainerLists = css`
  width: 260px;
  padding: 14px;
  height: fit-content;
  @media screen and (max-width: 375px) {
    padding: 10px;
  }
`;
export const LeftList = styled.div`
  border-right: 1px solid gray;
  ${ContainerLists}
`;
export const RightList = styled.div`
  border-left: 1px solid gray;
  ${ContainerLists}
`;
export const TitleCard = styled.p`
  font-size: 1.1.em;
  color: red;
`;
export const ContainerInfo = styled.div`
  width: 35%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContainerEmpty = styled.div`
  height: 60px;
  width: 100%;
`;
