import styled, { css } from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid var(--borderColor);
  height: var(--headerHeight);
  position: fixed;
  background: white;
  z-index: 99999;
  width: 100%;
  top: 0;

  & > div {
    border-right: 1px solid var(--borderColor);
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-right: 10px;
    svg {
      cursor: pointer;
      user-select: none;
    }
  }
  & > div:last-child {
    border-right: none;
  }
  @media screen and (max-width: 575px) {
    grid-template-columns: auto 1fr 2fr;
  }
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 4fr 2fr;

  & > div {
    border-right: 1px solid var(--borderColor);
  }
  & > div:last-child {
    border-right: none;
  }

  & > div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    line-height: 1;
    p {
      margin-top: 6px;
    }
  }
  & > div:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
    }
  }
  @media screen and (max-width: 575px) {
    display: none;
  }
`;

export const Lang = styled.a`
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

export const MenuButtonContainer = styled.div`
  display: none;

  @media screen and (max-width: 575px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;
