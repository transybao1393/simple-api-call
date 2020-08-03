import React, { Component } from 'react';
import './JobManagement.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import JobList from '../../components/JobList/JobList';

class JobManagement extends Component {
    render() {
        return (
            <div className="jobMng">
                <SearchPanel/>
                <JobList/>
            </div>
        );
    }
}

export default JobManagement;