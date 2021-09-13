import React from 'react';
import styled,{css, ThemeConsumer} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import axios from 'axios';


const LoginWarper = styled.div`
  width: 400px;
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
 margin-bottom: 14px;
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
margin-bottom: 15px;

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
     
     hideAddForm:()=>void;

 }
 interface State {
     selected:string;
  
 }

class AddForm extends React.Component<Props,State>{
    
    constructor(props:any){
  
        super(props);
        this.state={
         selected:"",
       
        }

        this.addNewUser = this.addNewUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    async addNewUser(e: any) {
        e.preventDefault();
        const fd = new FormData(e.target);
     

      
        const body = {
            // remove empty from start and end
        
          username: String(fd.get("username")).trim(),
          encodedPassword: String(fd.get("password")).trim(),
          passwordHint:String(fd.get("passwordHint")).trim(),
          authorities:[{
            permission: String(fd.get("authoritySelect")).trim(),
          }
           
          ]
        };
        
        await axios({
          method: "post",
          url: CSSCONST.BACK_URL +"user",
          data: body,
          headers:{
            Authorization:localStorage.getItem("jwt")
        }
        }).then(
          (res) => {
              this.props.hideAddForm();
              window.location.reload();
              console.log(res);
     
          },
          (error) => {
            console.log(error)

          }
        );
      }
      handleChange(e:any){
           e.preventDefault();
           console.log(e.target.value);
          this.setState({selected: e.target.value});
          console.log("the true selected is : ");
          
          console.log(this.state.selected);
          

      }

    
    render(){
        return <LoginWarper >
                
               <Form   onSubmit={(e: any) => { this.addNewUser(e);
        
        }}>
                   <Text>Add New</Text>
                   <CrossSymble onClick={(e)=>{
                   e.preventDefault();
                   this.props.hideAddForm();
                   }} >✖️</CrossSymble>
                   <Label htmlFor='username'> User Name: </Label>
                   <Input type='text' required name='username' id='username'></Input>
                   <Label htmlFor='password'>Password:</Label>
                   <Input type='password' required name='password' id='password'></Input>
                   <Label htmlFor='passwordHint'>PasswordHint:</Label>
                   <Input type='text' required name='passwordHint' id='passwordHint'
                    ></Input>
                   <AuthSelectWarper>
                   <Label style={{marginRight:"20%"}}htmlFor="authoritySelect">Authority:</Label>
                   <input style={{display:"none"}}  name="id" id="id"></input>

       <select name="authoritySelect" id="authoritySelect" value={this.state.selected} onChange={(e:any)=>this.handleChange(e)} >
         <option  value="ROLE_BOSS" >BOSS</option>
         <option  value="ROLE_STAFF" >STAFF</option>
         <option  style={{display:localStorage.getItem("authority") !== "ROLE_ADMIN" ? "none":""}} value="ROLE_ADMIN"  >ADMIN</option>
        </select> 

                   </AuthSelectWarper>
                   <Buttonwarper>
                   <InputBtn type='submit' ></InputBtn>
                   <Button onClick={(e)=>{
                     e.preventDefault(),
                     this.props.hideAddForm()}}>Cancel</Button>
                   </Buttonwarper> 
              </Form>
            </LoginWarper> 
    }
}

export default AddForm;


