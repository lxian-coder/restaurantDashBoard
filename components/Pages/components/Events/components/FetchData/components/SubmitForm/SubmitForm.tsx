import React  from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../../../cssConst';
import axios from 'axios';
import {Line} from '../../../../../utils/Tools';
import { data } from 'autoprefixer';

const GREEN =" rgb(4, 170, 109)";


const ChangeArea = styled.div`
   display: flex;
   flex-direction: column;
`;
const InputBtn = styled.input`
 height:35px;
 margin-top:5px;
 font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
color: white;
background-color: ${GREEN};
`;
const BackBtn  = styled.button`
 height:35px;
 margin-top:5px;
 font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
color: white;
background-color: ${GREEN};
`;
const Input = styled.input`
       width: 50px;
`;
const Textarea = styled.textarea`
        width:100%;
        font-size: 36px;
        height: 60px;
        font-family: ${CSSCONST.FONT_ALATA};
     @media only screen and (max-width:700px){
      font-size: 26px;
     }
        &.des{
            height: 550px;
            font-family: ${CSSCONST.FONT_ALATA};
           font-size: 22px;
         @media only screen and (max-width:700px){
      font-size: 16px;
     }
        }
        
`;
const Label = styled.label`
   color:rgb(4, 170, 109);
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
`;


interface Props{
    hideForm:()=>void;
    ID:number,
    eventData:{
        title:string,
        description:string,
    }
}
interface State{
    showOrNot:boolean,
}
class SubmitForm extends React.Component<Props,State>{
     
    constructor(props:Props){
        super(props);
        this.state={
            showOrNot:false,
        }
        this.updateEvent = this.updateEvent.bind(this);
    }

    async updateEvent(e:any){
        e.preventDefault();
        let fd = new FormData(e.target);
    

        const body={
            title:fd.get("title"),
            description:fd.get("description"),
        }
        console.log("_______________");
     
        console.log(body.title);
        console.log(body.description);
        console.log(fd.get("id"));
           await axios({
               method:"patch",
               url:CSSCONST.BACK_URL+"event/"+1,
               data: body,
               headers:{
                Authorization:localStorage.getItem("jwt")
            }
           }).then(
               (res)=>{
                console.log(res);
                this.props.hideForm();
               },
               (error)=>{
                   console.log(error);
               }
           );
       }

  render(){
      return  <ChangeArea >
      <Form onSubmit={(e:any)=>this.updateEvent(e)}>
         <Label htmlFor="title" >TITLE:</Label>
         <Textarea  name="title" defaultValue={this.props.eventData.title}></Textarea>
         <Label htmlFor="description">DESCRIPTION:</Label>
         <Textarea className="des"  name="description"defaultValue={this.props.eventData.description}></Textarea>
         <input type='text' name="id" value={this.props.ID} style={{display:"none"}}></input>
         <InputBtn type='submit' value='SUBMIT' ></InputBtn>
         <BackBtn onClick={()=>this.props.hideForm()} >BACK</BackBtn>
     </Form>
      <Line></Line>
      </ChangeArea>
  }

}

export default SubmitForm;