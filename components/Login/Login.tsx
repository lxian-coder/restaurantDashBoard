import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import { Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import { timers } from 'jquery';


const LoginWarper = styled.div`
  z-index: 10;
  width: 350px;
  height: 320px;
  background-color: green;
  position: fixed;
  left: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;
const Form = styled.form`
 display: flex;
 flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Input = styled.input`
 width: 80%;
 height: 40px;
 border-radius: 4px;
 margin-bottom: 20px;
`;
const Text = styled.div`
  font-family:${CSSCONST.FONT_NORICAN};
  font-size:40px;
  margin-bottom: 6%;
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
font-size: 20px;
`;

const Buttonwarper = styled.div`
 display: flex;
 flex-direction: row;
 width: 80%;
 justify-content: space-between;
`;

 interface Props{

 };
 interface State {
     passwordHint:string,
 }

class Login extends React.Component<Props,State>{
    
    constructor(props:any){
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.getPasswordHint = this.getPasswordHint.bind(this);
        this.state={
            passwordHint:null,
        }
    }
    async getPasswordHint(e: any) {
        e.preventDefault();
     
       const username:string =(document.getElementById("username") as HTMLInputElement).value;
       console.log("aaaa");
       console.log(username);
       console.log(CSSCONST.BACK_URL+"user/"+username);
      
        await axios({
          method: "get",
          url: CSSCONST.BACK_URL + "user/"+ username,
        }).then(
          (res) => {
            const userGetDTO = res.data;
            const passwordHint = userGetDTO.passwordHint;
            console.log(userGetDTO.passwordHint);
            if(passwordHint !== null)
            this.setState({
                passwordHint:passwordHint,
            })

          },
          (error) => console.log(error)
        );
      }

    async loginSubmit(e: any) {
        e.preventDefault();
        const fd = new FormData(e.target);

        const body = {
            // remove empty from start and end
          username: String(fd.get("username")).trim(),
          password: String(fd.get("password")).trim(),
        };
        

        await axios({
          method: "post",
          url: CSSCONST.BACK_URL + "login",
          data: body,

        }).then(
          (res) => {
              console.log("haha");
              const token = res.headers.authorization;
            localStorage.setItem("jwt",token);
            console.log("TOKEN STORAGE: "+localStorage.getItem("jwt"));
          },
          (error) => console.log(error)
        );
      }

    
    render(){
        return <LoginWarper>
                
               <Form   onSubmit={(e: any) => {
          this.loginSubmit(e);
        }}>
                   <Text>Login</Text>
                   <Label htmlFor='username'>User Name: </Label>
                   <Input type='text' required name='username' id='username' ></Input>
                   <Label htmlFor='password'>Password:</Label>
                   <Input type='password' required name='password' id='password'></Input>
                   <Buttonwarper>
                   <Button id="getName" onClick={(e)=>this.getPasswordHint(e)}>Password hint</Button>
                   <div id="passwordHint">{this.state.passwordHint}</div>
                   <InputBtn type='submit'></InputBtn>
                   </Buttonwarper>
              </Form>
            </LoginWarper>
    }
}

export default Login; 
