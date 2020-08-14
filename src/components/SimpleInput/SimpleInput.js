import React, {useState, useContext, Fragment} from 'react';
import PropTypes from 'prop-types';
import { Modal, notification, Button } from 'antd';
import './SimpleInput.scss';
import JobManagementContext from '../../contexts/JobManagementContext';
import SimpleFactory from '../../ApiFactory/SimpleFactory/SimpleFactory';
import DataHandler from '../../utils/DataHandlerUtils';
import {isEmpty} from 'lodash';

//- sample data
import optionA5 from '../../responseType/optionA-5.json';
import optionA2 from '../../responseType/optionA-2.json';
import optionA3 from '../../responseType/optionA-3.json';
import optionA4 from '../../responseType/optionA-4.json';
import singleResponse from '../../responseType/singleResponse.json';
import singleResponseError from '../../responseType/singleResponse-error.json';

const SimpleInput = ({placeholderValue}) => {
    // this.state = {}
    // this.setState({});
    const [visible, setVisible] = useState(false);
    const jobManagementContext = useContext(JobManagementContext);
    const [userInput, setUserInput] = useState('');
    const [modalData, setModalData] = useState({});

    //- not related
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

    const apiResponseSuccessSingleResponse = async e => {
        const rawResponse = await new SimpleFactory().getSingleVAJob("90faca8c-2762-4ac9-82a6-fda9f5c277c0");
        console.log('rawResponse', rawResponse);
        if(!isEmpty(rawResponse.data) && rawResponse.data.errorId === undefined) {
            //- show success
            notification['success']({
                message: 'Success',
                description: "Single response success"
            });
        }else{
            //- show error
            notification['error']({
                message: rawResponse.data.errorType,
                description: rawResponse.data.errorMessage
            });
        }
    }

    const apiResponseErrorSingleResponse = async e => {
        const rawResponse = await new SimpleFactory().getSingleVAJob("5b39b17c-099d-4d54-995e-64f4caffb64e");
        if(!isEmpty(rawResponse.data) && rawResponse.data.errorId !== undefined) {
            //- show error
            notification['error']({
                message: rawResponse.data.errorType,
                description: rawResponse.data.errorMessage
            });
        }
    }

    //- success
    const apiResponseWithList1 = async e => {
        const jobIds = [
            // "c465bc9e-0d70-4f69-a953-cae9a1ac0638",
            "f54060a6-4498-44f3-a7b0-4fefb88af5c2"
        ];
        const rawResponse = await new SimpleFactory().deleteVAJobs(jobIds);
        if(rawResponse !== undefined) {
            let handledMultipleResponseData = DataHandler.dataHandleMultipleResponse(rawResponse.data);
            console.log('handled data', handledMultipleResponseData);
            //- showing notification
            setVisible(true);
            setModalData(handledMultipleResponseData.data)

        }
    }

    //- success - not found
    const apiResponseWithList2 = async e => {
        const jobIds = [
            "5468d7c3-a0e5-431d-82b2-80eb08d11daa",
            "950ceffd-4c91-4958-8a58-41a2745902cb"
        ];
        const rawResponse = await new SimpleFactory().deleteVAJobs(jobIds);
        if(rawResponse !== undefined) {
            let handledMultipleResponseData = DataHandler.dataHandleMultipleResponse(rawResponse.data);
            console.log('handled data', handledMultipleResponseData);
            //- showing notification
            setVisible(true);
            setModalData(handledMultipleResponseData.data)

        }
    }

    //- not found
    const apiResponseWithList3 = async e => {
        const jobIds = [
            "c465bc9e-0d70-4f69-a953-cae9a1ac0638",
            "950ceffd-4c91-4958-8a58-41a2745902cb"
        ];
        const rawResponse = await new SimpleFactory().deleteVAJobs(jobIds);
        if(rawResponse !== undefined) {
            let handledMultipleResponseData = DataHandler.dataHandleMultipleResponse(rawResponse.data);
            console.log('handled data', handledMultipleResponseData);
            //- showing notification
            setVisible(true);
            setModalData(handledMultipleResponseData.data)

        }
    }

    //- server uncontactable
    const apiResponseWithList4 = async e => {
        await new SimpleFactory().deleteVAJobs();
    }

    //- request with empty list
    const apiResponseWithList5 = async e => {
        await new SimpleFactory().deleteVAJobs();
    }

    return (
        <Fragment>
            {renderModalWithContent()}
            <Button 
                className={'customMargin'}
                onClick={apiResponseWithList1}>API response with list (success) - 1</Button>
            <Button 
                className={'customMargin'}
                onClick={apiResponseWithList2}>API response with list (success - not found) - 2</Button>
            <Button 
                className={'customMargin'}
                onClick={apiResponseWithList3}>API response with list (not found) - 3</Button>
            <Button 
                className={'customMargin'}
                onClick={apiResponseWithList4}>API response with list (server uncontactable) - 4</Button>
            <Button 
                className={'customMargin'}
                onClick={apiResponseWithList5}>API response with list (empty list) - 5</Button>
            <Button  
                className={'customMargin'}
                onClick={apiResponseSuccessSingleResponse}>API response single response (success)</Button>
            <Button 
                className={'customMargin'}
                onClick={apiResponseErrorSingleResponse}>API response single response (error)</Button>
            {/* <Input placeholder={placeholderValue} onPressEnter={handleInputPressEnter} onChange={handleInputOnChange} className="simpleInput" /> */}
        </Fragment>
    );
    
}

SimpleInput.propTypes = {
    placeholderValue: PropTypes.string
};

export default SimpleInput;