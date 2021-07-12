import React, {Component} from "react";
import { Route, withRouter } from "react-router-dom";
import{RouteComponentProps} from "react-router";

type passin ={location:any};
type PropsType = RouteComponentProps<passin>
class ScrollToTop extends Component<PropsType>{
   
     componentDidUpdate (prevProps:any){
         if(this.props.location !== prevProps.location){
             window.scrollTo(0,0);
         }
     }

    render(){
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);