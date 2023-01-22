import styled, { keyframes } from "styled-components";
 

const height = "4vmin"
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const FooterStyled = styled.footer`
    position: relative;
    z-index: 1;
    text-align: center;
   
`
export const DivFooterStyled = styled.div`

    color: whitesmoke;
    margin: 0 auto;
    width: 100%;
    height: 350px;
    background-color: #121214;
   
    
`
export const LogoImg = styled.img`

    
    height: ${height};
    pointer-events: none;



`
export const Spin = styled.div`

    animation: ${rotate} 3s linear infinite;
    display: inline-block;
    margin: 10px 10px;
`
export const SocialLinks = styled.button`

    background-color: transparent;
    border: none;

`
export const AHome = styled.a`

  text-decoration: none;
 	color: whitesmoke;
  display: inline-block;
  margin-top: 30px;
  
 
   
`