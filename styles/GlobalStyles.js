import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  :root {
    --headerHeight: 50px;
    --borderColor: #a5a5a5;
  }
  body {
    padding-top: var(--headerHeight)
  }
`;
