import React,{Component} from 'react';
import { InputBtn,BackBtn,Input,Label,Textarea,Form,GREEN } from '../FormTools/FormTools';
import axios from 'axios';
import CSSCONST from '../../../../../../cssConst';
import styled, { css } from "styled-components";
import CrudButtons from './components/CrudButtons';


const PriceWarper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 10%;
	min-width: 5.125rem;
	margin-left: 13%;
`;
const Price1Warper = styled.div``;

const DataArea = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
`;
const DataBtnWarper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;
const Price2Warper = styled.div``;
interface Props {
    changeSelectID:(num:number)=>void,
    changeDelBtn:(num:number)=>void,
    getMenus:()=>void,
    btnShow:number,
    selectID:number,
    ele:{
        id:number,
        description:string,
        price:string,
        price2:string,
    },
    }
const LiLine = styled.li`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	padding-bottom: 9px;
`;
class MenuRow extends Component<Props> {
  constructor(props:Props){
      super(props);

  }
render(){
    const {btnShow, selectID,changeDelBtn,changeSelectID,ele,getMenus} = this.props;
    return  	<LiLine key={ele.id}>
        <DataBtnWarper>
            <DataArea>
        <div>{ele.description}</div>

        <PriceWarper>
            <Price2Warper>
                {ele.price2 === "" ? "" : "$"}
                {ele.price2}
            </Price2Warper>
            <Price1Warper
                style={
                    isNaN(Number(ele.price))
                        ? {
                                width: "10.625",
                                justifyContent: "flex-end",
                                whiteSpace: "nowrap",
                          }
                        : {}
                }
            >
                {ele.price === "Price Upon Request" ||
                ele.price === ""
                    ? ""
                    : "$"}
                {ele.price}
            </Price1Warper>
        </PriceWarper>
    </DataArea>
      <CrudButtons selectID={selectID} ele={ele} 
btnShow={btnShow} 
changeDelBtn={(num:number)=>changeDelBtn(num)}
getMenus={getMenus}
changeSelectID = {(num:number)=>changeSelectID(num)}></CrudButtons>
</DataBtnWarper>

    </LiLine> 
 
}

}

export default MenuRow;