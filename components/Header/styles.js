import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--borderColor);
  height: var(--headerHeight);

  & > div {
    border-right: 1px solid var(--borderColor);
  }

  & > div:last-child {
    border-right: none;
  }
`;
