import React,{Component} from 'react';
import { InputBtn,BackBtn,Input,Label,Textarea,Form,GREEN } from '../../FormTools/FormTools';
import axios from 'axios';
import CSSCONST from '../../../../../../../cssConst';
import styled, { css } from "styled-components";

const DeleBtn = styled.button`
	width: 48.5%;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	font-weight: 600;
	color: white;
	background-color: ${GREEN};

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
interface Props {
changeSelectID:(num:number)=>void,
changeDelBtn:(num:number)=>void,
getMenus:()=>void,
btnShow:number,
selectID:number,
ele:{
    id:number,
},
}
class CrudButtons extends Component<Props> {
  
  constructor(props:Props){
    super(props);
   
  }
  async deleteMenu(id: number) {
    const newMenu = await axios({
        method: "delete",
        url: CSSCONST.BACK_URL + "menu" + "/" + id,
    }).then(
        (res) => {
            console.log(res);
            this.props.getMenus();
            this.props.changeDelBtn(1);
        },
        (error) => console.log(error)
    );
}

  render(){
      const {btnShow, selectID,changeDelBtn,changeSelectID,ele} = this.props;
      return <BtnArea>
       
          <DeleBtn
          style={{
              display:
                  btnShow === 1 ||
                 selectID !== ele.id
                      ? "flex"
                      : "none",
          }}
          onClick={() => {
               changeDelBtn(2);
               changeSelectID(ele.id);
          }}
      >
          UPDATE
      </DeleBtn>
      <DeleBtn
          style={{
              display:
                  btnShow === 1 ||
                  selectID !== ele.id
                      ? "flex"
                      : "none",
          }}
          onClick={() => {
               changeDelBtn(3);
               changeSelectID(ele.id);
          
             
          }}
      >
          DELETE
      </DeleBtn>
      <DeleBtn
          className="con"
          style={{
              display:
                  btnShow === 3 &&
                  selectID === ele.id
                      ? ""
                      : "none",
          }}
          onClick={() => {
              this.deleteMenu(ele.id);
          }}
      >
          CONFIRM
      </DeleBtn>
      <DeleBtn
          style={{
              display:
               btnShow === 3 &&
                 selectID === ele.id
                      ? ""
                      : "none",
          }}
          onClick={() => changeDelBtn(1)}
      >
          CANCEL
      </DeleBtn>
        
      
  </BtnArea>

}
}

export default CrudButtons;