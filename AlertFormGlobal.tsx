import React from 'react';
import styled,{css, ThemeConsumer} from 'styled-components';
import CSSCONST from './cssConst';


const LoginWarper = styled.div`
  width: 32%;
  background-color:white;
  position: fixed;
  top:25%;
  left: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-color: ${CSSCONST.BLUE};
  border-style: solid;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
  z-index: 100;

`;

const Text = styled.div`
display: flex;
  font-family:${CSSCONST.FONT_ALATA};
  font-size:18px;
  color:red;
  margin-bottom: 4%;
  justify-content: center;
  margin-top:4%;

`;
const BtnWarper = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;
padding-bottom: 5%;
  padding-right: 5%;
  padding-top: 6%;
`;
const Button = styled.button`
  border-radius: 5px;
  background-color:${CSSCONST.BLUE};
  color:white;
  width: 70px;
  height: 40px;


`;


 interface Props{
  hideAlert:()=>void,
 }

class AlertFormGlobal extends React.Component<Props>{
    
    constructor(props:any){
  
        super(props);
     
    }

    
    render(){
        return <LoginWarper >
                <Text>{this.props.children}</Text>
                <BtnWarper>
                <Button onClick={(e)=>{
                  e.preventDefault();
                  this.props.hideAlert();
                }}>OK</Button>
                </BtnWarper>
                
               </LoginWarper> 
              
       
    }
}

export default AlertFormGlobal;