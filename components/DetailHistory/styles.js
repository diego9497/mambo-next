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
  border-right: 1px solid var(--borderColor);
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
  border-right: 1px solid var(--borderColor);
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

export const MenuContentContainer = styled.div`
  grid-row: 1/-1;
  grid-column: 2/-1;
  background: ${({ color }) => color};
  color: white;
`;

export const MenuContentTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  & > div {
    display: flex;
    align-items: center;
    fill: white;
  }
`;

export const MenuContentTitle = styled.div`
  text-transform: uppercase;
  margin-left: 12px;
  font-size: 1.5em;
`;

export const MenuContentDetailContainer = styled.div`
  overflow: auto;
  height: calc(100% - 63px);
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
`;

export const BigFont = styled.p`
  font-size: 2.5em;
  padding: 15px 30px;
`;

export const ConceptContainer = styled.div`
  display: flex;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  & > img {
    width: 50%;
    filter: grayscale(1);
  }
  & p {
    width: 50%;
    padding-left: 20px;
    font-size: 1.15em;
    h3 {
      text-transform: uppercase;
      font-weight: normal;
      margin-bottom: 10px;
    }
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 30px;

  & > img {
    width: 50%;
    object-fit: contain;
    filter: grayscale(1);
  }
  & div {
    width: 50%;
    padding-left: 20px;
    font-size: 1.3em;
    p {
      margin-bottom: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  fill: white;
  outline: none;
  cursor: pointer;
  padding: 5px;
`;
