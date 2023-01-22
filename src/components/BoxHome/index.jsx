import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from './style'
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

export default function BoxHome() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Giovanni Itaborahy</Name>
        <Function>🎨ARTISTA PLÁSTICO & TATUADOR</Function>
        <Intro>
         
          <p>-FANTASY BLACKWORK HORROR  </p> 
          <p>-BLACKWORK </p> 
          <p>-PINTURA EM TECIDO </p>
          
        </Intro>
        <Link className="linkRouter" to="/trabalhos">
          <LinkProjects style={{color:"black"}}>TRABALHOS<FaArrowRight /></LinkProjects>
        </Link>
        
      </Infos>
      <Logo>
        <Img src={logo} alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
