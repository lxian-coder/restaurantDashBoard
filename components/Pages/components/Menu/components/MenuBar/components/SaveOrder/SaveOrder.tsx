import React,{Component} from 'react';
import { InputBtn,BackBtn,Input,Label,Textarea,Form,GREEN } from '../../../FormTools/FormTools';
import axios from 'axios';
import CSSCONST from '../../../../../../../../cssConst';
import styled, { css } from "styled-components";


const SaveContainer = styled.div`
      display: flex;
      flex-direction: column;
	  text-align: justify;
      width:min(70%,220px);
      justify-content: center;
      font-size: 18px;
`;
const Text = styled.p`
  
      padding-top: 12%;
     color: ${CSSCONST.PURPLE};
     font-family: ${CSSCONST.FONT_ALATA};
	 width: 100%;
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
}
interface State{
showOrNot:boolean;
}

class SaveOrder extends Component<Props,State>{

    constructor(props:Props){
        super(props)
        this.state={
            showOrNot:false,
        }
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
          }).then(
            (res) => {
               
              console.log(res.data);
              this.setState({showOrNot:true});
            },
            (error) => console.log(error)
          );
        }

render(){
    return <SaveContainer>
		   <Text style={{display:this.props.orderChanged ? 'none':''}}>You can drag to change the menu order.</Text> 
            <Text style={{display:this.props.orderChanged  ? '':'none', whiteSpace:'nowrap'}}>Order Changed!</Text>
            <Text style={{display: !this.props.orderChanged && this.state.showOrNot ? '':'none', whiteSpace:'nowrap'}}>Successfully Saved!</Text>
            <Btn style={{display:this.props.orderChanged  ? '':'none'}} onClick={()=>{this.processNewOrderMenu(); this.props.changeMute()}}>SAVE</Btn>

        </SaveContainer>
}


}

export default SaveOrder;