import React from 'react';
import styled,{css, ThemeConsumer} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Link} from 'react-router-dom';
import { Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import { ProgressPlugin } from 'webpack';
import axios from 'axios';

const BannerBG = styled.div`
   background-color: ${CSSCONST.BLUE}; 
   width: 100%;
   top:0;
   display: flex;
   justify-content:center;
   height: 3.375rem;
   `;
const BannerText = styled.div`
   display: flex;
   justify-content: space-between;
   height: 54px;
   width: min(100%,1100px);
   position: relative;

`;
const Text= styled.div`
     color: white ;
     font-family: ${CSSCONST.FONT_ZILLA};
     height: 100%;
     width: fit-content;
     display: flex;
     align-items: center;
     font-size: 48px;
     font-weight: 600;
     padding-left: 6.25rem;
     padding-left:35%;
`;

const LogButton = styled.button`
  margin-right:1%;
  width: 80px;
  border-radius: 8px;
`;
const LoginInfo = styled.div`
color: white;

align-items: flex-end;
padding-bottom: 10px;

`;
interface Props{
   showLoginOrNot:()=>void;
   username:string;
   changeUserName:(s:string)=>void;
};
interface State {
}

class Banner  extends React.Component<Props,State> {
       constructor(props:Props){
             super(props);
             this.logOut = this.logOut.bind(this);
      }

 logOut(){
   localStorage.removeItem("jwt");
   localStorage.removeItem("authority");
   console.log(localStorage.getItem("jwt"));

 }

 render(){
    const HREF = CSSCONST.BACK_URL+"logout";
   return <BannerBG style={{zIndex:6}}>
   <BannerText>
       <Text>DASH BOARD</Text>
       <LoginInfo style={{display: this.props.username===null ? "none":"flex"}} >Welcome! {this.props.username}</LoginInfo>
       <LogButton style={{display:this.props.username===null ? "":"none"}}  onClick={(e)=>{e.preventDefault;this.props.showLoginOrNot();console.log("I am in banner!");
       }}>Login</LogButton>
       <LogButton style={{display:this.props.username===null ? "none":""}} 
       onClick={()=>{this.logOut()
         this.props.changeUserName(null);
       }
        }>Logout</LogButton>
   </BannerText>
</BannerBG>

 }
    
}
export default Banner;