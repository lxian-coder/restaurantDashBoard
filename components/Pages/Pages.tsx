import React from 'react';
import styled,{css} from 'styled-components';
import CSSCONST from '../../cssConst';
import Menu from './components/Menu/Menu';
import EVENTS from './components/Events/Events';
import Staff from './components/Staff/Staff';
import { Switch, Route, withRouter, RouteComponentProps} from 'react-router-dom';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';
import { PAGE } from '../../PAGE';


const PageWarper = styled.div`
     display: flex;
     justify-content: center;
     z-index: 0;
     margin-top: 15.625rem;
       width:100%;
       overflow-x: hidden;
     @media only screen and (max-width:700px){
       margin-top:10rem;
}
     `;

interface Props extends RouteComponentProps{
   changePage:(s:string)=>void;
};
interface State {
  name:string;
}

let UNLISTEN : any;

const map = new Map();

map.set('/MENUS',PAGE.MENUS);
map.set('/UPCOMING EVENTS',PAGE.UPCOMMING);
map.set('/',PAGE.MENUS);


class Pages extends React.Component<Props,State>{

   constructor(props:any){
     super(props);
     this.changePageWithURL = this.changePageWithURL.bind(this);
   }
   // 让page change with URL
  changePageWithURL(){
    let URL = this.props.history.location.pathname;
    this.props.changePage(map.get(URL));
 
  }
  componentDidMount(){
    // fix the route problem
     this.changePageWithURL();
    UNLISTEN = this.props.history.listen(route =>{
      this.changePageWithURL();
    })
  }
  componentWillUnmount(){
    UNLISTEN && UNLISTEN();
  }
  

  render(){
    return (
      <ScrollToTop >
      <Switch>
      <PageWarper>
         <Route path="/" exact component={Menu}></Route> 
         <Route path="/MENUS" component={Menu} ></Route>
         <Route path="/UPCOMING EVENTS"  component={EVENTS}></Route> 
         <Route path="/STAFF" component={Staff} ></Route> 
      </PageWarper>
      </Switch>
      </ScrollToTop>
);

}
}
export default withRouter(Pages);