import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: calc(100vh - var(--headerHeight));

  & > div {
    border-right: 1px solid var(--borderColor);
  }
  & > div:last-child {
    border-right: none;
  }
`;

export const Left = styled.div`
  display: grid;
  grid-template-rows: 13fr 7fr;
`;

export const Center = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const Right = styled.div``;
