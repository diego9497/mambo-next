import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  height: calc(100vh - var(--headerHeight) * 2);
`;
export const ContainerList = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 40px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(175, 175, 175, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(175, 175, 175, 0.3);
    border-radius: 4px;
  }
`;
export const LeftList = styled.div`
  width: 260px;
  border-right: 1px solid gray;
  padding: 14px;
  height: fit-content;
`;
export const RightList = styled.div`
  padding: 14px;
  width: 260px;
  border-left: 1px solid gray;
  height: fit-content;
`;
export const TitleCard = styled.p`
  font-size: 1.1.em;
  color: red;
`;
export const ContainerInfo = styled.div`
  width: 35%;
  height: 100%;
  background: green;
`;
export const ContainerEmpty = styled.div`
  height: 60px;
  width: 100%;
`;
