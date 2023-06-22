import React from 'react';
import PropTypes from 'prop-types';
import Bootm1 from './bottom1';
import Bottom2  from './bottom2';
import Middle from './middle';
import Reading from './reading';
import Studentsstats from './studentsstats';
import Grade from './grade';
import './home.css';
class homepage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='row'>
                <div className='col-4 topdiv'> <Studentsstats></Studentsstats></div>
                    <div className='col-4 topdiv'> <Grade></Grade></div>
                    <div className='col-3 topdiv'>   <Reading></Reading></div>
                    
                </div>
             <div className='divmiddle'>
                <Middle></Middle>
             </div>
                
<div className='row'>
    <div className='col-8 divbottom' ><Bootm1></Bootm1></div>
    <div className='col-3 divbottom'><Bottom2></Bottom2></div>
</div>

                
                
            </div>
        );
    }
}

homepage.propTypes = {};

export default homepage;