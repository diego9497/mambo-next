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
export const ContainerSection = styled.div`
  position: relative;
  color: ${({ text }) => text};
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
  font-size: 4em;
  width: 50%;
  line-height: 50px;
  color: ${(props) => props.color};
  font-weight: 300;
`;

export const ImageBackground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  filter: grayscale(1);
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
