import React,{Component} from 'react';
import { InputBtn,BackBtn,Input,Label,Textarea,Form,GREEN } from '../FormTools/FormTools';
import axios from 'axios';

import CSSCONST from '../../../../../../cssConst';

interface Props {
 getMenus:()=>void,
 changeDelBtn:()=>void,
 setCategory:()=>void,
 successNotion:()=>void,
 key : string,
 value:string,
}

class AddForm extends Component<Props> {
    constructor(props:Props){
       super(props);
       this.submitNewMenuForm = this.submitNewMenuForm.bind(this);
    }
    
    async submitNewMenuForm(e:any){
        e.preventDefault();
        const fd = new FormData(e.target);
        const body = {
          description:fd.get("description"),
          price:fd.get("price"),
          price2:fd.get("price2"),
          category:fd.get("category")
        };
        
       await axios({
          method:'post',
          url:CSSCONST.BACK_URL+'menu',
          data:body,
        })
        .then((res)=>{
          console.log(res);
          this.props.getMenus();
          this.props.changeDelBtn();
          this.props.setCategory();
          this.props.successNotion();
     
        },(error)=>
          console.log(error));
      }
  
    render(){
        const {setCategory, successNotion,key,value} = this.props;
        return   <Form  onSubmit={(e:any)=>this.submitNewMenuForm(e)} >
        <Label htmlFor="description">description:</Label>
          <Textarea   name='description' id='des1' required onClick={()=>successNotion()}></Textarea>
         <Label  htmlFor="price">price:</Label> 
          <Input className="price" required onClick={()=>successNotion()}  name='price' id='price1'></Input>
          <Label htmlFor='price2' style={{display:key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}}>price2/one glass:</Label>
          <Input className="price" onClick={()=>successNotion()}  name="price2" id='price21' style={{display:key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}}></Input>
          <input type='text' name="category" id='category' style={{display:'none'}} defaultValue={value}></input>
           <InputBtn type='submit' value='ADD' onClick={()=>this.setState({successNote:key})} ></InputBtn>
           <BackBtn  onClick={(e)=>{
              e.preventDefault();
              successNotion();
              setCategory();}}>BACK</BackBtn>
      </Form>
    }

}

export default AddForm; 