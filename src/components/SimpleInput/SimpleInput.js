import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './SimpleInput.scss';

const SimpleInput = ({placeholderValue}) => {
    return <Input placeholder={placeholderValue} className="simpleInput" />;
}

SimpleInput.propTypes = {
    placeholderValue: PropTypes.string
};

export default SimpleInput;