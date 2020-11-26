import styled, { css } from "styled-components";

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
export const ImageSlider = styled.div`
  max-width: 100vw;
  display: flex;
  transform: translateX(${({ current }) => `${-current * 100}%`});
  transition: 0.55s ease;
`;
export const ImageContainer = styled.div`
  min-width: 100vw;
  padding: 10px 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ModalImage = styled.img`
  max-height: 95vh;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export const GridAux = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const ImageAux = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  width: 100%;
  height: 100%;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: white;
  cursor: pointer;
`;

const ButtonStyle = css`
  position: fixed;
  top: calc(50% - 15px);
  fill: white;
  cursor: pointer;
  background: none;
  border: none;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
  outline: none;
`;
export const LeftButton = styled.button`
  left: 20px;
  ${ButtonStyle};
`;

export const RightButton = styled.button`
  right: 20px;
  ${ButtonStyle};
`;

export const Description = styled.p`
  padding: 20px 20px;
  padding-right: 50px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  padding-right: 50px;
  grid-row: -1/-2;
  grid-column: 1/-1;
  position: relative;
  white-space: pre-wrap;

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

export const ImageToolTipContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  cursor: pointer;

  :hover > div {
    display: flex;
  }
  > div:first-child {
    height: 100% !important;
    width: 100% !important;
    > img {
      object-fit: cover;
    }
  }
`;
