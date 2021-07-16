import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';
import FetchData from './components/FetchData/FetchData';
import axios from 'axios';
const URL = 'https://test.sealiferestaurantbicheno.com/';

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

interface Props{
}
interface State{
}
class Events extends React.Component<Props,State>{


     render(){
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
              <FetchData ></FetchData>

             <Line></Line>
              <TextTile>Group dining and Functions</TextTile>
              <Text>At Sealife we are available for private functions such as Weddings, Birthday Celebrations and any other important occasion. We also provide a Degustation Option for smaller groups giving a more private and personal experience.
<br/><br/>To learn more about our fabulous food and beverages whilst taking in the magnificent view of Waubs Bay, Phone us on (03)63751121.<br/><br/></Text>
         </Side2Warper>
 </PageContainer>

     }
     
};

export default Events;
