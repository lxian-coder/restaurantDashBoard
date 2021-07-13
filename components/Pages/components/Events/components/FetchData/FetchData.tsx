import React,{useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import axios from 'axios';
import { data } from 'autoprefixer';
const URL = 'https://test.sealiferestaurantbicheno.com/';

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
interface Props{
  
}


let getData;
class FetchData extends React.Component<Props>{
     state = {
        stateData : {
            title:String,
            description:String,
        }
    }
   constructor(props:Props){
       super(props);

      this.getEvent = this.getEvent.bind(this);

   }

   async getEvent(){
       let data = await axios.get(URL+'event/1').then(({data})=>data);

        // let data = await axios.get(URL+'event/1').then(res=>{
        //     this.setState({
        //         stateDate:res.data,
        //     })
        // });
       return data;
}

componentDidMount(){
   let data2=  this.getEvent();
  data2.then(res=>{
    this.setState({stateData:res});
   });

}

render(){
    return <FetchWarper>
             <Title>{this.state.stateData.title}</Title>
             <Text>{this.state.stateData.description}</Text>   

             <Text>I am Trying</Text>
           </FetchWarper>
}

}

  
export default FetchData;