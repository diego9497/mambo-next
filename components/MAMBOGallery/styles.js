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
export const ModalImage = styled.div`
  max-height: 95vh;
  max-width: 95vw;
  background-size: contain;
  background-repeat: no-repeat;
  display: block;
  margin: 0 auto;
  position: relative;
  background-image: url(${({ src }) => src});

  img {
    object-fit: contain;
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
  padding-right: 50px;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  padding-right: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  white-space: pre-wrap;

  p {
    margin-top: 6px;
  }
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
  transition: transform 0.3s ease-in;

  :hover > div:last-child {
    display: flex;
  }

  ${({ animation }) =>
    animation &&
    css`
      :hover {
        transform: scale(1.08);
        box-shadow: 2px 4px 9px #0000002e;
      }
    `}
`;
