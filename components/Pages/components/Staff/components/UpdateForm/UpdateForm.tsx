import React from 'react';
import styled,{css, ThemeConsumer} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import axios from 'axios';
const URL = 'https://test.sealiferestaurantbicheno.com/';

const LoginWarper = styled.div`
  z-index: 10;
  width: 500px;
  height: 320px;
  background-color:white;
  position: fixed;
  top:25%;
  left: 40%;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-color: ${CSSCONST.BLUE};
  border-style: solid;
  box-shadow:0px 10px 6px 5px rgb(0 0 0 / 20%);
`;
const Form = styled.form`
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;
const Input = styled.input`
 width: 80%;
 height: 35px;
 border-radius: 4px;
 margin-bottom: 10px;
`;
const Text = styled.div`
  font-family:${CSSCONST.FONT_NORICAN};
  font-size:40px;
  margin-bottom: 4%;

`;
const Button = styled.button`
  border-radius: 5px;
  background-color:${CSSCONST.BLUE};
  color:white;
  width: 70px;
  height: 40px;
`;
const InputBtn = styled.input`
  border-radius: 5px;
  background-color:${CSSCONST.BLUE};
  color:white;
  width: 70px;
  height: 40px;

`;
const Label = styled.label`
font-family: ${CSSCONST.FONT_ALATA};
font-size: 18px;
`;

const Buttonwarper = styled.div`
 display: flex;
 flex-direction: row;
 width: 80%;
 justify-content: space-between;
`;
const CrossSymble = styled.button`
 position: absolute;
 right: 10%;
 top: 5%;
 border: 0ch;
 background-color: white;
`;
const AuthSelectWarper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`;

interface authority{
    id:number;
    permission:string;
    users:[];
}
interface staff {
	id: number;
	username: string;
	passwordHint: string;
    authorities:authority[];
}
 interface Props{
     staff:staff;
     updateFormShowId:number;
     hideUpdateForm:()=>void;
 }
 interface State {
     selected:string;
 }

class UpdateForm extends React.Component<Props,State>{
    
    constructor(props:any){
  
        super(props);

        this.state={
         selected:"",
        }
    }
   

componentDidMount(){
    this.props.staff.authorities.map((ele)=>{
     console.log(ele.permission);
     this.setState({
         selected:ele.permission
     })
    
    })
}
    
    render(){
        return <LoginWarper style={{display:this.props.staff.id === this.props.updateFormShowId  ? "":"none"}} >
                
               <Form   onSubmit={(e: any) => {
        
        }}>
                   <Text>Update</Text>
                   <CrossSymble onClick={(e)=>{
                   e.preventDefault;
                   this.props.hideUpdateForm();
                   }} >✖️</CrossSymble>
                   <Label htmlFor='username'> User Name: </Label>
                   <Input type='text' required name='username' id='username'
                     defaultValue={this.props.staff.username}
                   ></Input>
                   <Label htmlFor='password'>Password:</Label>
                   <Input type='password' required name='password' id='password'></Input>
                   <Label htmlFor='password'>PasswordHint:</Label>
                   <Input type='text' required name='password' id='password'
                   defaultValue={this.props.staff.passwordHint}></Input>
                   <AuthSelectWarper>
                   <Label style={{marginRight:"20%"}}htmlFor="authoritySelect">Authority:</Label>

       <select name="authoritySelect" id="authoritySelect" value={this.state.selected}>
         <option  value="ROLE_BOSS" >BOSS</option>
         <option  value="ROLE_STAFF"  >STAFF</option>
         <option  style={{display:localStorage.getItem("authority") !== "ROLE_ADMIN" ? "none":""}} value="ROLE_ADMIN"  >ADMIN</option>
        </select> 

                   </AuthSelectWarper>
                   <Buttonwarper>
                   <InputBtn type='submit'></InputBtn>
                   <Button onClick={()=>this.props.hideUpdateForm()}>Cancel</Button>
                   </Buttonwarper> 
              </Form>
            </LoginWarper> 
    }
}

export default UpdateForm;