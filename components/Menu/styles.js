import styled, { css } from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: var(--headerHeight);
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-end;
  z-index: 999999;
`;

export const Container = styled.div`
  background: white;
  width: 75%;
  max-width: 320px;
  height: 100%;

  @media screen and (min-width: 768px) {
    max-width: 420px;
  }
`;

export const Language = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  line-height: 1;
  padding: 15px 0;
  border-bottom: 1px solid var(--borderColor);

  p {
    margin-top: 6px;
  }

  @media screen and (max-width: 575px) {
    display: flex;
  }
`;

export const Lang = styled.p`
  padding-top: 8px;
  margin: 0 8px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  ${({ active }) =>
    active &&
    css`
      padding: 0 4px;
      padding-top: 8px;
      background: black;
      color: white;
    `}
`;

export const Options = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-top: 35px;

  a {
    cursor: pointer;
    color: black;
    fill: black;
    border-bottom: 1px solid black;
    :hover {
      background: #eeeeee;
    }
  }
`;

export const OptionContent = styled.span`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-left: 6px solid ${({ color }) => color};
`;
