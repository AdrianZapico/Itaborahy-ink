
import { Container, Content,  DivImage, DivBox, Img  } from './style'
import data from '../../Database/images.json'


export default function BoxTrabalhos(props) {

    
   
    

    return (
        <Container>
            <Content>
                
                <DivImage>
                {data.map((item, index) => (
                    
                    <DivBox key={index}>
                    <Img 
                   
                    src={require(`../../assets/arts/${item.path}`)}
                    />
                    </DivBox>
                ))}
                </DivImage>
                

            </Content>
        </Container>
    )
}