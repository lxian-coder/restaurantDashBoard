import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import home1 from '../../../../assets/home1.jpeg';
import homePack1 from '../../../../../../assets/homepack1.jpeg';
import homePack2 from '../../../../../../assets/homepack2.jpg';
import homePack3 from '../../../../../../assets/homepack3.jpg';
import homePack4 from '../../../../../../assets/homePack4.jpeg';

const HomeP1Container = styled.div`
     display: flex;
     width: 100%;
     font-family: ${CSSCONST.FONT_ZILLA};
     justify-content: space-between;
     
     @media only screen and (max-width:700px){
       flex-wrap:wrap;
       justify-content: center;
     
     }
`;
const Side1Warper = styled.div`
    display: flex;
    justify-content: center;
 
    justify-content: flex-start;
    min-width: 310px;
`;
const Side1 = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
`;

const Title = styled.div`
   font-size: 36px;
   display: flex;
   @media only screen and (max-width:700px){
      font-size: 26px;
     }
`;
const TextArea = styled.div`
   font-size:24px;
   text-align: justify;
   @media only screen and (max-width:700px){
      font-size: 16px;
     }
`;
const Side2Warper = styled.div`
    display: flex;
    justify-content: flex-end;
    @media only screen and (max-width:700px){
  
       margin-top: 7%;
 
       justify-content: center;
     }
`;
const Side2 = styled.div`
display: flex;
flex-direction: column;
justify-content:center;

margin-left: 20%;
box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
@media only screen and (max-width:700px){
       margin-left: 0;
       width: 90%;
     }
`;

const PhotoLine = styled.div`
   display: flex;
   justify-content: center;
   width: 100%;
   @media only screen and (max-width:700px){
      max-height: 13.2rem ;
  
     }
`;
const Photo1 =styled.img`
   width:30% ;
`;
const Photo2 = styled.img`
     width: 70%;
`;
const Photo3 = styled.img`
      width: 60%;
`;
const Photo4 = styled.img`
      width: 40%;
`;
const Home1 = ()=>{

return <HomeP1Container>
       <Side1Warper>
       <Side1>
           <Title>Enjoy with Us Today<br/><br/></Title>
           <TextArea>
           Please try our Selection of Tasmanian 
           Seafood and Produce with Wines Mainly From East Coast Tasmania, 
           which We are certian will satisfy your appetite.
           </TextArea>
        </Side1>
       </Side1Warper>

        <Side2Warper>
        <Side2>
             <PhotoLine>
                 <Photo1 src={homePack1}></Photo1>
                 <Photo2 src={homePack2}></Photo2>
             </PhotoLine>
             <PhotoLine>
                 <Photo3 src={homePack3}></Photo3>
                 <Photo4 src={homePack4}></Photo4>
             </PhotoLine>
        </Side2>
        </Side2Warper>

     </HomeP1Container>
};

export default Home1;