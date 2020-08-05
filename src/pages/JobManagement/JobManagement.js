import React, { Component } from 'react';
import './JobManagement.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import JobList from '../../components/JobList/JobList';
import JobManagementContext from '../../contexts/JobManagementContext';

const initialJobState = {
    status: '',
    type: '',
    vendor: '',
    source: ''
};

export default class JobManagement extends Component {

    render() {
        return (
            <div className="jobMng">
                <JobManagementContext.Provider value={initialJobState}>
                    <SearchPanel/>
                    <JobList/>
                </JobManagementContext.Provider>
            </div>
        );
    }
}