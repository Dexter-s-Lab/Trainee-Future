import React, { Component } from 'react';
import Card from './card';
import JobItem from './JobItem'

// export default class List extends Component {
 
    // render() {
        // console.log( 'this.props.company.....', this.props.companies);
        // console.log('this.props.postnnnnn', this.props.noor)
        // const {companies}=this.props;
        // const noor = this.props.noor
        
        


        // if (noor){
        //       return noor.map((one,companies)=>{
        //         return one.map((two,i)=>(
        //           // console.log('two', two)
        //           // return <h1>bbbbbbb</h1>
        //           <Card key={i} post={two}  companies={companies} />
        //         ))
        //       })

        // }else{
          //importanttttttttttttttttttttttttttttttttt

          // return companies.map((companies) => {
          //   return companies.post.map((item,i)=>(
          //     <Card key={i} post={item}  companies={companies} />
          //   ))
          // })

          const List = ({ jobs , handleJobSelect }) => {
            const chosenJobs = jobs.map((job,i)=>{
                return <JobItem key={i} job={job} handleJobSelect={handleJobSelect}/>
                
            });
            return <div >{chosenJobs}</div>
        }
        



          // }
          export default  List