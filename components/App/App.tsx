import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Pages from '../Pages/Pages';
import styled,{css, ThemeConsumer} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import {PAGE} from '../../PAGE';
import {MEAL} from '../../MEAL';
import Login from '../Login/Login';

const LoginContainer  = styled.div`
 position: absolute;
`;
type Props={};
type State={
   dropMenu:boolean;
   currentPage:string;
   loginShowOrNot:boolean;
   loginInfo:string;
   username:string
};

class App extends React.Component<Props,State> {
    constructor(props:any){
       super(props);
       this.state = {
          dropMenu:false,
          currentPage:PAGE.MENUS,
          loginShowOrNot:false,
          loginInfo:null,
          username:null,
       };

       this.toggleDropMenu = this.toggleDropMenu.bind(this);
       this.changePage = this.changePage.bind(this);
       this.changeLoginMessage = this.changeLoginMessage.bind(this);
       this.showLoginOrNot = this.showLoginOrNot.bind(this);
       this.changeUserName = this.changeUserName.bind(this);
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
    showLoginOrNot(showOrNot:boolean){
       this.setState({
          loginShowOrNot:showOrNot,
       })
       console.log(this.state.loginShowOrNot);
    }
    changeLoginMessage(message:string){
       this.setState({
          loginInfo:message
       })
    }
    changeUserName(name:string){
       this.setState({
          username:name,
       })
    }
    checkLoinStatue(){
       if(localStorage.getItem("jwt") !== null){
          let token = localStorage.getItem("jwt");
         let strings = token.split("."); //截取token，获取载体
         let userinfo = JSON.parse(decodeURIComponent(escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))));
         this.changeUserName(userinfo.sub);
       }

    }
    componentDidMount(){
       this.checkLoinStatue();
    }

 render(){
   const { dropMenu, currentPage,loginShowOrNot,username} = this.state;

    return  <div>
          <Router >
          <Header dropMenu={dropMenu} toggleDropMenu={this.toggleDropMenu} showLoginOrNot={this.showLoginOrNot}  currentPage={currentPage}
           username={username}
           changeUserName={this.changeUserName}
           ></Header>
               <LoginContainer>
                  <Login showLoginOrNot={this.showLoginOrNot} 
                     changeLoginInfo={this.changeLoginMessage} loginShowOrNot={loginShowOrNot}
                     changeUserName={this.changeUserName}
                     />
               </LoginContainer>
               <Pages changePage={this.changePage}></Pages>
              <Footer />
          </Router>
       </div>
 }
}
export default App;

