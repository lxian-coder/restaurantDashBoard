import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import home1 from '../../../../assets/home1.jpeg';
import homeP2_1 from '../../../../../../assets/homep2_1.jpeg';
import homeP2_2 from '../../../../../../assets/homep2_2.jpeg';
import homeP2_3 from '../../../../../../assets/homep2_3.jpg';

const Homep2Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 3%;

`;
const Side1 =styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
const Text = styled.div`
font-size: 2.25rem;
margin-bottom: 3%;
font-family: ${CSSCONST.FONT_ZILLA} ;
@media only screen and (max-width:700px){
      font-size: 26px;
     }
`;
const Side2 =styled.div`
       display: flex;
       justify-content: center;
       width: 130%;
@media only screen and (max-width:1359px){
      width: 110%;
}
@media only screen and (max-width:1154px){
      flex-direction: column;
      width: 90%;
     justify-content: flex-start;

}
`;

const ImgContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width:1154px){
      margin-bottom: 12px;
      max-height: 35rem;
 
}
`;
const ImgWarper= styled.img`
   width:80%;
   box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
   @media only screen and (max-width:1154px){
      width: 100%;

}
`;

const Homep2 = ()=>{

    return <Homep2Container>
            <Side1>
                <Text>
                   Located in Beachside Bicheno
                </Text>
            </Side1>
            <Side2>
                    <ImgContainer><ImgWarper src={homeP2_1}></ImgWarper></ImgContainer>
                    <ImgContainer> <ImgWarper src={homeP2_2}></ImgWarper></ImgContainer>
                    <ImgContainer><ImgWarper src={homeP2_3}></ImgWarper></ImgContainer>
            </Side2>


    </Homep2Container>;
}

export default Homep2;