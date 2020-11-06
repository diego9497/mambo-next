import styled from "styled-components";

export const GridHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "Title ImagePrincipal Content"
    "ContentSecond FirstEmpty SecondEmpty"
    "FirstImage SecondImage ThirdImage";
`;

export const ContainerTitle = styled.div`
  grid-area: Title;
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
  grid-area: ImagePrincipal;
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
  grid-area: Content;
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
export const ContainerButtom = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid var(--borderColor);
`;

export const ContentSecond = styled.div`
  grid-area: ContentSecond;
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
  grid-area: FirstEmpty;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
`;
export const SecondEmpty = styled.div`
  grid-area: SecondEmpty;
  border-bottom: 1px solid var(--borderColor);
`;
export const ContainerFirstImage = styled.div`
  grid-area: FirstImage;
  border-right: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
`;
export const ContainerSecondImage = styled.div`
  grid-area: SecondImage;
  border-right: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
`;
export const ContainerThirdImage = styled.div`
  grid-area: ThirdImage;
  border-bottom: 1px solid var(--borderColor);
`;
export const ImageSecond = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
  filter: grayscale(1);
  display: block;
`;
