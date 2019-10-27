import React, { Component } from 'react';
import RegisterCompany from './RegistrationCompany';
import RegisterTrainee from './RegistrationTrainee';
import axios from 'axios'


export default class Regist extends Component {
    state={
        comp: {},
        trainee: {}
    }

    addCompany = it => {
        axios.post('http://localhost:9000/addComp', { it }).then(array => {
          this.setState({ comp: array.data });
    
        });
      };


      addT = i => {
        axios.post('http://localhost:9000/addT', { i }).then(arr => {
          this.setState({ trainee: arr.data });
        });
      };

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col">
              <RegisterCompany addCompany={this.addCompany} />
            </div>
  
            <div className="col">
              <RegisterTrainee addT={this.addT} />
            </div>
          </div>
        </div>
      );
    }
}

