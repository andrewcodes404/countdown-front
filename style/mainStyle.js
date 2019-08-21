import { createGlobalStyle } from 'styled-components'
export const Style = createGlobalStyle` 
        
body {
    font-family: 'Arial', sans-serif;
}

h1,
h2,
h3,
h4 {
    font-family: Arial, sans-serif;
    font-weight: 400;
}

h1,
h2 {
    font-weight: 200;
    line-height: 1.12;
    font-size: 30px;
    margin: 0 0 30px 0;
    @include media-sml {
        font-size: 50px;
        margin: 0 0 50px 0;
    }
    @include media-med {
        font-size: 55px;
    }
    @include media-lrg{
         font-size: 60px;
       
    }
}

h3 {
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 30px;

    @include media-sml {
        font-size: 22px;
        margin-bottom: 30px;
    }

    @include media-med {
        font-size: 28px;
        margin-bottom: 35px;
    }

      @include media-lrg {
        font-size: 32px;
        margin-bottom: 40px;
    }


}

 h4 {
     font-size: 26px;
     letter-spacing: 2px;
     line-height: 1.2;
     margin-bottom: 0.35rem;
     margin: 0 0 10px 0;
 }
 h5 {
     font-size: 20px;
     line-height: 1.4;
     margin-bottom: 10px;
     letter-spacing: 1px;
     margin: 0 0 10px 0;
 }

p {
    line-height: 1;
    font-weight: 400;
    font-size: 18px;
   
}

small {
    font-size: 16px;
    margin: 0 0 10px 0;
}

a,
a:link,
a:visited,
a:active {
    font-size: 18px;
    text-decoration: none;
    color: grey;
    transition: 0.1s;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.hoverColor};
    }
}

.underline{
    text-decoration: underline;
}

ul {
    padding: 0;
}

li {
    font-size: 18px;
    line-height: 1.2;
    list-style: none;
    list-style-position: inside;
    /* margin: 0 0 10px 0; */
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
