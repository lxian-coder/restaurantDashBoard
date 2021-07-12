import React,{useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import axios from 'axios';


const FetchWarper = styled.div`
 width: 100%;
 font-family: ${CSSCONST.FONT_ALATA};
 @media only screen and (max-width:700px){
     
      margin-left: 5%;
      margin-right: 5%;
  
     }
`;

const Title = styled.div`
     font-size: 36px;
     padding-bottom: 30px;
     @media only screen and (max-width:700px){
      font-size: 26px;
     }
`;

const Text = styled.div`
  font-size: 22px;
  @media only screen and (max-width:700px){
      font-size: 16px;
     }
`;


const FetchData = ()=>{
    　const [item, setItem] = useState({
        events:{
            title:String,
            description:String,
        }
    });
    useEffect(()=>{
        getEvent();
    },[]); 

    const getEvent = async()=>{
        const data =  await axios.get('https://test.sealiferestaurantbicheno.com/event/1').then(
            res=>{console.log(res); setItem({events:res.data})}
        );
    }
    console.log(item.events)
    

    return <FetchWarper>
              <Title>{item.events.title}</Title>
              <Text>{item.events.description}</Text>
          </FetchWarper>
}

export default FetchData;