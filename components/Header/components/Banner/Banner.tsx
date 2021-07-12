import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Link} from 'react-router-dom';

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
   height: 54px;
   width: min(100%,1100px);

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
     
`;



const Banner = ()=>{
 
    return <BannerBG>
              <BannerText>
                  <Text>DASH BOARD</Text>
                 
              </BannerText>
           </BannerBG>
}
export default Banner;