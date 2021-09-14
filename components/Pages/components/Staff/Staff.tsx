import React from 'react';
import styled,{css, ThemeConsumer} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';
import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';
import axios from 'axios';
import UpdateForm from './components/UpdateForm/UpdateForm';
import AddForm from './components/AddForm/AddForm';


const GREEN = " rgb(4, 170, 109)";


const Title = styled.div`
   padding-bottom: 40px;
   font-size: 48px;
   text-align: justify;
`;

const SideFixed = styled.div`
     position: fixed;
     width: 29%;
`;
const UserRow = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   height: 30px;
   margin-bottom: 7px;
   font-size: 16px;
`;

const Btn = styled.button`
	width: 48.5%;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-weight: 600;
	color: white;
	background-color: ${GREEN};
    &.add {
		height: 45px;
        width: 13%;
        margin-bottom: 3%;
	}
	&.con {
		background-color: orangered;
	}
    @media only screen and (max-width: 400px){
          font-weight: 300;
          font-size: 8px;
    }
`;

const BtnArea = styled.div`
	display: flex;
    justify-content: space-between;
    width: 20%;
    @media only screen and (max-width: 557px){
          width: 30% ;
    }
`;

const TableTitle = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
color:${CSSCONST.BLUE};
margin-bottom:1.5%;
`;
const TableCln = styled.div`

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
}
interface State{
  staff:staff[];
  delete:boolean;
  updateFormShowID:number;
  deleteStaffID:number;
  addShow:boolean;
}
class Staff extends React.Component<Props,State>{

    constructor(props:any){
      super(props);
      this.state={
       staff:[],
       delete:false,
       updateFormShowID:null,
       deleteStaffID:null,
       addShow:false,
       
      }
     
      this.getUsers = this.getUsers.bind(this);
      this.deleteTrue = this.deleteTrue.bind(this);
      this.deleteFalse = this.deleteFalse.bind(this);
      this.deleteUser = this.deleteUser.bind(this);
      this.hideUpdateForm = this.hideUpdateForm.bind(this);
      this.setDeleteStaffID = this.setDeleteStaffID.bind(this);
    }
	async getUsers() {
		const data = await axios(
            {   method: "get",
            url: CSSCONST.BACK_URL + "user" ,
            headers:{
              Authorization:localStorage.getItem("jwt")
          }
        }).then((res) => {
            console.log(res);
			const user = res.data;
            console.log("USER:")
			console.log(user);
            this.setState({
                staff:user
            })
            console.log("haha");
            console.log(this.state.staff);
		});
	}
    setDeleteStaffID(id:number){
       this.setState({
           deleteStaffID:id,
       })
    }
   deleteTrue(){
       this.setState({
           delete:true,
       })
   }
   deleteFalse(){
    this.setState({
        delete:false,
    })
}
hideUpdateForm(num:number){
    this.setState({
        updateFormShowID:num
    })
}
hideAddForm(){
    this.setState({
        addShow: false,
    })
}
async deleteUser(id:number) {
    const data = await axios(
        {   method: "delete",
        url: CSSCONST.BACK_URL + "user/" + id,
        headers:{
          Authorization:localStorage.getItem("jwt")
      }
    }).then((res) => {
        console.log(res);
        const user = res.data;
        console.log("USER:")
        console.log(user);
        window.location.reload();
    
    });
}

componentDidMount(){
  this.getUsers();
}
    render(){
     
        return <PageContainer style={{zIndex:6}}>
        <Side1Warper style={{marginBottom:"450px"}}>
              <SideFixed>
              <Title>Staff List</Title>
        
              </SideFixed>

        </Side1Warper >
       <Side2Warper >
            
            <Btn className="add" onClick={(e)=>{
              e.preventDefault();
              this.setState({
                  addShow:true,
              })
            }}>ADD NEW</Btn>
            <TableTitle>
                          <TableCln>NAME</TableCln>
                          <TableCln>ROLE</TableCln>
                          <TableCln>PASSWORD/HINT</TableCln>
                          <TableCln></TableCln>
                          <TableCln></TableCln>
                          
            </TableTitle>
                      
        {this.state.addShow && <AddForm hideAddForm={()=>this.hideAddForm()} staff={this.state.staff}></AddForm>}
                
            {this.state.staff.map((ele)=>{
        
  
             return <div key={ele.id} style={{display:(localStorage.getItem("authority")!=="ROLE_ADMIN" && ele.authorities[0]["permission"]==="ROLE_ADMIN") || localStorage.getItem("authority")==="ROLE_STAFF" ? "none":""}} >
                <UpdateForm 
                 updateFormShowId={this.state.updateFormShowID} staff={ele}
                 staffs={this.state.staff}
                 hideUpdateForm={()=>{
                  this.hideUpdateForm(-1);
                 }}
                 ></UpdateForm>
              
              <UserRow >
                <div>{ele.username}</div>
                {ele.authorities.map((ele2)=>{
                    return <div key={ele2.id}>{ele2.permission}</div>
                  
                })}
                <div>{ele.passwordHint}</div>
                <BtnArea>
                <Btn style={{display: this.state.delete && ele.id === this.state.deleteStaffID ? "none":""}}
                  onClick={(e)=>{
                      e.preventDefault();
                      this.deleteFalse();
                      this.setState({updateFormShowID:ele.id})
                  }}
                 >UPDATE</Btn>
                <Btn style={{display: this.state.delete && ele.id === this.state.deleteStaffID ? "none":""}}
                onClick={(e)=>{
                    e.preventDefault();
                    this.deleteTrue();
                    this.setDeleteStaffID(ele.id);
                    
                }}>DELETE</Btn>
                <Btn className="con" style={{display: this.state.delete && ele.id === this.state.deleteStaffID? "":"none"}}
                 onClick={(e)=>{
                     e.preventDefault();
                      this.deleteUser(ele.id);
                      this.deleteFalse();
                     
                     
                 }}>CONFIRM</Btn>
                <Btn style={{display: this.state.delete && ele.id === this.state.deleteStaffID ? "":"none"}}
                onClick={(e)=>{
                    e.preventDefault();
                    this.deleteFalse();
                    
                }}
                >CANCEL</Btn>
                </BtnArea>

             </UserRow>
        </div>
      })}

       </Side2Warper>
</PageContainer>
    }
}
export default Staff;