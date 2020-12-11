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
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
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
  display: flex;
  background: ${({ color }) => color};
  width: 100%;
  justify-content: space-between;
  align-items: center;
  color: white;
  line-height: 17px;
  padding: 10px 20px;
  margin-bottom: 40px;
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

export const Filters = styled.div`
  position: fixed;
  top: 115px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  z-index: 9;
  @media screen and (max-width: 768px) {
    align-items: flex-end;
    right: 0;
    top: 130px;
  }
`;

export const FilterOptions = styled.div`
  transform: translateX(-100%);
  padding: 7px 15px;
  animation: open 0.3s ease forwards;
  background: white;
  border-radius: 0 5px 5px 0;
  border: 1px solid black;
  display: ${({ open }) => (open ? "initial" : "none")};

  > div {
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;

    p {
      line-height: 1;
      margin-top: 6px;
      margin-left: 5px;
    }
  }
  @media screen and (max-width: 768px) {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid black;
    border-right: none;
    transform: translateX(100%);
    animation: openMobile 0.3s ease forwards;
  }

  @keyframes open {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes openMobile {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

export const Check = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 3px;
  border: 1px solid ${({ color }) => color};
  background: ${({ color }) => color};
  position: relative;
  cursor: pointer;

  ::before {
    content: "";
    height: 5px;
    width: 10px;
    position: absolute;
    top: 3px;
    left: 2px;
    border-left: 3px solid white;
    border-bottom: 3px solid white;
    transform: rotate(-45deg);
    display: none;
    ${({ check }) => check && `display: initial`}
  }
`;

export const ShowAll = styled.p`
  font-weight: 500;
  font-size: 1.05em;
  margin-left: 0 !important;
`;

export const FilterModal = styled.div`
  border-left: 0;
  border-radius: 0 5px 5px 0;
  padding: 5px 15px;
  /* box-shadow: 0px 9px 15px #00000012; */
  border: 1px solid black;
  border-left: none;
  cursor: pointer;
  background: white;

  p {
    line-height: 1;
    margin-top: 3px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    border-radius: 5px 0 0 5px;
    border-left: 1px solid black;
    border-right: none;
  }
`;
