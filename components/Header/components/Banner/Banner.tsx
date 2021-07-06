import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Link} from 'react-router-dom';
import Menu from '../../../Pages/components/Menu/Menu';

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
   justify-content: center;
   height: 56px;
   margin-left: 2rem;
   font-style: italic;
   padding-bottom:6px;
   width: min(100%,68.75rem);
   margin-left: 2%;
   margin-right: 2%;

`;
const Text= styled.div`
    color: white ;
    font-family: ${CSSCONST.FONT_ZILLA};
 
     height: 100%;
     width: fit-content;
    display: flex;
    align-items:flex-end;
     font-size: 38px;
`;


const Banner = (props:{onclick:()=>void})=>{
 
    return <BannerBG>
              <BannerText>
                  
                  <Text>Web DashBoard </Text>
              </BannerText>
           </BannerBG>
}
export default Banner;