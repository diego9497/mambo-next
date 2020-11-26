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
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const GridAux = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const ImageAux = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  width: 100%;
  height: 100%;
`;
export const ModalImage = styled.img`
  object-fit: contain;
  /* width: 100%; */
  height: 100%;
  display: block;
  margin: 0 auto;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: white;
  cursor: pointer;
`;

export const Description = styled.p`
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  padding-right: 50px;
  grid-row: -1/-2;
  grid-column: 1/-1;
  position: relative;

  @media screen and (max-width: 575px) {
    max-width: 80%;
  }
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
  width: 100%;
  height: 100%;
  display: block;
  position: relative;

  > div {
    width: 100% !important;
    height: 100% !important;
  }

  :hover > div {
    display: flex;
  }
`;
