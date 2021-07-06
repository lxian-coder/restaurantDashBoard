import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

const HeaderWarper = styled.header`
   display: flex;
   flex-direction: column;
   position: fixed;
   z-index: 10;
   top: 0%;
   width: 100%;
`;

const Header=(props:{dropMenu:boolean, toggleDropMenu:(dropMenu:boolean)=>void,changePage:(pageName:String)=>void,currentPage:String })=>{

   return <HeaderWarper>
     <Banner   onclick={()=>{ props.changePage("CONTACT")}} />
     <NavBar currentPage={props.currentPage} dropMenu={props.dropMenu} toggleDropMenu={props.toggleDropMenu} changePage={props.changePage}/>
   </HeaderWarper> ;
}

export default Header;