import styled from "styled-components";

export const ContainerFooter = styled.div`
  height: var(--headerHeight);
  background: white;
  border-top: 1px solid var(--borderColor);
  position: fixed;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: flex-start;
  grid-template-areas: "left left right";
`;
export const LeftContainer = styled.div`
  grid-area: left;
  display: flex;
  width: 100%;
`;
export const TimeLineMapContainer = styled.div`
  grid-area: right;
  display: flex;
  width: 100%;
`;

export const ItemOption = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;
export const ContainerIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right: 10px;
`;
export const Option = styled.p`
  color: inherit;
  font-size: 1.2em;
  line-height: 1;
  margin-left: 6px;
  margin-top: 6px;
  text-transform: uppercase;
  @media screen and (max-width: 575px) {
    font-size: 0.7em;
    margin-left: 0;
    margin-top: 4px;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid var(--borderColor);
  color: black;
  fill: black;
  transition: background 0.3s ease;

  :hover {
    background: ${({ color }) => color};
    color: white;
    fill: white;
  }

  :active {
    filter: grayscale(0.3);
  }

  :nth-child(5) {
    border-right: 0px;
  }

  :first-child {
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
`;
