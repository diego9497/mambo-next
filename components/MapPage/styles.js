import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - var(--headerHeight) - var(--footerHeight));
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerList = styled.article`
  grid-column: 2/3;
  grid-row: 1/2;

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "initial" : "none")};
    margin-top: 60px;
    justify-content: flex-end;
    max-width: 270px;
    margin-left: auto;
    padding-left: 3px;
    z-index: 1001;
    grid-column: 1/-1;
  }
`;

export const ContainerMap = styled.article`
  grid-column: 1/2;
  grid-row: 1/2;
  border-right: 1px solid var(--borderColor);

  display: grid;
  grid-template-rows: auto 1fr;
  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
  }

  .map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    /* height: calc(100% - 60px); */

    @media screen and (max-width: 768px) {
    }
    > div {
      height: 100%;
      width: 100%;
    }
  }
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const ContainerDetail = styled.article`
  grid-column: 2/3;
  grid-row: 1/2;
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid var(--borderColor);

  z-index: 99999;
  @media screen and (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh - var(--headerHeight) - var(--footerHeight));

  @media screen and (max-width: 768px) {
    height: calc(100vh - var(--headerHeight) - var(--footerHeight) - 60px);
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 1.17em;
  fill: ${({ color }) => color};
  color: black;
  border-bottom: 1px solid var(--borderColor);
  cursor: pointer;
  user-select: none;
  transition: background 0.2s ease;

  @media screen and (max-width: 768px) {
    background: ${({ color }) => color};
    fill: ${({ text }) => text};
    color: ${({ text }) => text};
    min-height: 50px;
  }

  span {
    margin-left: 10px;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media screen and (max-width: 768px) {
      width: 190px;
    }
  }

  :hover {
    background: ${({ color }) => color};
    fill: ${({ text }) => text};
    color: ${({ text }) => text};
  }
`;

export const HeaderMap = styled.div`
  padding: 10px 10px 10px 20px;
  display: none;
  display: flex;
  align-items: center;
  font-size: 1.1em;
  justify-content: space-between;
  color: white;
  background: ${({ color }) => color};
  span {
    > span {
      font-weight: 500;
      font-size: 1.2em;
    }
  }
`;

export const HeaderMapIconContainer = styled.div`
  height: 34px;
  min-width: 34px;
  border-radius: 50%;
  display: none;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: white;
  fill: white;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
