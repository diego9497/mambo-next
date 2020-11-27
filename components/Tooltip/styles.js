import styled from "styled-components";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const Content = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 100%;
  color: black;
  z-index: 2;
  padding: 7px 10px 4px;
  line-height: 1em;
  font-size: 13px;
  margin-top: auto;
`;
