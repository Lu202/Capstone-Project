import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    color: none;
    opacity: 1;
    box-sizing: border-box; 

}
    :root {
        --main-bg-color: #F0F0F0;
        --button-bg-color: #1592E6;
    
}`;

export default GlobalStyle;
