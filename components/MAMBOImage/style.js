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

export const ModalImage = styled.img`
  width: 90vw;
  height: 70vh;
  object-fit: contain;
  margin: 0 auto;
`;

export const CloseContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  fill: white;
  cursor: pointer;
`;
