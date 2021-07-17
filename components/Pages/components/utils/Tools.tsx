import React from 'react';
import styled,{css} from 'styled-components';




export const Line = styled.hr`
   margin-top: 3.125rem;
   margin-bottom: 3.125rem;
   @media only screen and (max-width:700px){
    margin-top: 2rem;
   margin-bottom: 2rem;
     }
`;


export const ImgContainer = styled.img`
      width: 100%;
      max-height: 31.25rem;
      box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;

export const PageContainer = styled.div`
    width: min(100%,68.75rem);
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right:2%;
   
 
    @media only screen and (max-width: 961px){
        display: flex;
        justify-content: center;
    }
`;

 export const Iframe = styled.iframe`
  width: 100%;
  border: none;
  max-height: 31.25rem;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;




