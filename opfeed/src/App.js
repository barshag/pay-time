import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Button from '@material-ui/core/Button';
import {Button,Card} from '@material-ui/core/';
import {PullToRefresh, PullDownContent, ReleaseContent, RefreshContent} from "react-pull-to-refresh";



class App extends Component {

    constructor(props){
      super(props)
      this.state={
          users:
          [
          ]
      }

    }


//Get data!!

getUser(){
  fetch('https://randomuser.me/api/').then(response=>{
    if(response.ok) return response.json();
    throw new Error('Request failed');
  
  })
  .then(data=>{
    this.setState({

      users:[
          {
            name: data.results[0].name,
            image: data.results[0].picture.medium,
            tweet: data.results[0].email,

          },
          ...this.state.users,

      ]


    });

    //console.log()
  
  
  })
  .catch(error=>{
    console.log(error);
  });
  
  
  }
  



    componentWillMount(){
      console.log("mounted!");
      this.getUser();
    }

  


  
  render() {

    const name = this.state.users[0].name;
    return(

    <Card>
    <Button variant="contained" color="primary" >
      Hello World 
      <h1>{name}</h1>
     

    </Button>
    </Card>


  
    );
  }
}
export default App;
// {this.state.users.map(user=>user.name )}
// <h1>{this.state.users[0].name}</h1>
     