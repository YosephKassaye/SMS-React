import React from 'react';
import PropTypes from 'prop-types';
import './footer.css';

class footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='divfooter'> 
                <p>Copyright © 2023 All rights Reserved. Created by YaYoBEG</p>
            </div>
        );
    }
}

footer.propTypes = {};

export default footer;