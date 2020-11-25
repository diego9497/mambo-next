import styled, { css } from "styled-components";

export const GalleryContainer = styled.div`
  grid-row: 1/-1;
  grid-column: 2/-1;
  width: 100%;
  height: 100%;
  height: calc(100vh - var(--headerHeight) - var(--footerHeight) - 1px);
  @media screen and (max-width: 575px) {
    grid-column: 1/-1;
    grid-row: -2/-1;
    height: 70vh;
  }

  ${({ invert }) =>
    invert &&
    css`
      grid-column: 1/3;
      border-right: 1px solid var(--borderColor);
    `}
`;
