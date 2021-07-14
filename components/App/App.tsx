import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pages from '../Pages/Pages';
import styled,{css} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {PAGE} from '../../PAGE';
import {MEAL} from '../../MEAL';


type Props={};
type State={
   dropMenu:boolean;
   currentPage:string;
  
};

class App extends React.Component<Props,State> {
    constructor(props:any){
       super(props);
       this.state = {
          dropMenu:false,
          currentPage:PAGE.MENUS,
       };

       this.toggleDropMenu = this.toggleDropMenu.bind(this);
       this.changePage = this.changePage.bind(this);
    }

    toggleDropMenu(dropMenu:boolean){
       this.setState({
          dropMenu:dropMenu,
       })
    }
    changePage(pageName:string){
      this.setState({
          currentPage: pageName,
      })
    }


 render(){
   const { dropMenu, currentPage } = this.state;

    return  <div>
          <Router >
          <Header dropMenu={dropMenu} toggleDropMenu={this.toggleDropMenu}  currentPage={currentPage}></Header>
               <Pages changePage={this.changePage}></Pages>
              <Footer />
          </Router>
       </div>
 }
}
export default App;

