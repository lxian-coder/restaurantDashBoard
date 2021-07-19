import React from "react";
import styled, { css, ThemeConsumer } from "styled-components";
import CSSCONST from "../../../../cssConst";
import { Side2Warper } from "../SIde2/Side2";
import { Line, ImgContainer, PageContainer, Iframe } from "../utils/Tools";
import axios from "axios";

import { CATEGORY } from "../../../../Category";
import MenuBar from "./components/MenuBar/MenuBar";
import UpdateForm from "./components/UpdateForm/UpdateForm";
import AddForm from "./components/AddForm/AddForm";
import MenuRow from "./components/MenuRow/MenuRow";
import {DragDropContext,Droppable,DropResult,Draggable} from 'react-beautiful-dnd';
import Item from "../../../Header/components/NavBar/components/Item/Item";
import SmallSaveOrder from "./components/SmallSaveOrder/SmallSaveOrder";


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
	padding-bottom: 5px;
  padding-top: 5px;
`;
const MenuSide2Warper = styled.div`
	position: relative;
`;

const CategoryBottleWarper = styled.div`
	display: flex;
	justify-content: space-between;
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
  index:number
}

interface State {
	menus: menuData[];
	BtnShow: number;
	selectID: number;
	category: string;
	success: boolean;
	successNote: string;
	orderChanged:boolean;
	showOrderSuccessNotion:boolean;
}

const getItemStyle = (isDragging:boolean,draggableStyle:any) =>({
  background: isDragging ? "#4a2975" :"white",
  color: isDragging ? 'white' : 'black',
  borderRadius: "5px",
  width:'100%',

  ...draggableStyle
})
class Menu extends React.Component<any, State> {
	state: Readonly<State> = {
		menus: [],
		BtnShow: 1,
		selectID: null,
		category: "",
		success: false,
		successNote: "",
		orderChanged:false,
		showOrderSuccessNotion:false
	};

	constructor(props: any){
		super(props);
		this.getMenus = this.getMenus.bind(this);
		this.changeDelBtn = this.changeDelBtn.bind(this);
		this.changeSelectID = this.changeSelectID.bind(this);
		this.successNotion = this.successNotion.bind(this);
    this.processTheNewOrder = this.processTheNewOrder.bind(this);
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
      const d = res.data;
			res.data.sort(sortIndex);
			this.setState({ menus: res.data });
			console.log(res.data);
		});

		// 排序
		function sortIndex(a: menuData, b: menuData) {
			return a.index - b.index;
		}
		console.log(this.state.menus);
	}

	successNotion(flag: boolean) {
		this.setState({
			success: flag,
		});
	}



  processTheNewOrder(){
    this.state.menus.map((ele,index)=>{

    })
  }

 onDragEnd=(result:DropResult)=>{
    const {source,destination} = result;
    if(!destination) return;

    const items = Array.from(this.state.menus);
    const[newOrder] =  items.splice(source.index,1);
    items.splice(destination.index,0,newOrder);
    if(source.index != destination.index) this.setState({orderChanged:true})
    this.setState({
      menus:items,
    })
 };
	componentDidMount() {
		this.getMenus();

	}
  componentDidUpdate(){
    this.processTheNewOrder();
  }
	render() {
		return (
			<PageContainer>
				<MenuContainer>
				
					<MenuBar 
					menus={this.state.menus} 
					orderChanged={this.state.orderChanged}
					changeMute = {()=>this.setState({orderChanged:false})}
					showOrderSuccessNotion={this.state.showOrderSuccessNotion}
					turnOnOrderNotion = {()=>this.setState({showOrderSuccessNotion:true})}
					></MenuBar>
					<Side2Warper>
						<MenuSide2Warper>
						<SmallSaveOrder
					       menus={this.state.menus} 
					orderChanged={this.state.orderChanged}
					changeMute = {()=>this.setState({orderChanged:false})}
					showOrderSuccessNotion={this.state.showOrderSuccessNotion}
					turnOnOrderNotion = {()=>this.setState({showOrderSuccessNotion:true})}
								
									
					></SmallSaveOrder>
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
												successNotion={(flag) => this.successNotion(flag)}
												keyy = {key}
                        menus ={this.state.menus}
												value={value}
												changeDelBtn={() => this.changeDelBtn(1)}
												setCategory={() => this.setState({ category: "" })}
                        setSuccessNote={()=>this.setState({successNote:key})}
											></AddForm>
										</LiLine>
                    <DragDropContext onDragEnd={this.onDragEnd}>
                     <Droppable droppableId="todo">
                       {(provided)=>(
                           <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
                                {this.state.menus.map((ele,index) => {

											if (ele.category === value) {

												return (
                          <Draggable key={ele.id} draggableId={String(ele.id)} index={index}>
                           {(provided,snapshot) => (

                             <div ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}
                             >
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
															keyy={key}
															changeDelBtn={() => this.changeDelBtn(1)}
															getMenus={this.getMenus}
														></UpdateForm>
													</div>
                             </div>
                           )}
                          </Draggable>
                            );
                            }
                          })}

                           </div>
                       )}
                     </Droppable>
                    </DragDropContext>

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
