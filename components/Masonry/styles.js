import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: calc(100vh - var(--headerHeight) - var(--footerHeight));

  & > div {
    border-right: 1px solid var(--borderColor);
  }
  & > div:last-child {
    border-right: none;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: initial;
    grid-template-rows: repeat(3, auto);
    height: initial;
  }
`;

export const Left = styled.div`
  display: grid;
  grid-template-rows: 13fr 7fr;

  & > div {
    border-bottom: 1px solid var(--borderColor);
  }
  & > div:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 575px) {
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Center = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  & > div:nth-child(1) {
    border-bottom: 1px solid var(--borderColor);
    border-right: 1px solid var(--borderColor);
  }
  & > div:nth-child(2) {
    border-bottom: 1px solid var(--borderColor);
  }
  & > div:nth-child(3) {
    border-right: 1px solid var(--borderColor);
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: initial;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export const Right = styled.div`
  display: grid;
  grid-template-rows: 3fr 3fr 5fr;

  & > div {
    border-bottom: 1px solid var(--borderColor);
  }
  & > div:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 575px) {
    grid-template-rows: repeat(3, 1fr);
  }
`;
