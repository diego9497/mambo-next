import styled, { css } from "styled-components";

export const GridHistory = styled.div`
  display: grid;
  height: calc(100vh - var(--headerHeight) - var(--footerHeight) + 1px);
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3fr 2fr;
  grid-template-areas:
    "title imagePrincipal content"
    "contentSecond firstEmpty secondEmpty";

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "title"
      "imagePrincipal"
      "content"
      "contentSecond"
      "menu";
    height: initial;
  }
`;

export const ContainerTitle = styled.div`
  grid-area: title;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  @media screen and (max-width: 575px) {
    border-right: none;
  }
`;
export const Title = styled.h1`
  padding: 20px;
  font-size: 2.8em;
  font-weight: normal;
  text-transform: uppercase;
  line-height: 1em;
  color: ${(props) => props.color};
`;
export const ContainerImagePrincipal = styled.div`
  grid-area: imagePrincipal;
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--borderColor);

  & img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }

  @media screen and (max-width: 575px) {
    height: 320px;
    border-bottom: 1px solid var(--borderColor);
    border-right: none;
  }
`;

export const ContentHistory = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  overflow-y: auto;
  padding-bottom: 0px;
  margin-bottom: 15px;

  /* ::-webkit-scrollbar {
    width: 7px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(202, 202, 202, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(187, 187, 187, 0.3);
    border-radius: 4px;
  } */
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
export const TextContentHistory = styled.p`
  white-space: pre-wrap;
  font-size: 1.17em;
  color: black;

  p {
    span {
      font-weight: 500;
    }
    a {
      font-weight: 500;
      color: inherit;
      text-decoration: none;
    }
    small {
      font-size: 1em;
      font-weight: 500;
    }
  }
`;

export const ContentControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  & div {
    cursor: pointer;
  }
`;
export const ContainerButtom = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--borderColor);
`;

export const ContentSecond = styled.div`
  grid-area: contentSecond;
  padding: 20px;
  background: ${(props) => props.background};
  border-right: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
  position: relative;
  overflow-y: auto;

  @media screen and (max-width: 575px) {
    border-right: none;
  }

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
  ${({ color }) =>
    color === "black"
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
`;
export const TitleContentSecond = styled.h3`
  font-size: 1.3em;
  padding-bottom: 8px;
  color: ${(props) => props.color};
`;
export const TextContentSecond = styled.p`
  font-size: 1.17em;
  color: ${(props) => props.color};

  a {
    color: inherit;
  }
`;

export const FirstEmpty = styled.div`
  grid-area: firstEmpty;
  border-top: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  @media screen and (max-width: 575px) {
    border: none;
  }
`;
export const SecondEmpty = styled.div`
  grid-area: secondEmpty;
  border-top: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
`;

export const GalleryContainer = styled.section`
  border-bottom: 1px solid var(--borderColor);
  min-height: 340px;
  @media screen and (max-width: 420px) {
    min-height: 320px;
  }
`;
export const GalleryImageContainer = styled.div`
  width: 33vw;
  min-width: calc(33.333333vw - 25px);
  margin: 10px;
  padding: 10px;
  height: 320px;

  @media screen and (max-width: 768px) {
    min-width: calc(66vw - 20px);
  }

  @media screen and (max-width: 575px) {
    min-width: calc(100vw - 20px);
    margin: 0;
    padding: 0;
  }
`;

export const AudioContainer = styled.div`
  float: right;
  fill: ${({ stroke }) => (stroke ? stroke : "white")};
  stroke: ${({ stroke }) => (stroke ? stroke : "white")};
  /* fill: white;
  stroke: white; */
  cursor: pointer;
`;

export const AudioContainerHistory = styled.div`
  float: right;
  cursor: pointer;
  stroke: black;
  padding-right: 10px;
`;
