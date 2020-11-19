import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* font-family: 'Founders Grotesk', "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; */
    font-family: 'Founders Grotesk';
  }
  :root {
    --headerHeight: 50px;
    --footerHeight: 50px;
    --borderColor: #a5a5a5;
    @media screen and (max-width: 575px) {
      --footerHeight: 60px; 
    }
  }
  #__next {
    padding-top: var(--headerHeight);
    padding-bottom: var(--footerHeight);  
  }
  
`;
