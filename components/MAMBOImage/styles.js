import styled from "styled-components";

export const Image = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
  object-fit: ${({ fit }) => fit};
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ModalImage = styled.div`
  max-height: 95vh;
  max-width: 95vw;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  position: relative;
  background-image: url(${({ src }) => src});

  img {
    object-fit: contain;
    height: 100%;
    max-height: 95vh;
    max-width: 95vw;
    visibility: hidden;
  }
  :hover {
    > p {
      display: initial;
    }
  }
`;

export const Description = styled.p`
  display: none;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  padding-right: 50px;
  grid-row: -1/-2;
  grid-column: 1/-1;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  white-space: pre-wrap;

  p {
    margin-top: 4px;
  }
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: white;
  cursor: pointer;
`;

export const AudioContainer = styled.div`
  stroke: black;
  fill: black;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;

  :hover > div:last-child {
    display: flex;
  }
`;
