import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Line,ImgContainer,PageContainer} from '../utils/Tools';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import img1 from '../../../../assets/about1.jpg';
import img2 from '../../../../assets/about2.jpeg';

const Title = styled.div`
   display: flex;
   justify-content: center;
   font-family: ${CSSCONST.FONT_ALATA};
   font-size: 24px;
   margin-top: 16px;
   @media only screen and (max-width:700px){
      font-size: 16px;
     }
`;
const TextTitle = styled.div`
   font-size: 36px;
   font-family: ${CSSCONST.FONT_ALATA};
 
   @media only screen and (max-width:700px){
      font-size: 26px;
      margin-left: 5%;
     }
`;
const Text = styled.div`
     font-size: 24px;
     font-family: ${CSSCONST.FONT_ALATA};
     text-align: justify;
    
     @media only screen and (max-width:700px){
      font-size: 16px;
      margin-left: 5%;
     margin-right: 5%;
     }
`;


const About =()=>{

    return (<PageContainer>
               <Side1Warper><div style={{position:'fixed'}}>About.</div></Side1Warper>
              <Side2Warper>
                 <ImgContainer src={img1}></ImgContainer>
                 <Title>The appearance of the Sealife restaurant in the past.</Title>
                 <Line></Line>
                 <ImgContainer src={img2}></ImgContainer>
                 <Title>The appearance of the Sealife restaurant now.</Title>
                 <Line></Line>
                 <TextTitle>A little bit about us</TextTitle>
                 <Text><br/>Overlooking the gorgeous Waubs Bay sits the Sealife Centre Restaurant.
                      First established in 1978 as an aquarium for local fish species such as crayfish, octopus, 
                      sharks and even an eel housed in 24 tanks and a large central tank. The early 90s brought 
                      growth for Sealife with the addition of the glass fronted restaurant area, new kitchen and 
                      outdoor dining area. Due to licencing and regulations the aquarium came to a close in 2009 however 
                      the restaurant continued to flourish. <br/><br/>
Moving forward to 2016 the Restaurant was purchased by Peter & Narelle who made the move to Bicheno one year later. 
Growing up on rural farms in Northern Tablelands of NSW Peter & Narelle have owned & operated a butchers shop and several 
restaurants over a 30 year span. There is a wealth of knowledge between them Peter being a chef & butcher & Narelle running the floor. Coming from country NSW fresh seafood was rarely available so moving to Tasmania has opened many doors to explore the fresh produce right at our door step. At the modern day Sealife Centre Restaurant we pride ourselves by using the freshest and highest standards of Local Seafood, Beef, Lamb, Pork, Chicken and Game Available. Menu changing with the seasons with Vegan and Vegetarian Options Available. We hope you enjoy your meal which has been prepared with respect.<br />
<br/><br/>
From the Sealife Team<br/><br/>
</Text>

                </Side2Warper>
            </PageContainer>
    );
}
export default About;