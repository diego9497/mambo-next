import styled, { css } from "styled-components";

export const icons = (color, text) => css`
  background: none;
  fill: ${text ? text : "white"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    fill: ${text ? text : color};
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: grid;
  grid-template-rows: 1fr 50px;
  @media screen and (max-width: 376px) {
    overflow-y: scroll;
  }
`;
export const ContainerTop = styled.div`
  background: ${({ color }) => color};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(202, 202, 202, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(187, 187, 187, 0.3);
    border-radius: 4px;
  }
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
    ${({ color, text }) => icons(color, text)};
    border: none;
    @media screen and (max-width: 768px) {
      border-radius: 50%;
    }
  }
`;
export const ContainerIconHeader = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  ${({ color, text }) => icons(color, text)};
`;
export const TitleHeader = styled.p`
  font-size: 1.1em;
  margin-right: auto;
  margin-left: 10px;
  color: ${({ text }) => (text ? text : "white")};
`;
export const ContainerImage = styled.div`
  width: 100%;
  background: ${({ color }) => color};
  @media screen and (max-width: 768px) {
    min-height: 200px;
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
  color: ${({ text }) => text};
  @media screen and (max-width: 768px) {
    color: black;
    background: white;
  }

  a {
    margin-top: 25px;
    font-weight: 100;
    font-size: 0.9em;
    display: inline-block;
    line-break: anywhere;
    position: absolute;
    right: 15px;
    color: #000090;
    @media screen and (max-width: 768px) {
      color: black;
    }
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
  color: ${({ text }) => text};
  padding-left: 15px;
  font-size: 1em;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    padding-bottom: 20px;
  }
`;
export const TextContent = styled.p`
  font-size: 0.9em;
  font-weight: 100;

  p {
    white-space: pre-line;
  }
  @media screen and (max-width: 768px) {
    padding: 0px 15px;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 11px 15px;

  > div {
    > button {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: none;
      ${({ color, text }) => icons(color, text)};

      @media screen and (max-width: 768px) {
        fill: ${({ color }) => color};
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;
