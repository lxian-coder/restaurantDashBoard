import React from 'react';
import styled from 'styled-components';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';

const HeaderWarper = styled.header`
   display: flex;
   flex-direction: column;
   position: fixed;
   z-index: 10;
   top: 0%;
   width: 100%;
`;
interface Props  {
   dropMenu:boolean,
   toggleDropMenu:(dropMenu:boolean) => void,
   changePage:(pageName:String)=>void,
   currentPage:String 
}
class Header extends React.Component<Props>{
   constructor(props:Props){
      super(props);
   }

   render(){
      return <HeaderWarper>
      <Banner   onclick={()=>{ this.props.changePage("CONTACT")}} />
      <NavBar currentPage={this.props.currentPage} dropMenu={this.props.dropMenu} toggleDropMenu={this.props.toggleDropMenu}/>
    </HeaderWarper> ;
 }
}
 

export default Header;