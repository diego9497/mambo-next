import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: calc(100vh - var(--headerHeight) * 2);
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Title Information EmptyO"
    "Author EmptyTw EmptyTh";
  font-size: 17px;
`;
export const ContainerSection = styled.div`
  position: relative;
  :hover {
    > div {
      display: initial;
    }
  }
  :nth-child(1) {
    grid-area: Title;
    padding: 30px;
  }
  :nth-child(2) {
    background: red;
    grid-area: Information;
    padding: 20px;
    background: ${(props) => props.color};
    color: white;
  }
  :nth-child(3) {
    grid-area: EmptyO;
  }
  :nth-child(4) {
    grid-area: Author;
  }
  :nth-child(5) {
    grid-area: EmptyTw;
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
  color: white;
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
