import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import ContactImg from '../../../../assets/contact.jpg';
import ContactMap from '../../../../assets/contactMap.jpg';
import {Line,PageContainer,Iframe} from '../utils/Tools';

const ContactContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;

`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
   width: 100%;
   flex-basis: 100%;
   font-family:${CSSCONST.FONT_RAKKAS};
   font-size: 1.375rem;
`;
const TextContainer1 = styled.div`
     display: flex;
     flex-direction: column;
    flex-basis: 100%;
`;
const TextContainer2 = styled.div`
     display: flex;
     flex-direction: column;
     flex-basis: 100%;

`;
const Title = styled.div`
   font-size: 1.375rem;
   @media only screen and (max-width:700px){
      font-size: 16px;
     }
`;
const Content = styled.div`
   font-size: 1.25rem;
   @media only screen and (max-width:700px){
      font-size: 14px;
     }
`;
const EntryWarper = styled.div`
     margin-bottom: 25px;
`;
const GoogleWarper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
 
`;
const GoogleMap = styled.iframe`
position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
   border:0;
   box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;
const ImgContainer = styled.img`
      width: 100%;
      max-height: 40%;
      box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;
const  Contact = ()=>{

 return    <PageContainer>
<Side1Warper>
        <div style={{position:'fixed'}}>Contact.</div>  
            </Side1Warper>
            <Side2Warper >
                <ImgContainer src={ContactImg}></ImgContainer>
                <Line></Line>
                <TextContainer>
                
                <TextContainer1>
                    <EntryWarper>
                    <Title>Reservations:<br/>(03) 6375 1121</Title>
                    </EntryWarper>
                     <EntryWarper>
                     <Title>General Enquires:</Title>
                      <Content>sealifebicheno@gmail.com</Content>
                     </EntryWarper>
                     <EntryWarper>
                     <Title>Opening Hours:</Title>
                      <Content>Breakfast<br />8:00am-11:00am<br/>Wednesday to Sunday</Content>
                     </EntryWarper>
                     <EntryWarper>
                     <Content>Lunch<br />11:00am-3:00am<br/>Wednesday to Sunday</Content>
                     </EntryWarper>
                     <Content>Dinner<br />5:00am-Late<br/>Tuesday to Saturday</Content>
                </TextContainer1>
                <TextContainer2>
                    <EntryWarper>
                    <Title>Social:</Title>
                    <a style={{color:"black"}} href="https://www.facebook.com/SealifeBicheno"> <Title>Facebook</Title></a>
                    <a style={{color:"black"}}  href="https://www.tripadvisor.com.au/Restaurant_Review-g261650-d728229-Reviews-Sealife_Bicheno-Bicheno_Glamorgan_Spring_Bay_Tasmania.html">   <Title>Trip advisor</Title></a>
                    </EntryWarper>
                    <EntryWarper>
                    <Title>Parking:</Title>
                        <Content>Free parking spaces are available outside the restaurant.</Content>
                    </EntryWarper>
                  <EntryWarper>
                  <Title>Location:</Title>
                        <Content>1 Tasman Hwy, Bicheno TAS 7215</Content>
                  </EntryWarper>
                </TextContainer2>
                </TextContainer>
                <Line></Line>
                <GoogleWarper>
                <GoogleMap  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.940695511147!2d148.2966295165443!3d-41.87262238471123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7142f2f635350d%3A0x29059c694902a1ec!2s1%20Tasman%20Hwy%2C%20Bicheno%20TAS%207215!5e0!3m2!1sen!2sau!4v1623832989408!5m2!1sen!2sau"}>
                 </GoogleMap>
                </GoogleWarper>
               
               <Line />
                 <ImgContainer  src={ContactMap}></ImgContainer>
                  <br/>
                  <br/>
            </Side2Warper>
 </PageContainer>
            
     

}



export default Contact; 