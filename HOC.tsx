import React from 'react';
import styled,{css, ThemeConsumer} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import AlertForm from './AlertFormGlobal';

type Props={};
type State={
  error:boolean,
  errorMsg:string,
};
export default (WrappedComponent: any) => {
    return class extends React.Component<Props,State> {
      constructor(props:any) {
        super(props)
        this.state = {
          error: false,
          errorMsg:null,
        }
        this.hideAlert = this.hideAlert.bind(this);
      }
      hideAlert(){
          this.setState({
              error:false,
          })
      }
      componentWillMount() {
        axios.interceptors.response.use((response) => {
            console.log("_________________________");
            this.setState({
                error: false
              })
          return response;
        },  (error) => {
            console.log("!!!!!!!!!!!!!!!!!!!!");
            console.log(error);
            console.log(error.response.status);

          this.setState({
            error: true,
          })
          if(error.response.status === 401){
            this.setState({
                errorMsg: "Sorry, You are not authorised to use this page!",
              })
          }else if(error.response.status === 403){
              this.setState({
                  errorMsg:"Sorry, You are not authorised to do anything here!",
              })
          }
          return Promise.reject(error);
        });


      }
      render() {
        const errorElem = this.state.error ? <AlertForm hideAlert={()=>this.hideAlert()}>{this.state.errorMsg}</AlertForm> : null
        return (
          <div >
            { errorElem }
            <WrappedComponent {...this.props}/>
          </div>
        )
      }
    }
  }