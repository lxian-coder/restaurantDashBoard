import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../../../../../cssConst';
import {Side1Warper} from '../../../Side1/Side1';
import {MEAL} from '../../../../../../MEAL';
import {Link} from 'react-router-dom';

export const ID = [{
    key:'Breakfast',
    value:"breakfast",
  },{
     key:'Lunch',
     value:"lunch"
  },{
    key:'Entrée',
    value:'entrée'
  },{
    key:'Children',
    value:'children',
  },{
    key:'Daily Desserts',
    value:'desserts',
  },{
    key:'Sparkling & Rose Wine',
    value:'SparklingWine',
  }
  ];


interface Props2 {
    active:string;
  }
const Title = styled.div`
   padding-bottom: 40px;
   font-size: 48px;
`;
const Ul = styled.ul`
  font-size: 28px;
`;
const Li = styled.li<Props2>`
    color: ${p=>p.active};
    &:hover{
       color:black;
       transition: 0.7s;
    }
    padding-bottom:10px;
`;

const BookTable = styled.div`
   font-size: 28px;
   font-family: ${CSSCONST.FONT_ALATA};
   font-weight: 700;
   padding-top: 25px;
   z-index: 1;
`;

  type Props={
   };
  type State={
      currentMeal:string,
  };

let lunchPosition:number;
let dinnerPosition:number;
let childrenPosition:number;
let dessertPosition:number;
let refreshmentsPosition:number;
function findElementPosition1(anchorName:string){
    if(anchorName){
      let anchorElement = document.getElementById(anchorName);
      console.log(anchorElement);
      if(anchorElement) {
        let anchorPosition = anchorElement.getBoundingClientRect().top + window.pageYOffset;
         let finalPosition = anchorPosition - 260;
        return finalPosition;
      };
    }
  }
  function fillPosition(){
    lunchPosition = findElementPosition1('Lunch') ;
    dinnerPosition = findElementPosition1('Entrée');
    childrenPosition = findElementPosition1('Children') ;
    dessertPosition = findElementPosition1('Daily Desserts') ;
    refreshmentsPosition = findElementPosition1('Sparkling & Rose Wine');
  }

class MenuBar extends React.Component<Props,State>{

    constructor(props:any){
        super(props);
        this.state={
            currentMeal:MEAL.BREAKFAST,
        }
        this.changeMeal = this.changeMeal.bind(this);
        this.getScrollTop = this.getScrollTop.bind(this);
        this.scrollToAnchor = this.scrollToAnchor.bind(this);
    }
   scrollToAnchor(anchorName:string){
    const finalPosition = findElementPosition1(anchorName);
    window.scrollTo({top:finalPosition, behavior:'smooth'});
   }

   changeMeal(meal:string){
            this.setState({
                currentMeal:meal,
            });

    };
    getScrollTop(){
        let top =  window.pageYOffset  ;
        console.log("The top is:"+ top);
        if(top<lunchPosition){
            this.changeMeal(MEAL.BREAKFAST);
        } 
         if(top >= lunchPosition && top < dinnerPosition ){
          this.changeMeal(MEAL.LUNCH);
        } 
        if(top >= dinnerPosition && top < childrenPosition ){
            this.changeMeal(MEAL.DINNER);
          }
        if(top >= childrenPosition && top < dessertPosition ){
            this.changeMeal(MEAL.CHILDREN);
        }
        if(top >= dessertPosition && top < refreshmentsPosition ){
          this.changeMeal(MEAL.DESSERTS);
      }
      if(top >= refreshmentsPosition){
        this.changeMeal(MEAL.REFRESHMENTS);
      }
    }

   componentDidMount(){
        window.addEventListener('scroll',fillPosition);
        window.addEventListener('scroll',this.getScrollTop);
   }
   componentWillUnmount(){
       window.removeEventListener("scroll",this.getScrollTop);
       window.removeEventListener('scroll',fillPosition)
   }

    render(){
          return <Side1Warper>
           <div style={{position:'fixed'}}>
           <Title>Menus.</Title>
           <Ul>
             <Li onClick={(evt)=>{
             this.scrollToAnchor("Breakfast");
               this.changeMeal(MEAL.BREAKFAST);
             }} active={this.state.currentMeal === MEAL.BREAKFAST ? "black" : CSSCONST.GREY }>Breakfast</Li>
             <Li onClick={(evt)=>{
               this.scrollToAnchor("Lunch");
               this.changeMeal(MEAL.LUNCH);
             }} active={this.state.currentMeal === MEAL.LUNCH ? "black" : CSSCONST.GREY }>Lunch</Li>
             <Li onClick={(evt)=>{
               this.scrollToAnchor("Entrée");
               this.changeMeal(MEAL.DINNER);
             }}active={this.state.currentMeal === MEAL.DINNER ? "black" : CSSCONST.GREY }>Dinner</Li>
             <Li onClick={(evt)=>{
               this.scrollToAnchor("Children");
               this.changeMeal(MEAL.CHILDREN);
             }} active={this.state.currentMeal === MEAL.CHILDREN ? "black" : CSSCONST.GREY }>Children</Li>
             <Li onClick={(evt)=>{
               this.changeMeal(MEAL.DESSERTS);
               this.scrollToAnchor("Daily Desserts");
             }} active={this.state.currentMeal === MEAL.DESSERTS ? "black" : CSSCONST.GREY }>Desserts</Li>
            <Li onClick={(evt)=>{
               this.changeMeal(MEAL.REFRESHMENTS);
               this.scrollToAnchor("Sparkling & Rose Wine");
             }}active={this.state.currentMeal === MEAL.REFRESHMENTS ? "black" : CSSCONST.GREY }>Refreshments</Li>
           </Ul>
           </div>
         </Side1Warper>
       
    }
  
}

export default MenuBar;