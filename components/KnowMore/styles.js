import styled, { css } from "styled-components";

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
    grid-template-rows: 175px repeat(5, 250px);
    grid-template-areas: "Title" "Information" "EmptyO" "Author" "EmptyTw" "EmptyTh";
  }
`;
export const ContainerSection = styled.a`
  background: ${({ color }) => color};
  position: relative;
  color: ${({ text }) => text};
  cursor: pointer;

  ${({ main }) =>
    main &&
    css`
      :hover {
        filter: brightness(1.1);
        div {
          display: initial;
        }
      }
    `}
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
    min-height: 200px;
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
  @media screen and (max-width: 575px) {
    > div {
      display: flex;
    }
    border-right: none !important;
  }
`;
export const Title = styled.p`
  font-size: 3.2em;
  line-height: 1em;
  width: 50%;
  font-weight: 400;
  color: ${(props) => props.color};
`;

export const ContainerInfo = styled.div`
  color: inherit;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 20px 20px 57px 20px;
  background: ${(props) => props.color}77;
  display: flex;
  color: ${({ text }) => text};
  font-size: 1.5em;
  text-shadow: 1px 1px 3px
    ${({ text }) => (text === "white" ? "black" : "white")};
  align-items: flex-end;

  :hover {
    div {
      display: initial;
    }
  }
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

  @media screen and (max-width: 575px) {
    grid-column: 1/-1;
    height: initial;
  }
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
    background: rgba(255, 255, 255, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
  }
  ${({ text }) =>
    text === "black"
      ? css`
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2);
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 4px;
          }
        `
      : null}

  p {
    column-count: 2;
    word-wrap: break-word;
  }
`;

export const ImageBgContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  img {
    object-fit: cover;
    filter: grayscale(1);
  }
`;

export const SeeLink = styled.div`
  background: ${({ color }) => color};
  width: 100%;
  padding: 15px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.8em;
  display: none;
  text-shadow: none;

  @media screen and (max-width: 575px) {
    display: initial;
  }
`;

export const SeeMore = styled.div`
  display: none;
  position: absolute;
  right: 15px;
  bottom: 15px;
`;
