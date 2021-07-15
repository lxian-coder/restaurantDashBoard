import React,{useState,useEffect, Component, PropsWithChildren} from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../cssConst';
import {Side1Warper} from '../Side1/Side1';
import {Side2Warper} from '../SIde2/Side2';

import {Line,ImgContainer,PageContainer,Iframe} from '../utils/Tools';
import {Link} from 'react-router-dom';
import axios from 'axios';


import bottle from '../../../../assets/bottle.jpg';
import glass from '../../../../assets/glass.jpg';
import {CATEGORY} from '../../../../Category';
import MenuBar from './components/MenuBar';
import { findDOMNode, render } from 'react-dom';
import { electron } from 'webpack';
import Button from '../../../Header/components/NavBar/components/Button/Button';
const URL ='https://test.sealiferestaurantbicheno.com/';
//const GREEN =" #c7edcc";
const GREEN =" rgb(4, 170, 109)";
interface Props2{
  showOrNot:string;
}
interface Props3 {
  show:string;
}
interface PropsDelBtn {
  show:string;
}
const MenuContainer = styled.div`
 display: flex;
 justify-content: space-between;
 padding-bottom: 2.8rem;
`;

const Category = styled.div`
    font-size:24px;
    font-family:${CSSCONST.FONT_ASAR};
    padding-bottom: 10px;
`;
const UL = styled.ul`
    padding-bottom:35px;
    font-family:${CSSCONST.FONT_ASAR};
    z-index: 1;
    position: relative;
`;
const LiLine =styled.li`
     display: flex;
     justify-content: space-between;
     font-size: 18px;
     padding-bottom: 9px;
`;
const PriceWarper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 10%;
    min-width: 5.125rem;
    margin-left: 13%;

`;
const Price1Warper = styled.div`
`;

const Price2Warper = styled.div`

`;
const MenuSide2Warper =styled.div`
  position: relative;
`;

const Img1Wraper = styled.img`
width: 50%;
position: absolute;
top: 13.5%;
left: 40%;
z-index: 0;

`;

const Img2Wraper = styled.img`
width: 40%;
position: absolute;
top: 51%;
left: 48%;
z-index: 0;
`;
const Img3Wraper = styled.img`
width: 37%;
position: absolute;
top: 91%;
left: 53%;
z-index: 0;
`;
const CategoryBottleWarper = styled.div`
display:flex ;
justify-content: space-between;
`;

const BottleGlassWarper = styled.div<Props2>`
display: ${p=>p.showOrNot};
justify-content: space-between;
width: 12%;
min-width: 5.125rem;;
`;
const BottleWarper = styled.img`
  max-height: 35px;
  margin-left: 1.0625rem;
`;
const SpaceAdd = styled.div<Props3>`
 display: ${p=>p.show};
 width: 100%;
 height: 4.375rem;
`;

const SuccessNote = styled.div`
  color:${GREEN};
`;
interface propsBtn{
  add:any
}
const DeleBtn = styled.button`
width: 80px;
font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
margin-left:5px;
font-weight: 600;
color: white;
background-color: ${GREEN};
&.add {
  height: 45px;
  }
&.con{
  background-color:orangered;
}
`;
const BtnArea = styled.div`
  display: flex;

`;
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
const Input = styled.input`
       width: 50px;
`;
const Textarea = styled.textarea`
        width:450px;
        font-size: 16px;
`;
const Label = styled.label`
   color:${GREEN};
`;
const Form = styled.form`
   display: flex;
   flex-direction: column;
`;
const InputBtn = styled.input`
 height:35px;
 margin-top:5px;
 font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
color: white;
background-color: ${GREEN};
 
`;
const BackBtn  = styled.button`
 height:35px;
 margin-top:5px;
 font-size:12px;
display:flex;
justify-content: center;
align-items: center;
border-radius: 8px;
font-weight: 600;
color: white;
background-color: ${GREEN};
`;
interface menuData{
  id:number,
  category:string,
  description:string,
  price:string,
  price2:string,
}

interface State{
  menus:menuData[],
  BtnShow:number,
  selectID:number,
  category:string,
  success:boolean,
}
let a = new FormData();
 class Menu extends React.Component<any,State>{
    state:Readonly<State>={
      menus:[],
      BtnShow:1,
      selectID:null,
      category:'',
      success:false,
    }

   constructor(props:any){
     super(props);
    this.getMenus = this.getMenus.bind(this);
     this.submitNewMenuForm= this.submitNewMenuForm.bind(this);
     this.patchMenuForm = this.patchMenuForm.bind(this);
     this.changeDelBtn = this.changeDelBtn.bind(this);
     this.changeSelectID = this.changeSelectID.bind(this);
 
   }
  changeDelBtn(num:number){
    this.setState({
      BtnShow:num,
    })
  }
  changeSelectID(num:number){
    this.setState({
      selectID:num,
    })
  }
  
  async getMenus(){
        const data = await axios.get(URL +'menu').then(res=>{
          res.data.sort(sortID)
          this.setState({menus:res.data})
          console.log(res);
        });

       // 排序
        function sortID(a:menuData,b:menuData) {
          return a.id - b.id;
        }
        console.log(this.state.menus);
    }

    
 async submitNewMenuForm(e:any){
   e.preventDefault();
   const fd = new FormData(e.target);
   const body = {
     description:fd.get("description"),
     price:fd.get("price"),
     price2:fd.get("price2"),
     category:fd.get("category")
   };
   
  await axios({
     method:'post',
     url:URL+'menu',
     data:body,
   })
   .then((res)=>{
     console.log(res);
     this.getMenus();
     this.changeDelBtn(1);
    // this.setState({category:''})
     this.successNotion(true);

   },(error)=>
     console.log(error));
 }

 async patchMenuForm(e:any){
  e.preventDefault()
   const fd = new FormData(e.target);
   const body = {
     description:fd.get("description"),
     price:fd.get("price"),
     price2:fd.get("price2"),
   };
  await axios({
     method:'patch',
     url:URL+'menu' + '/' + fd.get("id"),
     data:body,
   })
   .then((res)=>{
     console.log(res);
     this.getMenus();
   },(error)=>
     console.log(error));
 }


 async deleteMenu(id:number){
  const newMenu = await axios({
    method:'delete',
    url:URL+'menu' + "/"+ id,
  })
  .then((res)=>{
    console.log(res);
    this.getMenus();
    
    this.changeDelBtn(1);
   
  },(error)=>
    console.log(error));
}
successNotion(flag:boolean){
  this.setState({
    success:flag
  })
}

componentDidMount(){
 this.getMenus();
 
  
}
   render(){
    return <PageContainer>
    <MenuContainer>
       <MenuBar ></MenuBar>
      <Side2Warper >
        <MenuSide2Warper>
     

        {CATEGORY.map(({key,value})=>{
         return  <UL>
                  <SpaceAdd show={ key === "Lunch" || key ==="Entrée" || key === "Children" || key === "Sparkling & Rose Wine" || key === "Daily Desserts" ? "" : "none" }></SpaceAdd>
                 <CategoryBottleWarper >
                 <Category id={key} >{key}</Category>
                 <BottleGlassWarper showOrNot={key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}>
                     <BottleWarper src={glass}></BottleWarper>
                     <BottleWarper src={bottle}></BottleWarper>
                   </BottleGlassWarper>
                   </CategoryBottleWarper>
                   <LiLine>
                      <DeleBtn className="add" style={{display:this.state.category === key ? "none":'' }} onClick={()=>this.setState({category:key})}>ADD NEW</DeleBtn>
                      <SuccessNote style={{display:this.state.success ? "":'none' }}>Successfully Added!</SuccessNote>
                   </LiLine>
                   <LiLine style={{display:this.state.category === key ? "":'none'}}>
                         <Form  onSubmit={(e:any)=>this.submitNewMenuForm(e)} >
                          <Label htmlFor="description">description:</Label>
                            <Textarea   name='description' id='des1' required onClick={()=>this.successNotion(false)}></Textarea>
                           <Label  htmlFor="price">price:</Label> 
                            <Input className="price" required onClick={()=>this.successNotion(false)}  name='price' id='price1'></Input>
                            <Label htmlFor='price2' style={{display:key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}}>price2/one glass:</Label>
                            <Input className="price" onClick={()=>this.successNotion(false)}  name="price2" id='price21' style={{display:key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}}></Input>
                            <input type='text' name="category" id='category' style={{display:'none'}} defaultValue={value}></input>
                             <InputBtn type='submit' value='ADD'  ></InputBtn>
                             <BackBtn  onClick={(e)=>{
                                e.preventDefault();
                               this.successNotion(false);
                               this.setState({category:''});}}>BACK</BackBtn>
                        </Form>
                        
                   </LiLine>
                   {this.state.menus.map((ele)=>{
                   if(ele.category === value){
                     return <div key={ele.id}>
                   <LiLine  key={ele.id}>
                     <DataBtnWarper>
                     <DataArea>
                     <div>{ele.description}</div>
                    
                    <PriceWarper>
                     <Price2Warper>{ele.price2==='' ? '':'$'}{ele.price2}</Price2Warper>
                     <Price1Warper style={isNaN(Number(ele.price)) ? {width:"10.625",justifyContent:"flex-end",whiteSpace:"nowrap"}:{}}>{ele.price === "Price Upon Request" || ele.price ==="" ? "":"$"}{ele.price}</Price1Warper> 
                    </PriceWarper>
                     </DataArea>
                    <BtnArea>
                    <DeleBtn  style={{display:this.state.BtnShow === 1 || this.state.selectID !== ele.id ? "flex":"none" }} onClick={()=>{
                       this.changeDelBtn(2);this.changeSelectID(ele.id);}}>UPDATE</DeleBtn>
          
                     <DeleBtn  style={{display:this.state.BtnShow === 1 || this.state.selectID !== ele.id ? "flex":"none" }}
                            onClick={()=>{this.changeDelBtn(3); this.changeSelectID(ele.id);}}>DELETE</DeleBtn>
                     <DeleBtn className="con" style={{display:this.state.BtnShow === 3 && this.state.selectID === ele.id  ? "flex":"none" }} onClick={()=>{this.deleteMenu(ele.id)}} 
                                >CONFIRM</DeleBtn>
                     <DeleBtn   style={{display:(this.state.BtnShow === 3 ) && this.state.selectID === ele.id ? "flex":"none" }}onClick={()=>this.changeDelBtn(1)}>CANCEL</DeleBtn>
                 
                    </BtnArea>
                     </DataBtnWarper>
                    </LiLine>
                 <LiLine key={ele.description}>
                 <Form  style={{display:this.state.BtnShow === 2 && this.state.selectID === ele.id ? "flex":"none" }} onSubmit={(e:any)=>{ this.patchMenuForm(e);}} >
              <Textarea name='description' id='description'  defaultValue={ele.description}></Textarea>
              <Label htmlFor='price2' style={{display: key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}} >price2:</Label>
              <Input  type='text' name="price2" id='price2'  defaultValue={ele.price2}
               style={{display: key==="Sparkling & Rose Wine" || key === "White Wine" || key === "Red Wine" ? "":"none"}}></Input>
             <Label htmlFor="price">price:</Label> 
              <Input  type='text' name='price' id='price' defaultValue={ele.price}></Input>
              <input type='text' name="id" id='id' style={{display:'none'}} defaultValue={ele.id}></input>
               <InputBtn type='submit' onClick={()=>this.changeDelBtn(1)} value='SUBMIT'></InputBtn>
               <BackBtn  style={{display:(this.state.BtnShow === 3 || this.state.BtnShow === 2) && this.state.selectID === ele.id ? "flex":"none" }}onClick={()=>this.changeDelBtn(1)}>
                        CANCEL</BackBtn>
             </Form> 
                 </LiLine>
                     </div> 
             }})} 
         </UL>
        })}
        <div style={{fontSize:"24px",fontFamily:CSSCONST.FONT_ASAR}}>Non Alcoholic Drink Available<br/>Menu Indicative Only - Meals and Prices Subject to Change</div>
          </MenuSide2Warper>
      </Side2Warper>
</MenuContainer>
</PageContainer>;
}

}

export default Menu;

