import React from 'react';
import styled,{css} from 'styled-components';
import Item from './components/Item/Item';
import LogoPic from '../../../../assets/logo.jpg';
import CSSCONST from '../../../../cssConst';
import littleLogo1 from '../../../../assets/littleLogo1.png';
import littleLogo2 from '../../../../assets/littleLogo2.png';
import LittleLogo from './components/LittleLogo/LittleLogo';
import Button from './components/Button/Button';
import { PAGE } from '../../../../PAGE';

interface Props {
    show:string;
}
const NavBarCenter = styled.div`
       width: 100%;
       display: flex;
       justify-content: center;
       background-color: white;
       opacity: 0.97;

  `;
const NavBarContainer = styled.div`
      width: min(100%,1100px);

`;
const NavBarContainerSpace = styled.div`
     display: flex;
     justify-content: space-between;
     max-width:100% ;
     @media only screen and (max-width: 660px){
        display: flex;
        flex-direction: column;
        margin-right: 2%;
        margin-left: 2%;
    }

`;
const Logo = styled.img`
   max-width: 182px;
   max-height: 139px;
   @media only screen and (max-width: 660px){
        display: none;
    }
    
`;
const Warper = styled.div`
   display: flex;
   justify-content: center;
   height: 100%;
   margin-left: 0.5rem;

`;

Logo.defaultProps = {
    src:LogoPic,
}

const Navbar = styled.nav<Props>`
        font-family: ${CSSCONST.FONT_ZILLA};
        font-size: 22px;
       	font-weight: 500;
        max-width: 100%;

   @media only screen and  (max-width:660px){
        display: ${p => p.show};
        flex-direction: column;
        height: 300px;;
        width: 100%;
        justify-content: space-around;
        margin-top: 40px;
    }
       @media only screen and (min-width: 661px){
           display: flex;
           max-width: 35%;
           width: 100%;
           justify-content: space-around; 
           position: relative;
       }
`;

const Name = styled.div`
    @media only screen and (max-width:760px){
      display: flex;
      justify-content: center;
      align-items: flex-end;
      font-family: ${CSSCONST.FONT_NORICAN};
      font-size: 28px;
      height: 80px;
    }
    @media only screen and (min-width: 661px){
        display: none;
    }
`;
const SmallScreenWarper =styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 80px;
       @media only screen and (min-width:661px){
           display: none;
       }
`;
const DisappearWhenSmall = styled.div`
  @media only screen and (max-width:660px){
           display: none;
       }
`;

const ITEMS = [{
    key:'menus',
    tabPage:PAGE.MENUS,
},{
    key:'upcomingEvents',
    tabPage:PAGE.UPCOMMING,
},]

const NavBar = (props:{dropMenu:boolean, toggleDropMenu:(dropMenu:boolean)=>void,currentPage:String})=>{
  let showOrNot;
  if(props.dropMenu){
      showOrNot = 'flex';
  }else{
      showOrNot = 'none'
  }
  return <NavBarCenter>
    <NavBarContainer>
              <NavBarContainerSpace>
              <Logo />
              <SmallScreenWarper>
              
               <Name>SeaLife Restaurant</Name>
               <Button dropMenu={props.dropMenu} toggleDropMenu={props.toggleDropMenu}></Button>
              </SmallScreenWarper>

               <Navbar show = {showOrNot}>
               {ITEMS.map((item) => (
                   <Item active={props.currentPage === item.tabPage} key={item.key}  
                   onclick={()=>{
                                 props.toggleDropMenu(false);
                   }}>{item.tabPage}</Item>
               ))}
               </Navbar>

               <DisappearWhenSmall>
               <Warper>
              <a href="https://www.facebook.com/SealifeBicheno"> <LittleLogo src={littleLogo1}></LittleLogo></a>
              <a href="https://www.tripadvisor.com.au/Restaurant_Review-g261650-d728229-Reviews-Sealife_Bicheno-Bicheno_Glamorgan_Spring_Bay_Tasmania.html"> <LittleLogo src={littleLogo2}></LittleLogo></a>
               </Warper>
               </DisappearWhenSmall>

              </NavBarContainerSpace>
    </NavBarContainer>

    </NavBarCenter> 

}

export default NavBar;


