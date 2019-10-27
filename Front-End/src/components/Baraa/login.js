import React, { Component } from 'react';
import {Link,Route,BrowserRouter,Redirect} from 'react-router-dom'; 
import axios from 'axios';
// import AddCopm from '../Raghad/dashBoardCompany';

export default class login extends Component {
state={
  email:"",
  password:"",
  massage:''
}

    change = event => {
        console.log("event.target.value :", event.target.value);
        this.setState({[event.target.name]: event.target.value});
      };

      renderRedirect = () => {
        console.log('Raghad')
        if (this.state.redirect===true) {
            console.log('nOoo11111oooor')
          return <Redirect to='/dashboard' />
        }
      }

      check = async(e) => {
        e.preventDefault();
       await axios.post('http://localhost:9000/login',{ email: this.state.email,password:this.state.password})
        .then(({data})=>{
          if(data.length>0)
          {
            this.setState({ massage : ""})
            // console.log('object data -------------:', data[0]);
            // this.setState({compData:data[0]});
            this.props.loginCompany(data[0])
            this.setState({redirect: true})
            //here you should make route to the next page
            // console.log(this.state.compData);
            // const {compData}=this.state;
            // this.props.handle.bind(this,compData)
          }else
          {

          this.setState({ massage : "wrong E-mail or password"
           })
           }
        })

      };

    render() {
        if (this.props.company.email) {
            console.log('nOoooooor')
          return <Redirect to='/dashboard' />
        }else{
            console.log('props said' ,this.props.company)

        return(

          <BrowserRouter>
    <div >
      <input type="email" onChange={this.change} value={this.state.email} name="email" placeholder="login"/>
      <input type="password" onChange={this.change}  value={this.state.password} name="password" placeholder="password"/>
      {/* <Link  to="/student"  className="btn btn-outline-success">Submit</Link> */}
      <button onClick={this.check}  className="btn btn-outline-success" >Submit</button>
      {/* <Link to= "/student"  className="btn btn-outline-success" >Submit</Link> */}

      
      
    </div>
          {this.state.massage}

           </BrowserRouter>
         
        )
    }
    }
  }
