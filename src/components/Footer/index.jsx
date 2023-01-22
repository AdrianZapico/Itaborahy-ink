import React from "react"
import { FooterStyled, DivFooterStyled, Spin,  AHome, } from "./style"




export default function Footer(props) {

  return (
    <>
      <FooterStyled>
        <DivFooterStyled>

          <Spin>
            💀
          </Spin>

          <div>
            <h5>Sobre mim</h5>
            <p>Sou Giovanni Itaboary, Tatuador ect e tal
            </p>
          </div>

          


          <div>
            <AHome href="mailto:joeytafolla123@gmail.com">Send me a E-mail📧</AHome>
          </div>


        </DivFooterStyled>
      </FooterStyled>
    </>
  )

}