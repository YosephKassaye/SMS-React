import React from 'react';
import PropTypes from 'prop-types';

class reading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <p>Reading is easier, too, in the new Reading view. You can collapse parts of the document and focus on the text you want. </p>
            </div>
        );
    }
}

reading.propTypes = {};

export default reading;