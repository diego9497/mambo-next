import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  cursor: pointer;
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
    & p {
      display: initial;
    }
  }
`;

export const Text = styled.p`
  padding: 15px 20px;
  height: 120px;
  background: ${({ color }) => color};
  color: white;

  ${({ always }) => (always ? "display: initial " : "display: none")}
`;
