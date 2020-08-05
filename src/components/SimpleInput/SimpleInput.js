import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './SimpleInput.scss';
import JobManagementContext from '../../contexts/JobManagementContext';

const SimpleInput = ({placeholderValue}) => {
    const jobManagementContext = useContext(JobManagementContext);
    const [userInput, setUserInput] = useState('');
    const handleInputPressEnter = (e) => {
        console.log('when input press enter with value', userInput, 'general state', jobManagementContext);
    }
    const handleInputOnChange = (e) => {
        setUserInput(e.target.value);
    }
    return <Input placeholder={placeholderValue} onPressEnter={handleInputPressEnter} onChange={handleInputOnChange} className="simpleInput" />;
}

SimpleInput.propTypes = {
    placeholderValue: PropTypes.string
};

export default SimpleInput;