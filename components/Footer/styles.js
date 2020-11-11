import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: var(--headerHeight);
  background: white;
  border-top: 1px solid var(--borderColor);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ItemOption = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
export const ContainerIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 10px;
`;
export const Option = styled.p`
  color: black;
  font-size: 1.2em;
  margin-left: 6px;
  text-transform: uppercase;
`;
export const A = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  border-right: 1px solid var(--borderColor);

  :nth-child(5) {
    border-right: 0px;
  }
`;
