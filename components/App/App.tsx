import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pages from '../Pages/Pages';
import styled,{css} from 'styled-components';
import {HashRouter,withRouter,RouteComponentProps} from 'react-router-dom';
import {PAGE} from '../../PAGE';
import {MEAL} from '../../MEAL';
interface Props{

};

type State={
   dropMenu:boolean;
   currentPage:string;
}


class App extends React.Component<Props,State> {

   constructor(props:Props){
       super(props);
       this.state = {
          dropMenu:false,
          currentPage:PAGE.HOME,
         
       };

       this.toggleDropMenu = this.toggleDropMenu.bind(this);
       this.changePage = this.changePage.bind(this);
       this.checkURL = this.checkURL.bind(this);
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
      console.log(" I have actived!!!")
    }
  
    checkURL(){
      const url = window.location.href;
      console.log("haha："+url);
      return url;
   }


 render(){
   const { dropMenu, currentPage } = this.state;

    return  <div>
          <HashRouter >
          <Header dropMenu={dropMenu} toggleDropMenu={this.toggleDropMenu} changePage={this.changePage}  currentPage={currentPage}></Header>
               <Pages changePage={this.changePage} ></Pages>
              <Footer />
          </HashRouter>
       </div>
 }
}
export default App;

