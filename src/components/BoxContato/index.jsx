import React from "react";
import { BoxContactStyled, GranBox, AHome, Spin, TopTitle } from "./style";
import data from "../../Database/dataContato.json"
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'


export default function BoxContato(props) {

  
    return (
        <>
            

            <GranBox>
                
                <TopTitle>Links para contato</TopTitle>

                {
                    data.map((element, index) =>
                    (
                        <BoxContactStyled style={{backgroundColor:element.color}} key={index}>
                           
                            <h2>{element.title}</h2>
                            <Spin>
                                💀
                                
                            </Spin>
                            <p>{element.description}</p>
                            <p>
                                <AHome href={element.link} target="_blank">
                                    Mais informações
                                </AHome>
                            </p>

                        </BoxContactStyled>
                    ))
                }

            </GranBox>

        </>
    )

}