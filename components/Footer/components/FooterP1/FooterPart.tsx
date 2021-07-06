import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';

const FooterWarper1 = styled.div`
       display: flex;
       flex-direction: column;
       justify-content: center;
       width: min(100%,1100px);
`;

const FooterPartWarper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 1.2%;
    padding-bottom:1.2% ;
    padding-left: 5% ;
    padding-right: 5% ;
    font-family: ${CSSCONST.FONT_RAMMETTO};
    color:white;
    z-index: 10;
`;
const FooterPartWarper2 = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   position:relative;
   @media only screen and (max-width:800px){
         display: none;
      }
 
`;
const Name = styled.div`
     color:white;
     font-size: 1.25rem;
`;

const Address = styled.div`
     color:white;
     font-size: 1.125rem;
     margin-top: 10%;
`;
const Side1Warper = styled.div`
   display: flex;
   flex-direction:column;
   height: 100%;
   
`;

const Side2Warper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Side2Name = styled.div`
   font-size: 1.125rem;
   ;
`;

const Side2Content= styled.div`
     font-size : .875rem;

`;
const BottomText = styled.div`
       font-size : .875rem;
       display: flex;
       justify-content: center;
       margin-top: 3%;
`;
const Warper = styled.div`
font-size: 18px;
font-family:${CSSCONST.FONT_RAMMETTO};
color: white ;
`;
const FloatText = styled.div`
      display: flex;
      font-size: 16px;
      font-family:${CSSCONST.FONT_RAMMETTO};
      position:absolute;
      right:4%;
      bottom: 30%;
      @media only screen and (max-width:1000px){
         display: none;
      }
`;

const FooterP1 = ()=>{

return <FooterPartWarper>
           <FooterWarper1>
         
     
           <BottomText>©Sealife Restaurant 2021 </BottomText>
           </FooterWarper1>

</FooterPartWarper>


}
     
export default FooterP1;
