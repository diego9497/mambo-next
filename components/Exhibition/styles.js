import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - var(--headerHeight));
`;
export const Top = styled.div`
  display: flex;
  height: 40%;
  border-bottom: 1px solid var(--borderColor);

  & > div {
    width: 33.33333333%;
    height: 100%;
    border-right: 1px solid var(--borderColor);
    display: flex;
    align-items: center;
    @media screen and (max-width: 575px) {
      width: 100%;
      border-right: none;
    }
  }
  & > div:nth-child(1) {
    padding: 20px;
    color: ${({ color }) => color};
    line-height: 1;
    h1 {
      width: 60%;
      font-size: 2.5em;
      font-weight: normal;
    }
  }
  & > div:nth-child(2) {
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
  & > div:nth-child(3) {
    background: ${({ color }) => color};
    @media screen and (max-width: 575px) {
      display: none;
    }
  }
`;

export const Bottom = styled.div`
  display: flex;
  height: 60%;

  & > div,
  > a {
    width: 33.3333333%;
    height: 100%;
    border-right: 1px solid var(--borderColor);
  }
`;

export const SubtitleContainerAnchor = styled.a`
  position: relative;
  cursor: pointer;
  & > div {
    display: none;
  }
  :hover > div {
    display: flex;
  }
`;
export const SubtitleBackground = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(1);
`;

export const SubtitleContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
export const SubtitleTextContainer = styled.div`
  background: ${({ color }) => color};
  color: white;
  padding: 20px 20px 60px;
  font-size: 1.8em;
  text-transform: uppercase;
  line-height: 1;
  h3 {
    width: 60%;
    font-weight: normal;
  }
`;
export const SubtitleAuthorContainer = styled.p`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1em;
  span {
    color: white;
    display: block;
  }
`;
