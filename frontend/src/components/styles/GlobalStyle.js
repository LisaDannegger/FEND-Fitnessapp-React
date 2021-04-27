import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 100%;
    color: #1d2a73;
    font-family: "Montserrat", sans-serif;
  }

  body {
    font-weight: 400;
    font-style: normal;
    ${
      "" /* font-size: ${(props) =>
      props.small
        ? css`
            font-size: 1.2rem;
            line-height: 125%;
          `
        : css`
            font-size: 1.6rem;
            line-height: 21px;
          `}; */
    }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

//Styled Components with Props
//static props
//margin: ${props => props.size};

//dynamic props
// const Input = styled.input.attrs(props => ({
//     type = "text"
//     size = ${props => props.inputColor ? "2rem" : "1rem" }
// }))
