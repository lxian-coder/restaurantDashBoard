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
   currentPage:String,
   showLoginOrNot:(flag:boolean)=>void,
   username:string,
   changeUserName:(s:string)=>void,
}
class Header extends React.Component<Props>{
   constructor(props:Props){
      super(props);
   }

   render(){
      return <HeaderWarper>
      <Banner username={this.props.username}
      showLoginOrNot={()=>this.props.showLoginOrNot(true)} 
      changeUserName={(s)=>this.props.changeUserName(s)}
      />
      <NavBar currentPage={this.props.currentPage} dropMenu={this.props.dropMenu} toggleDropMenu={this.props.toggleDropMenu}/>
    </HeaderWarper> ;
 }
}
 

export default Header;