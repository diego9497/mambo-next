import styled from "styled-components";

export const Container = styled.div`
  /* height: calc (100vh - var(--headerHeight) * 2); */
  height: 100vh;
  width: 100%;
`;
export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: calc(100% - var(--headerHeight));
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Title Content EmptyO"
    "ContentAuthor EmptyTw EmptyTr";
`;
export const ContainerTitle = styled.div`
  grid-area: Title;
  padding: 20px 25px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
`;
export const Title = styled.p`
  font-size: 3em;
  color: #325ed6;
  width: 60%;
  line-height: 40px;
`;
export const ContainerContent = styled.div`
  grid-area: Content;
  background: #325ed6;
  padding: 20px 25px;
  color: white;
  font-weight: 300;
  font-size: 1em;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
`;
export const ContentText = styled.div`
  margin-bottom: 2px;
`;
export const ContainerEmpty = styled.div`
  grid-area: EmptyO;
  border-bottom: 1px solid var(--borderColor);
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(1);
`;
export const ContainerAuthor = styled.div`
  grid-area: ContentAuthor;
  position: relative;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
`;
export const ContainerContentAuthor = styled.div`
  background: #325ed6;
  height: 40%;
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 25px;
  color: white;
`;
export const ContainerEmptyTw = styled.div`
  grid-area: EmptyTw;
  border-bottom: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
`;
export const ContainerEmptyTr = styled.div`
  grid-area: EmptyTr;
  border-bottom: 1px solid var(--borderColor);
`;
