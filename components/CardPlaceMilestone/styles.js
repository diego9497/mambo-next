import styled, { css } from "styled-components";

export const icons = (color) => css`
  background: none;
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    fill: ${color};
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: grid;
  grid-template-rows: 1fr 68px;
  @media screen and (max-width: 376px) {
    overflow-y: scroll;
  }
`;
export const ContainerTop = styled.div`
  background: ${({ color }) => color};
  @media screen and (max-width: 768px) {
    background: white;
  }
`;
export const ContainerBottom = styled.div`
  background: ${({ color }) => color};
  @media screen and (max-width: 768px) {
    background: white;
    padding: 0 30px;
  }
`;
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: ${({ color }) => color};
  @media screen and (max-width: 768px) {
    height: 80px;
  }

  button {
    width: 30px;
    height: 30px;
    ${icons};
    border: none;
    @media screen and (max-width: 768px) {
      border: 2px solid white;
      border-radius: 50%;
    }
  }
`;
export const ContainerIconHeader = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  ${({ color }) => icons(color)};
  @media screen and (max-width: 768px) {
    fill: white;
  }
`;
export const ContainerIconBtn = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  ${icons};

  @media screen and (max-width: 768px) {
    fill: ${({ color }) => color};
  }
`;
export const TitleHeader = styled.p`
  font-size: 1.1em;
  text-transform: uppercase;
  margin-right: auto;
  margin-left: 10px;
  color: white;
`;
export const ContainerImage = styled.div`
  width: 100%;
  height: 250px;
  background: ${({ color }) => color};
  @media screen and (max-width: 768px) {
    height: 200px;
  } ;
`;
export const ImageInfo = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
export const ContainerContent = styled.div`
  padding: 10px 15px;
  background: ${({ color }) => color};
  @media screen and (max-width: 768px) {
    color: black;
    background: white;
  }
`;

export const TitleInformation = styled.p`
  font-size: 0.8em;
  margin-bottom: 20px;
`;
export const TitleContentInfo = styled.p`
  font-size: 1.1em;
  text-transform: uppercase;
  font-weight: bold;
`;
export const SubtitleInfo = styled.p`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const TextContent = styled.p`
  font-size: 0.9em;
  font-weight: 100;
  @media screen and (max-width: 768px) {
    padding: 0px 15px;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
