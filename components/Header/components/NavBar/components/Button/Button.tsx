import React from 'react';
import styled,{css} from 'styled-components';
import { ProgressPlugin } from 'webpack';
import CSSCONST from '../../../../../../cssConst';

const BtnWarper =styled.div`
height:100%;
display: flex;
justify-content: flex-start;
align-items: flex-end;
@media only screen and (min-width:961px){
      display: none;
    }; 
`;
const Btn = styled.button`
 
`;


const Button =(props:{dropMenu:boolean, toggleDropMenu:(dropMenu:boolean)=>void})=>{

     const changeDropMenu = ()=>{
      props.toggleDropMenu(!props.dropMenu);   
     }

    return <BtnWarper onClick={(evt)=>{
        evt.preventDefault;
        changeDropMenu();
    }}>
           <Btn>
          <svg className="button" stroke="#black" fill="#black" strokeWidth="0" viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg">
       <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path> 
      </svg>
    </Btn>
    </BtnWarper>
         
}

export default Button;