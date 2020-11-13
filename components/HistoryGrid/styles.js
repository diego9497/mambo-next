import styled from "styled-components";

export const GridHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "title imagePrincipal content"
    "contentSecond firstEmpty secondEmpty"
    "gallery gallery gallery";
  border-bottom: 1px solid var(--borderColor);

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      "title"
      "imagePrincipal"
      "content"
      "contentSecond"
      "menu"
      "gallery";
    height: initial;
  }
`;

export const ContainerTitle = styled.div`
  grid-area: title;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
`;
export const Title = styled.h1`
  padding: 20px;
  font-size: 2.8em;
  font-weight: normal;
  line-height: 1em;
  color: ${(props) => props.color};
`;
export const ContainerImagePrincipal = styled.div`
  grid-area: imagePrincipal;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
`;
export const ImagePrincipal = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  filter: grayscale(1);
  display: block;
`;

export const ContentHistory = styled.div`
  grid-area: content;
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;
export const TextContentHistory = styled.p`
  font-size: 1.1em;
  color: black;
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
`;
export const TitleContentSecond = styled.h3`
  font-size: 1.3em;
  text-transform: uppercase;
  padding-bottom: 8px;
  color: ${(props) => props.color};
`;
export const TextContentSecond = styled.p`
  font-size: 1em;
  color: ${(props) => props.color};
`;

export const FirstEmpty = styled.div`
  grid-area: firstEmpty;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
`;
export const SecondEmpty = styled.div`
  grid-area: secondEmpty;
  border-bottom: 1px solid var(--borderColor);
`;

export const Gallery = styled.div`
  grid-area: gallery;
  overflow-y: auto;
  display: flex;

  ::-webkit-scrollbar {
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(202, 202, 202, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(187, 187, 187, 0.3);
    border-radius: 4px;
  }
  margin-bottom: 10px;
`;

export const GalleryImageContainer = styled.div`
  width: 33vw;
  min-width: calc(33.333333vw - 25px);
  margin: 10px;
  & img {
    width: 100%;
    object-fit: cover;
    filter: grayscale(1);
    display: block;
  }
  @media screen and (max-width: 768px) {
    min-width: calc(66vw - 20px);
  }

  @media screen and (max-width: 420px) {
    min-width: calc(100vw - 20px);
  }
`;

export const ImageSecond = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
  filter: grayscale(1);
  display: block;
`;
