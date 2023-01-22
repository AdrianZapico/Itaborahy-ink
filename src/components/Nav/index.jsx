import { LiStyled, Menu, CloseSidebar, NavLinks } from "./style"
import { Link, Outlet } from "react-router-dom"
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react"

export default function Nav() {

    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
            <NavLinks sidebar={sidebar}>
            <CloseSidebar onClick={showSiderbar}><FaTimes /></CloseSidebar>
                
                    <Link  className="linkRouter" to="/">
                        <LiStyled  onClick={showSiderbar}> Home </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="trabalhos">
                        <LiStyled onClick={showSiderbar}> Trabalhos </LiStyled>
                    </Link>
                    <Link className="linkRouter" to="contato">
                        <LiStyled onClick={showSiderbar}> Contato </LiStyled>
                    </Link>
            </NavLinks>
            <Outlet/>
        </>
    )
}

