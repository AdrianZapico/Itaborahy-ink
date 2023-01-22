import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;

  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 5px;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 760px) {
   font-size: 13px;
  }
`;

export const TitleProject = styled.strong``;

export const Url = styled.span``;


export const DivImage = styled.div`
  background-color: #2c2d36;
  width: 900px;
  height: 340px;
  border-radius: 10px ;
  display: flex;
  margin: 200px 100px 100px 100px;
  gap: 2px 2px;  
  overflow-y: scroll; 

  @media (max-width: 600px) {
  
  
  background-color: #2c2d36;
  width: 300px;
  height: 340px;
  border-radius: 10px ;
  display: flex;
  margin: 20px 30px 30px 30px;
  gap: 3px 3px;  
  overflow-y: scroll;
  padding: 10px;
 
  
  }
  

`;
export const ButtonScroll = styled.button`

  background: white;
  border-radius:10px ;

`

export const DivBox = styled.div`
 

 border-radius: solid 5px red;
 height: 210px;


`;


export const Img = styled.img`

    border-radius:10px;
    width:300px;
    height:300px;
    margin:2px;
    transition: ease-in-out 0.7s;
    
    &:hover {
    transform: scale(1.08); 
    
}
`