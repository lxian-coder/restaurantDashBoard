import React,{Component} from 'react';
import axios from 'axios';
import styled, { css } from "styled-components";
import CSSCONST from '../../../../../../cssConst';
const SaveContainer = styled.div`
      display: flex;
      flex-direction: column;
	  text-align: justify;
      justify-content: center;
      font-size: 25px;
      padding-bottom:6%;
      @media only screen and (min-width: 962px){
           display: none;
      }
`;
const Text = styled.p`
  
      padding-top: 5%;
     color: ${CSSCONST.PURPLE};
     font-family: ${CSSCONST.FONT_ALATA};
	 width: 100%;
     &.success{
        padding-top: 2%;
     }
`;

const Btn = styled.button`
	
	font-size: 18px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-weight: 600;
	color: white;
	background-color: ${CSSCONST.PURPLE};
    height: 45px;
    width: 100%;
`;

interface menuData {
	id: number;
	category: string;
	description: string;
	price: string;
	price2: string;
     index:number
}
interface Props{
orderChanged:boolean,
menus:menuData[],
changeMute:()=>void,
showOrderSuccessNotion:boolean;
turnOnOrderNotion:()=>void,
}


interface State {

}

class SmallSaveOrder extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.processNewOrderMenu = this.processNewOrderMenu.bind(this);
        this.patchMenuIndex = this.patchMenuIndex.bind(this);
    }

  processNewOrderMenu(){
    this.props.menus.forEach((ele,index)=>{
    if(ele.index != index){
         this.patchMenuIndex(ele,index);
    }
    })
}
    async patchMenuIndex(ele:any,changedIndex:number) {
        const  body:{description:String;price:string;price2:string;index:number} = {
            description : null,
            price:null,
            price2:null,
            index:changedIndex,
           }
        
         await  axios({
            method: "patch",
            url: CSSCONST.BACK_URL + "menu" + "/" + ele.id,
            data: body,
            headers:{
              Authorization:localStorage.getItem("jwt")
          }
          }).then(
            (res) => {
               
              console.log(res.data);
              this.props.turnOnOrderNotion();
            },
            (error) => console.log(error)
          );
        }

    render(){
        return <SaveContainer>
        <Text style={{display:this.props.orderChanged ? 'none':''}}>You can drag to change the menu order.</Text> 
        <Text style={{display:this.props.orderChanged  ? '':'none', whiteSpace:'nowrap'}}>Order Has Been Changed!</Text>
        <Text className='success' style={{display: !this.props.orderChanged && this.props.showOrderSuccessNotion ? '':'none', whiteSpace:'nowrap'}}>Saved Successfully!</Text>
        <Btn style={{display:this.props.orderChanged  ? '':'none'}} onClick={()=>{this.processNewOrderMenu(); this.props.changeMute()}}>SAVE</Btn>
    </SaveContainer>
}
    }


export default SmallSaveOrder;