import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import {Link} from 'react-router-dom';

const ItemName = styled.div<Props>`
        display: flex;
        align-items: flex-end;
        justify-content: center;
        white-space:nowrap;
        text-decoration: none;
        color:${p=>p.selected};
        letter-spacing: 0.7px;
        height: 75%;
        font-style: italic;
        padding-right: 1.20rem;
        &:hover{
            color:${CSSCONST.BLUE};
            transition: 0.5s;
        }
    
        &:active{
            color:lightblue;
           
        }
        &::after{
             content: " ";
             width: 100%; 
             height: 2.2px;
             border-radius: 10px;
             position: absolute;
             top: 100%;
             left:0;
            transform:scale(0);
            transition: all 0.4s ease; 
            transform-origin: center;
        }
        &:hover::after{
           transform:scale(1.1);
        }
        margin-left: 1.3rem;
`;
interface Props {
    selected:string;
}

const Item =(props:{children:string,active:boolean,onclick:()=>void}) =>{
            let addr = "/" + props.children;
            console.log(addr);
    return  <Link style={{textDecoration:"none"}} to={addr}><ItemName selected={props.active ? CSSCONST.BLUE : 'black'} 
    onClick={(event)=>{
             event.preventDefault;
             props.onclick();
             }}>{props.children}</ItemName></Link>;
}
export default Item;

