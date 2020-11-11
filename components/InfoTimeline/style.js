import styled, { css } from "styled-components";

export const icons = css`
  fill: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ContainerTop = styled.div``;
export const ContainerBottom = styled.div``;
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
`;
export const ContainerIconHeader = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  ${icons};
`;
export const ContainerIconClose = styled.div`
  width: 30px;
  height: 30px;
  ${icons};
  border: none;
`;
export const ContainerIconBtn = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  ${icons};
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
  background: gray;
`;
export const ImageInfo = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
export const ContainerContent = styled.div`
  padding: 10px 15px;
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
`;
export const TextContent = styled.p`
  font-size: 0.9em;
  font-weight: 100;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
`;
