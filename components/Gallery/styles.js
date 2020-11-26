import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  height: inherit;
`;

export const GallerySlide = styled.div`
  display: flex;
  height: 100%;

  transform: ${({ current }) => `translateX(-${100 * current}%)`};
  transition: transform 0.5s ease;
`;

export const SlideContainer = styled.div`
  height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
