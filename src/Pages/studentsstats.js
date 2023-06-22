import React from 'react';
import PropTypes from 'prop-types';

class studentsstats extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            students:[],
            totalstudentcount:0
        }
    }

   componentDidMount() {
    const url="https://localhost:44374/api/student/getStudentCount";
    fetch(url, {
       method:"GET", 
    }). then ((s)=>s.json())
    .then ((stud)=>{
        this.setState({totalstudentcount:stud})
    })
   } 

    render() {
        return (
            <div>
               <p>Students</p>
 Total Number of students: {this.state.totalstudentcount.totalNumberofStudents}<br></br>
 Total Number of Female :  {this.state.totalstudentcount.totalNumberofFemale}<br></br>
 Total Number of Male :  {this.state.totalstudentcount.totalNumberofMale}
 
            </div>
        );
    }
}

studentsstats.propTypes = {};

export default studentsstats;