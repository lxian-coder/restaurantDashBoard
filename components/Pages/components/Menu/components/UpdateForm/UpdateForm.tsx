import React from "react";
import styled, { css } from "styled-components";
import {
  InputBtn,
  BackBtn,
  Input,
  Label,
  Textarea,
  Form,
  GREEN,
} from "../FormTools/FormTools";
import axios from "axios";
import CSSCONST from "../../../../../../cssConst";
const LiLine = styled.li`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	padding-bottom: 9px;
`;
interface Props {
  ele: {
    price: string;
    description: string;
    price2: string;
    id: number;
  };
  BtnShow: number;
  selectID: number;
  key: string;
  changeDelBtn: () => void;
  getMenus: () => void;
}
interface State {}
class UpdateForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  async patchMenuForm(e: any) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = {
      description: fd.get("description"),
      price: fd.get("price"),
      price2: fd.get("price2"),
    };
    await axios({
      method: "patch",
      url: CSSCONST.BACK_URL + "menu" + "/" + fd.get("id"),
      data: body,
    }).then(
      (res) => {
        console.log(res);
        this.props.getMenus();
      },
      (error) => console.log(error)
    );
  }

  render() {
    const { ele, BtnShow, selectID, key, changeDelBtn } = this.props;
    return (	<LiLine key={ele.description}>

   <Form
        style={{
          display: BtnShow === 2 && selectID === ele.id ? "flex" : "none",
        }}
        onSubmit={(e: any) => {
          this.patchMenuForm(e);
        }}
      >
        <Textarea
          name="description"
          id="description"
          defaultValue={ele.description}
        ></Textarea>
        <Label
          htmlFor="price2"
          style={{
            display:
              key === "Sparkling & Rose Wine" ||
              key === "White Wine" ||
              key === "Red Wine"
                ? ""
                : "none",
          }}
        >
          price2:
        </Label>
        <Input
          type="text"
          name="price2"
          id="price2"
          defaultValue={ele.price2}
          style={{
            display:
              key === "Sparkling & Rose Wine" ||
              key === "White Wine" ||
              key === "Red Wine"
                ? ""
                : "none",
          }}
        ></Input>
        <Label htmlFor="price">price:</Label>
        <Input
          type="text"
          name="price"
          id="price"
          defaultValue={ele.price}
        ></Input>
        <input
          type="text"
          name="id"
          id="id"
          style={{ display: "none" }}
          defaultValue={ele.id}
        ></input>
        <InputBtn
          type="submit"
          onClick={() => changeDelBtn()}
          value="SUBMIT"
        ></InputBtn>
        <BackBtn
          style={{
            display:
              (BtnShow === 3 || BtnShow === 2) && selectID === ele.id
                ? "flex"
                : "none",
          }}
          onClick={() => changeDelBtn()}
        >
          CANCEL
        </BackBtn>
      </Form>

    </LiLine>
      
    );
  }
}
export default UpdateForm;
