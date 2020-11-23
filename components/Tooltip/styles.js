import styled from "styled-components";

export const Container = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 100%;
`;

export const Content = styled.div`
  background: black;
  color: white;
  z-index: 2;
  padding: 7px 10px 4px;
  border-radius: 5px;
  line-height: 1em;
  font-size: 0.95em;
`;

export const Triangle = styled.div`
  background: black;
  height: 20px;
  width: 20px;
  transform: rotate(45deg);
  margin-bottom: -14px;
  margin-top: 6px;
`;
