import React, { Component } from 'react';
import './JobManagement.scss';
import SearchPanel from '../../components/SearchPanel/SearchPanel';

class JobManagement extends Component {
    render() {
        return (
            <div className="jobMng">
                <SearchPanel/>
                <p>This is the list when search</p>
            </div>
        );
    }
}

export default JobManagement;