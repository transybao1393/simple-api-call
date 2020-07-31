import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleFactory from '../../ApiFactory/SimpleFactory/SimpleFactory';

class ApiFetch extends Component {
    render() {
        console.info('simple factory...', new SimpleFactory().getDataFromApi());
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