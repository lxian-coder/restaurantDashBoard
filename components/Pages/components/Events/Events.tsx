import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';
import FetchData from './components/FetchData/FetchData';

const Title = styled.div`
   padding-bottom: 40px;
   font-size: 48px;
   text-align: justify;
`;
const TitleText = styled.div`
   font-family: ${CSSCONST.FONT_RAKKAS};
   font-size:26px;
   text-align: justify;

   
  width:min(70%,220px);
`;
const SideFixed = styled.div`
     position: fixed;
     width: 29%;

`;
const TextTile = styled.div`
  font-family: ${CSSCONST.FONT_ALATA};
  font-size: 36px;
  margin-bottom: 20px;
  @media only screen and (max-width:700px){
      font-size: 26px;
      margin-left: 5%;
      margin-right: 5%;
     }
`;
const Text = styled.div`
  font-family: ${CSSCONST.FONT_ALATA};
  font-size: 22px;
  text-align: justify;
  @media only screen and (max-width:700px){
      font-size: 16px;
      margin-left: 5%;
      margin-right: 5%;
     }
`;

const TitleDelete = styled.div`
     font-size: 36px;
     padding-bottom: 30px;
     font-family: ${CSSCONST.FONT_ALATA};
     @media only screen and (max-width:700px){
      font-size: 26px;
      margin-left: 5%;
      margin-right: 5%;
     }
`;

const TextDelete = styled.div`
  font-size: 22px;
  font-family: ${CSSCONST.FONT_ALATA};
  text-align: justify;
  @media only screen and (max-width:700px){
      font-size: 16px;
      margin-left: 5%;
      margin-right: 5%;
  
     }
`;

const Events = ()=>{
      return <PageContainer>
               <Side1Warper>
                     <SideFixed>
                     <Title>Upcoming <br/>Events.</Title>
                      <TitleText>
                       See what’s happening at Sealife! Check back often to learn about exciting menu updates, new wine, special events, and more.
                      </TitleText>
                     </SideFixed>

               </Side1Warper>
              <Side2Warper>
                   <FetchData></FetchData>
                   <Line></Line>
                   <TitleDelete>
                     See Life & Drink It
                   </TitleDelete>
                   <TextDelete>

Event Details<br/>
Friday, 10 September 2021<br/>
6:00pm - 9:30pm<br/><br/>

Sealife Restaurant & Café<br/>
1 Tasman Hwy,Bicheno 7215<br/>
Cost: $140.00<br/><br/>

The Farm Shed East Coast Wine Centre and the Bicheno Sealife Restaurant & Café invite you to explore the East Coast wine region with a special food and wine presentation dinner overlooking the serenity of Waub’s Bay.<br/><br/>

Savour the flavours of the East Coast with a 6-course degustation feast of locally sourced seasonal produce, superbly matched with six wines from different East Coast producers.<br/><br/>

At each course, your wine experts from The Farm Shed East Coast Wine Centre will tell you about the wines you are drinking, where they come from and what makes them special.<br/><br/>

Seating will be in tables of 8, so get your friends together for this special event!<br/><br/>

To book, please call 03 6375 1121. Payment will be taken on booking to confirm your spot.<br/><br/>

(Matched wines = 3 standard drinks. Additional drinks are available for purchase on the night.)
                   </TextDelete>
                  <Line></Line>
                   <TextTile>Group dining and Functions</TextTile>
                   <Text>At Sealife we are available for private functions such as Weddings, Birthday Celebrations and any other important occasion. We also provide a Degustation Option for smaller groups giving a more private and personal experience.
<br/><br/>To learn more about our fabulous food and beverages whilst taking in the magnificent view of Waubs Bay, Phone us on (03)63751121.<br/><br/></Text>
              </Side2Warper>
      </PageContainer>

};

export default Events;
