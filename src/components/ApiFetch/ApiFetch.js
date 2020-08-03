import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleFactory from '../../ApiFactory/SimpleFactory/SimpleFactory';
import optionA from '../../responseType/optionA';

class ApiFetch extends Component {

    componentDidMount() {
        console.log('option A', optionA);
    }

    render() {
        
        return (
            <div>
                <p>This is api fetch sample</p>
            </div>
        );
    }
}

ApiFetch.propTypes = {

};

export default ApiFetch;