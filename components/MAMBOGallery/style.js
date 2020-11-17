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
  padding: 0 10px;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: contain;
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
