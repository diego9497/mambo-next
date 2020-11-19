import styled from "styled-components";

export const Container = styled.a`
  position: relative;
  cursor: pointer;
  :active {
    filter: brightness(1.2);
  }

  @media screen and (max-width: 575px) {
    min-height: 200px;
  }
`;

export const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(100%);
`;

export const Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  :hover {
    background-color: ${({ filter }) => filter};
    & > div {
      display: flex;
    }
  }
`;

export const Text = styled.div`
  padding: 15px 20px;
  height: 35%;
  background: ${({ color }) => color};
  color: white;
  display: flex;
  justify-content: space-between;
  fill: white;

  & svg {
    display: none;
  }

  ${({ always }) => (always ? "display: flex " : "display: none")};

  @media screen and (max-width: 575px) {
    display: flex;
    align-items: center;

    & svg {
      display: initial;
      width: 23px;
      height: 23px;
    }
  }
`;
