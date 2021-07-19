import React, { Component } from "react";
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
interface Props {
	getMenus: () => void;
	changeDelBtn: () => void;
	setCategory: () => void;
	successNotion: (flag: boolean) => void;
	keyy: string;
	value: string;
	setSuccessNote: () => void;
    menus:Array<any>;
}

class AddForm extends Component<Props> {
	constructor(props: Props) {
		super(props);
		this.submitNewMenuForm = this.submitNewMenuForm.bind(this);
        console.log("test Key:"+this.props.keyy);
	}

	async submitNewMenuForm(e: any) {
		e.preventDefault();
		const fd = new FormData(e.target);
		const body = {
			description: fd.get("description"),
			price: fd.get("price"),
			price2: fd.get("price2"),
			category: fd.get("category"),
            index: this.props.menus.length,
		};

		await axios({
			method: "post",
			url: CSSCONST.BACK_URL + "menu",
			data: body,
		}).then(
			(res) => {
				console.log(res);
				this.props.getMenus();
				this.props.changeDelBtn();
				this.props.setCategory();
				this.props.successNotion(true);
			},
			(error) => console.log(error)
		);
	}

	render() {
		const { setCategory, successNotion, setSuccessNote, keyy, value } =
			this.props;
            {console.log("Addform Key:"+keyy)};
            {console.log("value : "+ value)};
		return (
			<Form onSubmit={(e: any) => this.submitNewMenuForm(e)}>
				<Label htmlFor="description">description:</Label>
				<Textarea name="description" id="des1" required></Textarea>
				<Label htmlFor="price">price:</Label>
				<Input className="price" required name="price" id="price1"></Input>
				<Label
					htmlFor="price2"
					style={{
						display:
							keyy === "Sparkling & Rose Wine" ||
							keyy === "White Wine" ||
							keyy === "Red Wine"
								? ""
								: "none",
					}}
				>
					price2/one glass:
				</Label>
				<Input
					className="price"
					name="price2"
					id="price21"
					style={{
						display:
							keyy === "Sparkling & Rose Wine" ||
							keyy === "White Wine" ||
							keyy === "Red Wine"
								? ""
								: "none",
					}}
				></Input>
				<input
					type="text"
					name="category"
					id="category"
					style={{ display: "none" }}
					defaultValue={value}
				></input>
				<InputBtn
					type="submit"
					value="ADD"
					onClick={() => setSuccessNote()}
				></InputBtn>
				<BackBtn
					onClick={(e) => {
						e.preventDefault();
						setCategory();
					}}
				>
					BACK
				</BackBtn>
			</Form>
		);
	}
}

export default AddForm;
