import React from 'react';
import PropTypes from 'prop-types';

class grade extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            gradestat:[]
        }
    }
    componentDidMount() {
        const url="https://localhost:44374/api/student/getGradeStat";
        fetch(url, {
           method:"GET", 
        }). then ((s)=>s.json())
        .then ((stud)=>{
            this.setState({gradestat:stud})
        })
       } 
    
    render() {
        return (
            <div>
                <h2>Grade:</h2>
                <p>With greater than 90: {this.state.gradestat.above90}</p>
                <p>With greater than 80: {this.state.gradestat.above80}</p>
                <p>With less or equalto 80: {this.state.gradestat.below80}</p>
                
            </div>
        );
    }
}

grade.propTypes = {};

export default grade;