import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;

  > div:first-child {
    width: 100% !important;
    height: 100% !important;
    display: block !important;

    > img {
      object-fit: ${({ fit }) => fit};
      object-position: ${({ position }) => position};
    }
  }
`;
export const Picture = styled.picture`
  width: 100%;
  height: 100%;
  display: block;

  > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: ${({ fit }) => fit};
    object-position: ${({ position }) => position};
  }
`;
