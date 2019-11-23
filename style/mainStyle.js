import { createGlobalStyle } from 'styled-components'
export const Style = createGlobalStyle` 
        
*{
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
     
}

img{
    width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
a {
    font-weight: 200;
    line-height: 1;
    margin-bottom: 0;

}

h1{
    font-size: 34px;
}
h2{
    font-size: 30px;
  
}
h3{
    font-size: 26px;
      
}
h4{
    font-size: 22px;
}
h5{
    font-size: 20px;
}

h6{
    font-size: 18px
}

p{
    font-size: 16px
}


small {
    font-size: 14px;
}


a,
a:link,
a:visited,
a:active {
    color: black;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: ${props => props.theme.green};
    }
}


ul {
    padding: 0;
}

li {
    font-size: 16px;
}

li::before {
   content: " - ";
}

em {
    font-style: italic;
}

em::before {
    content: '"';
}

em::after {
    content: '"';
}

blockquote {
    margin: 1rem 1rem;
    padding-left: 1rem;
    font-style: italic;
    color: darkslategray;
    border-left: 1px solid;
    line-height: 1.5;
}

`

export default Style
