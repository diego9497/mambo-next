import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: calc(100vh - var(--headerHeight) - var(--footerHeight) + 1px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Title Information EmptyO"
    "Author EmptyTw EmptyTh";
  font-size: 17px;
  border-top: 1px solid var(--borderColor);

  @media screen and (max-width: 575px) {
    height: initial;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 200px 200px 200px 200px 200px 200px;
    grid-template-areas: "Title" "Information" "Empty0" "Author" "EmptyTw" "EmptyTh";
  }
`;
export const ContainerSection = styled.a`
  position: relative;
  color: ${({ text }) => text};
  cursor: pointer;

  :hover {
    > div {
      display: initial;
    }
  }
  :nth-child(1) {
    grid-area: Title;
    padding: 30px;
    border-right: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);
  }
  :nth-child(2) {
    background: red;
    grid-area: Information;
    padding: 20px;
    background: ${(props) => props.color};
    border-right: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);
  }
  :nth-child(3) {
    grid-area: EmptyO;
    border-bottom: 1px solid var(--borderColor);
  }
  :nth-child(4) {
    grid-area: Author;
    border-right: 1px solid var(--borderColor);
  }
  :nth-child(5) {
    grid-area: EmptyTw;
    border-right: 1px solid var(--borderColor);
  }
  :nth-child(6) {
    grid-area: EmptyTh;
  }
`;
export const Title = styled.p`
  font-size: 3.2em;
  line-height: 1em;
  width: 50%;
  font-weight: 400;
  color: ${(props) => props.color};
`;

export const ImageBackground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const ContainerInfo = styled.div`
  color: inherit;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px 20px 40px 20px;
  background: blue;
  display: none;
  background: ${(props) => props.color};
`;
export const Text = styled.p`
  font-weight: 100;
  :nth-child(1) {
    font-weight: 400;
  }
`;
export const ContentInfo = styled.p`
  font-weight: 300;
  font-size: 1em;
`;

export const Subtitle = styled.p`
  font-size: 2.4em;
`;

export const ReferenceContainer = styled.article`
  grid-column: 2/-1;
  grid-row: 1/-1;
  background: ${({ color }) => color};
  color: ${({ text }) => text};
  fill: ${({ text }) => text};
  z-index: 1;
  display: grid;
  grid-template-rows: 63px 1fr;
  height: calc(100vh - var(--headerHeight) - var(--footerHeight));
`;

export const ReferencesHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 25px;

  h3 {
    font-weight: 300;
    font-size: 2.6em;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const ReferenceContent = styled.div`
  height: 100%;
  overflow: auto;
  padding: 15px 25px;
  font-size: 0.9em;

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

  p {
    column-count: 2;
    word-wrap: break-word;
  }
`;

export const ImageBgContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  > div {
    height: 100% !important;
    width: 100% !important;
    > img {
      object-fit: cover;
    }
  }
`;
