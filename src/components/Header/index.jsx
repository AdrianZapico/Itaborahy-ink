import React, { useState } from 'react'
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link, Outlet } from "react-router-dom"
import Nav from '../Nav'

export default function Header() {
  const [sidebar, setSidebar] = useState(true)
  

  const showSiderbar = () => setSidebar(!sidebar)

 

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
        Itaborahy_Ink💀
          </Title>
          <SubTitle>
            Portfolio Pessoal
          </SubTitle>
        </ContentTitle>
        <Nav>
        </Nav>
      </Content>
      <Outlet/>
    </Container>
  )
}
