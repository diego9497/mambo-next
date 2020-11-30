import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
  height: calc(100vh - var(--headerHeight) - var(--footerHeight));
  position: relative;
`;

export const ContainerList = styled.div`
  width: 100%;
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
  }
`;
export const ContainerHeaderTimeline = styled.div`
  display: none;
  height: 60px;
  background: ${({ color }) => color};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  line-height: 17px;
  padding: 0 20px;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-bottom: 15px;
  }
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
export const TitleCard = styled.p`
  font-size: 1.1.em;
`;
export const ContainerInfo = styled.div`
  width: 35%;
  height: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    position: absolute;
    z-index: 999999;
  }
`;
export const ContainerEmpty = styled.div`
  width: 100%;
  background: white;
`;

export const ContainerCards = styled.div`
  display: grid;
  max-width: 580px;
  margin: 0 auto;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  background: black;
  column-gap: 2px;
  margin-bottom: 40px;
`;

export const CardTimelineLeft = styled.div`
  padding-right: 14px;
  padding-left: 10px;
  background: white;
`;
export const CardTimelineRight = styled.div`
  padding-left: 14px;
  padding-right: 10px;
  background: white;
`;
