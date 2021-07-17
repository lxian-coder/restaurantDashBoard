import React from "react";
import styled, { css } from "styled-components";
import CSSCONST from "../../../../cssConst";
import { Side2Warper } from "../SIde2/Side2";

import { Line, ImgContainer, PageContainer, Iframe } from "../utils/Tools";
import axios from "axios";
import bottle from "../../../../assets/bottle.jpg";
import glass from "../../../../assets/glass.jpg";
import { CATEGORY } from "../../../../Category";
import MenuBar from "./components/MenuBar/MenuBar";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import AddForm from "./components/AddForm/AddForm";
import MenuRow from "./components/MenuRow/MenuRow";

const GREEN = " rgb(4, 170, 109)";
interface Props2 {
	showOrNot: string;
}

const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 2.8rem;
`;

const Category = styled.div`
	font-size: 24px;
	font-family: ${CSSCONST.FONT_ASAR};
	padding-bottom: 10px;
`;
const UL = styled.ul`
	padding-bottom: 35px;
	font-family: ${CSSCONST.FONT_ASAR};
	z-index: 1;
	position: relative;
`;

const LiLine = styled.li`
	display: flex;
	justify-content: space-between;
	font-size: 18px;
	padding-bottom: 9px;
`;
const MenuSide2Warper = styled.div`
	position: relative;
`;

const CategoryBottleWarper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const BottleGlassWarper = styled.div<Props2>`
	display: ${(p) => p.showOrNot};
	justify-content: space-between;
	width: 12%;
	min-width: 5.125rem; ;
`;
const BottleWarper = styled.img`
	max-height: 35px;
	margin-left: 1.0625rem;
`;
const SpaceAdd = styled.div<Props2>`
	display: ${(p) => p.showOrNot};
	width: 100%;
	height: 4.375rem;
`;

const SuccessNote = styled.div`
	color: ${GREEN};
`;

const DeleBtn = styled.button`
	width: 80px;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	margin-left: 5px;
	font-weight: 600;
	color: white;
	background-color: ${GREEN};
	&.add {
		height: 45px;
	}
	&.con {
		background-color: orangered;
	}
`;

interface menuData {
	id: number;
	category: string;
	description: string;
	price: string;
	price2: string;
}

interface State {
	menus: menuData[];
	BtnShow: number;
	selectID: number;
	category: string;
	success: boolean;
	successNote: string;
}
let a = new FormData();
class Menu extends React.Component<any, State> {
	state: Readonly<State> = {
		menus: [],
		BtnShow: 1,
		selectID: null,
		category: "",
		success: false,
		successNote: "",
	};

	constructor(props: any) {
		super(props);
		this.getMenus = this.getMenus.bind(this);
		this.changeDelBtn = this.changeDelBtn.bind(this);
		this.changeSelectID = this.changeSelectID.bind(this);
		this.successNotion = this.successNotion.bind(this);
	}
	changeDelBtn(num: number) {
		this.setState({
			BtnShow: num,
		});
	}
	changeSelectID(num: number) {
		this.setState({
			selectID: num,
		});
	}

	async getMenus() {
		const data = await axios.get(CSSCONST.BACK_URL + "menu").then((res) => {
			res.data.sort(sortID);
			this.setState({ menus: res.data });
			console.log(res);
		});

		// 排序
		function sortID(a: menuData, b: menuData) {
			return a.id - b.id;
		}
		console.log(this.state.menus);
	}

	successNotion(flag: boolean) {
		this.setState({
			success: flag,
		});
	}

	componentDidMount() {
		this.getMenus();
	}
	render() {
		return (
			<PageContainer>
				<MenuContainer>
					<MenuBar></MenuBar>
					<Side2Warper>
						<MenuSide2Warper>
							{CATEGORY.map(({ key, value }) => {
								return (
									<UL>
										<SpaceAdd
											showOrNot={
												key === "Lunch" ||
												key === "Entrée" ||
												key === "Children" ||
												key === "Sparkling & Rose Wine" ||
												key === "Daily Desserts"
													? ""
													: "none"
											}
										></SpaceAdd>
										<CategoryBottleWarper>
											<Category id={key}>{key}</Category>
											<BottleGlassWarper
												showOrNot={
													key === "Sparkling & Rose Wine" ||
													key === "White Wine" ||
													key === "Red Wine"
														? ""
														: "none"
												}
											>
												<BottleWarper src={glass}></BottleWarper>
												<BottleWarper src={bottle}></BottleWarper>
											</BottleGlassWarper>
										</CategoryBottleWarper>
										<LiLine>
											<DeleBtn
												className="add"
												style={{
													display: this.state.category === key ? "none" : "",
												}}
												onClick={() => {
													this.setState({ category: key });
													this.setState({ successNote: "" });
													this.setState({ success: false });
												}}
											>
												ADD NEW
											</DeleBtn>
											<SuccessNote
												style={{
													display:
														this.state.success && this.state.successNote === key
															? ""
															: "none",
												}}
											>
												New Record Successfully Added!
											</SuccessNote>
										</LiLine>
										<LiLine
											style={{
												display: this.state.category === key ? "" : "none",
											}}
										>
											<AddForm
												getMenus={() => this.getMenus()}
												successNotion={() => this.successNotion(false)}
												key={key}
												value={value}
												changeDelBtn={() => this.changeDelBtn(1)}
												setCategory={() => this.setState({ category: "" })}
											></AddForm>
										</LiLine>
										{this.state.menus.map((ele) => {
											if (ele.category === value) {
												return (

													<div key={ele.id}>
														<MenuRow
															selectID={this.state.selectID}
															ele={ele}
															btnShow={this.state.BtnShow}
															changeDelBtn={(num: number) =>
																this.changeDelBtn(num)
															}
															getMenus={this.getMenus}
															changeSelectID={(num: number) =>
																this.changeSelectID(num)
															}
														></MenuRow>

														<UpdateForm
															ele={ele}
															BtnShow={this.state.BtnShow}
															selectID={this.state.selectID}
															key={key}
															changeDelBtn={() => this.changeDelBtn(1)}
															getMenus={this.getMenus}
														></UpdateForm>
													</div>
												);
											}
										})}
									</UL>
								);
							})}
							<div style={{ fontSize: "24px", fontFamily: CSSCONST.FONT_ASAR }}>
								Non Alcoholic Drink Available
								<br />
								Menu Indicative Only - Meals and Prices Subject to Change
							</div>
						</MenuSide2Warper>
					</Side2Warper>
				</MenuContainer>
			</PageContainer>
		);
	}
}

export default Menu;
