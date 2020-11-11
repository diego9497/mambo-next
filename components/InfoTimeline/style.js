import styled, { css } from "styled-components";

export const icons = css`
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
`;
export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ContainerIconHeader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${icons};
`;
export const ContainerIconClose = styled.div`
  width: 30px;
  height: 30px;
  ${icons};
`;
export const ContainerIconBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${icons};
`;
export const TitleHeader = styled.p`
  font-size: 1.1em;
  text-transform: uppercase;
  margin-left: auto;
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
export const ContainerContent = styled.div``;

export const TitleInformation = styled.p`
  font-size: 0.8em;
  color: white;
`;
export const TitleContentInfo = styled.p`
  font-size: 1.1em;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
export const SubtitleInfo = styled.p`
  font-size: 1em;
  color: white;
  font-weight: bold;
`;
export const TextContent = styled.p`
  color: white;
  font-size: 1em;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
