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
       flex-direction:column;
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
     @media only screen and (max-width:800px){
         margin-top: 5%;
         font-size: .9rem;
      }
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
   @media only screen and (max-width:800px){
   
         font-size: .9rem;
      }
   ;
`;

const Side2Content= styled.div`
     font-size : .875rem;
     @media only screen and (max-width:800px){
   
   font-size: .7rem;
}`;
const BottomText = styled.div`
       font-size : .875rem;
       display: flex;
       justify-content: center;
       margin-top: 3%;
       @media only screen and (max-width:800px){
   
   font-size: .6rem;
}
`;
const Warper = styled.div`
font-size: 18px;
font-family:${CSSCONST.FONT_RAMMETTO};
color: white ;
@media only screen and (max-width:800px){
   
   font-size: .7rem;
}

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
const Br = styled.br`
   @media only screen and (max-width:800px){
         display: none;
      }
`;
const FloatText2 = styled.div`
      display: flex;
      font-size: 16px;
      font-family:${CSSCONST.FONT_RAMMETTO};
      right:4%;
      bottom: 30%;
      @media only screen and (min-width:801px){
         display: none;
      }
      @media only screen and (max-width:800px){
         display: flex;
         font-size: 11px;
      }
`;

const FooterP1 = ()=>{

return <FooterPartWarper>
           <FooterWarper1>
           <FooterPartWarper2>
           <Side1Warper>
            <Name>Sealife <br/> Restaurant</Name>
            <Address>1 Tasman Hwy,<br/> Bicheno TAS 7215<br/><br/></Address>
       </Side1Warper>

       <Side2Warper>
          <Side2Name>Opening Hours<Br></Br><br/></Side2Name>
          <Side2Content>
           <Side2Name>Breakfast</Side2Name>
          8:00am-11:00pm <br />
          Thursday to Monday<br /><br/>
        </Side2Content>
          <Side2Content>
          <Side2Name>Lunch</Side2Name>
          11:00am-3:00pm <br />
          Thursday to Monday<br /><br/>
        </Side2Content>
        <Side2Content>
        <Side2Name>Dinner</Side2Name>
        5:00pm-Late<br/>
        Thursday to Saturday<br/><br/>
       </Side2Content>
       </Side2Warper>
       <Warper>
            <Side2Name>Reservation<Br></Br><Br></Br></Side2Name>
             <div>(03) 6375 1121</div><br></br>
            </Warper>
           <Warper>
           <Side2Name>Social<Br></Br><Br></Br></Side2Name>
           <a style={{color:"white"}} href="https://www.facebook.com/SealifeBicheno"><div>Facebook<br/></div></a>
           <a style={{color:"white"}}  href="https://www.tripadvisor.com.au/Restaurant_Review-g261650-d728229-Reviews-Sealife_Bicheno-Bicheno_Glamorgan_Spring_Bay_Tasmania.html"><div>Trip Advisor</div></a>
           <br/></Warper>
          <FloatText>
      Morning and Afternoon Tea Available <br/>
     Takeaway Coffee Available at Window
   </FloatText>
   <FloatText2>
      Morning and Afternoon Tea Available.
     Takeaway Coffee Available at Window.
   </FloatText2>

           </FooterPartWarper2>
           <BottomText>©Sealife Restaurant 2021 </BottomText>
           </FooterWarper1>

</FooterPartWarper>

}
     
export default FooterP1;
