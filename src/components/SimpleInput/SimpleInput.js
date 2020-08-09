import React, {useState, useContext, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Input, Modal, notification } from 'antd';
import './SimpleInput.scss';
import JobManagementContext from '../../contexts/JobManagementContext';
import SimpleFactory from '../../ApiFactory/SimpleFactory/SimpleFactory';
import DataHandler from '../../utils/DataHandlerUtils';
import optionA5 from '../../responseType/optionA-5.json';
import optionA2 from '../../responseType/optionA-2.json';
import optionA3 from '../../responseType/optionA-3.json';
import optionA4 from '../../responseType/optionA-4.json';
import singleResponse from '../../responseType/singleResponse.json';
import singleResponseError from '../../responseType/singleResponse-error.json';
import {isEmpty} from 'lodash';

const SimpleInput = ({placeholderValue}) => {
    const [visible, setVisible] = useState(false);
    const jobManagementContext = useContext(JobManagementContext);
    const [userInput, setUserInput] = useState('');
    const [modalData, setModalData] = useState({});
    const openNotification = async () => {
        const rawResponse = await new SimpleFactory().deleteVAJobs();
        
        if(rawResponse !== undefined) {

            //- multiple response with list
            //- go through middleware function to handle notification whether it is error or success function
            // let handledMultipleResponseData = DataHandler.dataHandleMultipleResponse(optionA4);
            // console.log('handled data', handledMultipleResponseData);
            //- showing notification
            // setVisible(true);
            // setModalData(handledMultipleResponseData.data)


            //- single response VAP base format
            console.log('handled data', singleResponseError);
            if(isEmpty(singleResponseError.data)) {
                //- show error
                notification['error']({
                    message: 'Notification Title',
                    description: singleResponseError.errorMessage
                });
            }
            
        }
    };

    const handleInputPressEnter = (e) => {
        openNotification();        
        console.log('when input press enter with value', userInput, 'general state', jobManagementContext);
    }

    const handleInputOnChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleOk = e => {
        setVisible(false);
    };

    const renderModalWithContent = () => {

        return (
            <Modal
                title="Api response (with list)"
                visible={visible}
                onOk={handleOk}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                {Object.keys(modalData).map(function(key) {                    
                    return (
                        <Fragment>
                            <h3>Status: <em style={{color: (key === 'success') ? 'green' : 'red'}}>{key}</em></h3>
                            {(!isEmpty(modalData[key].errorMessage)) && <p>Reason: {modalData[key].errorMessage}</p>}
                            <ul>
                            {
                                modalData[key]['vaJob'].map((v) => {
                                    return (
                                        <li>
                                            {(!isEmpty(v.errorId)) && <p>Error id: {v.errorId}</p>}
                                            {(!isEmpty(v.errorMessage)) && <p>Erorr message: {v.errorMessage}</p>}
                                            {(!isEmpty(v.jobId)) && <p>Job ID: {v.jobId}</p>}
                                            {(!isEmpty(v.jobName)) && <p>Job Name: {v.jobName}</p>}
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </Fragment>
                    );
                })}
            </Modal>  
        );
    }

    return (
        <Fragment>
            {renderModalWithContent()}
            <Input placeholder={placeholderValue} onPressEnter={handleInputPressEnter} onChange={handleInputOnChange} className="simpleInput" />
        </Fragment>
    );
    
}

SimpleInput.propTypes = {
    placeholderValue: PropTypes.string
};

export default SimpleInput;