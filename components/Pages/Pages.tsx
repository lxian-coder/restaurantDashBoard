import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';

import Menu from './components/Menu/Menu';
import EVENTS from './components/Events/Events';
import { Switch, Route, } from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';


const PageWarper = styled.div`
     display: flex;
     justify-content: center;
     z-index: 0;
     margin-top: 15.625rem;
       width:100%;
       overflow-x: hidden;
     @media only screen and (max-width:700px){
       margin-top:12rem;
     }
     `;

const Pages =(props:{changePage:(pageName:string)=>void,changeMeal:(meal:string)=>void,currentMeal:string})=>{
     
   return (
            <ScrollToTop >
            <Switch>
            <PageWarper>
              <Route path="/" exact component={Menu}></Route> 
              <Route path="/MENUS" ><Menu currentMeal={props.currentMeal} changeMeal={props.changeMeal} onclick={()=>{
                   props.changePage("CONTACT");
              }} /></Route>
               <Route path="/UPCOMING EVENTS"  component={EVENTS}></Route>  
        </PageWarper>
            </Switch>
            </ScrollToTop>
   );

}
export default Pages;
