import React,{useState,useEffect} from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import axios from 'axios';
import {Line} from '../../../utils/Tools';
import { data } from 'autoprefixer';
import SubmitForm from './components/SubmitForm/SubmitForm';
const URL = 'https://test.sealiferestaurantbicheno.com/';
const GREEN =" rgb(4, 170, 109)";

const FetchWarper = styled.div`
 width: 100%;
 font-family: ${CSSCONST.FONT_ALATA};
 @media only screen and (max-width:700px){
      margin-left: 5%;
      margin-right: 5%;
     }
`;

const Title = styled.pre`
  
     padding-bottom: 30px;
     white-space: pre-wrap;
     word-wrap: break-word;
    text-align: justify;

    font-size: 36px;
    font-family: ${CSSCONST.FONT_ALATA};
     @media only screen and (max-width:700px){
      font-size: 26px;
     }
`;

const Text = styled.pre`
  
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
  font-family: ${CSSCONST.FONT_ALATA};
  font-size: 22px;
  @media only screen and (max-width:700px){
      font-size: 16px;
     }
`;

const DataBtnWarper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BtnWarper = styled.div`
 width: 100%;
 display: flex;
 justify-content: flex-end;
`;
const UpdateBtn = styled.button`
width: 100px;
font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
margin-left:5px;
font-weight: 600;
color: white;
background-color: ${GREEN};
height: 60px;
&.con{
  background-color:orangered;
}
`;
interface Props{
  
}
interface State {
        stateData : {
            title:string,
            description:string,
        },
        showNumber:number,

}

class FetchData extends React.Component<Props,State>{
  
   constructor(props:Props){
       super(props);
       this.state={
        stateData : {
            title:'',
            description:'',
        },
        showNumber:0,
       }
      this.getEvent = this.getEvent.bind(this);
      this.showForm = this.showForm.bind(this);
     
   }

   async getEvent(){
       let data = await axios.get(URL+'event/1').then(({data})=>data);
       return data;
}
 showForm(num:number){
     console.log('NUM:'+num)
   this.setState({
      showNumber:num,
   })
   console.log(this.state.showNumber);
 }
hideForm(){
    this.setState({
        showNumber:0,
    })
}
componentDidMount(){
  let  data2=  this.getEvent();
  data2.then(res=>{
    this.setState({stateData:res});
   });
}
componentDidUpdate(){
    let  data2=  this.getEvent();
    data2.then(res=>{
      this.setState({stateData:res});
     });
}
render(){
    return <FetchWarper>
              <div style={{display:this.state.showNumber === 1 ? '':'none'}}>
              <SubmitForm hideForm={()=>this.hideForm()} ID={this.state.showNumber}
                 eventData={this.state.stateData}></SubmitForm>
              </div>
             <BtnWarper>
             <UpdateBtn style={{backgroundColor:this.state.showNumber === 1 ? 'orangered':''}} onClick={()=>this.showForm(1)}
                >{this.state.showNumber===1?'UPDATING':'UPDATE'}</UpdateBtn>
             </BtnWarper>
             <Title>{this.state.stateData.title}</Title>
             <Text>{this.state.stateData.description}</Text> 
           </FetchWarper>
}
}


export default FetchData;