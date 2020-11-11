import styled from "styled-components";

export const ContainerDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 1fr;
  grid-template-areas:
    "Title ContentSecond Menu"
    "Content ContentSecond Menu";
  height: calc(100vh - 2 * var(--headerHeight));
  margin-bottom: var(--headerHeight);
`;
export const ContainerTitle = styled.div`
  grid-area: Title;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid var(--borderColor);
`;
export const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 3.2em;
  line-height: 1em;
`;
export const ContainerContentSecond = styled.div`
  grid-area: ContentSecond;
  width: 100%;
  padding: 20px;
`;
export const ContainerContent = styled.div`
  grid-area: Content;
  width: 100%;
  padding: 20px;
`;
export const TextContent = styled.p`
  font-size: 1em;
  color: black;
`;
export const ContainerMenu = styled.div`
  grid-area: Menu;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
export const ItemMenu = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid var(--borderColor);
`;
export const TextItem = styled.p`
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 10px;
`;

export const ImageBackground = styled.img`
  grid-row: 1/-1;
  grid-column: 2/-1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(0.8) brightness(1.2);
  z-index: -1;
`;
