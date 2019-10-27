import React from 'react';
import Student from "./components/Noor/Noor";
import 'bootstrap/dist/css/bootstrap.css';
import Regist from './components/Raghad/Regist';
import {BrowserRouter as Router, Route,Link,Redirect} from 'react-router-dom';
import Header from './components/Elias/header';
import Dashboard from './components/Raghad/dashBoard'
import Login from "./components/Baraa/login";
import LoginTrainee from './components/Baraa/loginTrainee';
import axios from 'axios';
import CardDetails from './components/Noor/page/cardDetails'






class App extends React.Component {
  state = {company:{},
  trainee: {},
}

//   componentDidMount(){
//   axios.get('http://localhost:9000/posts')
//   .then(({data})=>{
//     console.log("Data1111:", data)
//     this.setState({
//       company : data
//     })
//   })
// }

deleteItem = _ID => {
  // const axios = require("axios");
  axios.delete(`http://localhost:9000/deletePost/${_ID}`)
  console.log('ID', _ID)
  .then(({data})=>
  {this.setState({
    company : data
  }) ;
  console.log('id' ,_ID);})
  
  .catch(error => {
  // handle error
  console.log(error);
});
};


  loginCompany=async (company)=>{
    console.log('company from app :', company);
    await this.setState({company:company})
    console.log('after setstate', this.state.company)
  }


  loginTrainee = async trainee => {
    console.log("company from app :", trainee);
    await this.setState({ trainee: trainee });
    console.log("after setstate", this.state.company);
  };

  render() {
  
    return (
      <div>
      
      <Router>
      <div className='container'>
        
        <Header/>
        <Route path='/login' component={()=><Login company={this.state.company} loginCompany={this.loginCompany}/>}/>
        <Route
              path="/loginTrainee"
              component={() => (
                <LoginTrainee
                 ChangeLog={this.change}
                  trainee={this.state.trainee}
                  loginTrainee={this.state.loginTrainee}
                />
              )}
              />
        <Route path='/register' component={Regist}/>
        <Route path='/student' component={Student}/>
        {/* <Route path='/List' component={ <List  companies={this.state.companies} details={this.details} />}/> */}
         {/* <Search/> */}
        {/* <Student/> */}
        {/* <Regist/> */}
        <Route  path='/dashboard' component={()=><Dashboard company={this.state.company} deleteItem={this.deleteItem}/>}/>
        <Route path='/cardDetails' component={CardDetails}/>
       
      </div>

      </Router>
      </div>
     
    );
  }
}

export default App;