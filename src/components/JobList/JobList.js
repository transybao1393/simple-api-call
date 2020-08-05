import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Table} from 'antd';

class JobList extends Component {
    
    // static contextType = JobManagementContext;
    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    renderSubTable(columns, data) {
        return <Table columns={columns} dataSource={data} pagination={false} showHeader={false}/>;
    }

    render() {

        const columns = [
            {
                title: 'No.',
                dataIndex: 'no'
            },
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Description',
                dataIndex: 'description'
            },
            {
                title: 'Status',
                dataIndex: 'status'
            },
            {
                title: 'Type',
                dataIndex: 'type'
            },
            {
                title: 'Source',
                dataIndex: 'source'
            },
            {
                title: 'Vendor',
                dataIndex: 'vendor'
            },
            {
                title: 'More',
                dataIndex: 'more',
                render: text => <a href="http://google.com">{text}</a>,
            },
        ];

        const data = [
            {
                key: '1',
                no: '1',
                name: 'Lab-3-test',
                description: 'null',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            },
            {
                key: '2',
                no: '2',
                name: 'Job_2',
                description: 'null',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            },
            {
                key: '3',
                no: '3',
                name: 'Job 1',
                description: 'Job 1 description',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            },
            {
                key: '4',
                no: '4',
                name: 'Not Expandable',
                description: 'Job 1 description',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            }
        ];

        const subColumn = [
            {
                // title: 'No.',
                dataIndex: 'no'
            },
            {
                // title: 'No.',
                dataIndex: 'no'
            },
            {
                // title: 'Name',
                dataIndex: 'name'
            },
            {
                // title: 'Description',
                dataIndex: 'description'
            },
            {
                // title: 'Status',
                dataIndex: 'status'
            },
            {
                // title: 'Type',
                dataIndex: 'type'
            },
            {
                // title: 'Source',
                dataIndex: 'source'
            },
            {
                // title: 'Vendor',
                dataIndex: 'vendor'
            },
            {
                // title: 'More',
                dataIndex: 'more',
                render: text => <a href="http://google.com">{text}</a>,
            },
        ];

        const subData = [
            {
                key: '1',
                name: 'Lab-3-test',
                description: 'null',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            },
            {
                key: '2',
                name: 'Job_2',
                description: 'null',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            },
            {
                key: '3',
                name: 'Job 1',
                description: 'Job 1 description',
                status: 'Creating (0%)',
                type: 'FACE',
                source: 'GEOZONE',
                vendor: 'ST VA',
                more: 'Info'
            }
        ];
        
        return (
            <Table
                columns={columns} 
                dataSource={data} 
                onChange={this.onChange()} 
                expandable={{
                    // expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
                    expandedRowRender: record => this.renderSubTable(subColumn, subData),
                    rowExpandable: record => record.name !== 'Not Expandable',
                }}
                rowSelection={{
                    type: 'checkbox'
                }}
            />
        );
    }
}

JobList.propTypes = {

};

export default JobList;