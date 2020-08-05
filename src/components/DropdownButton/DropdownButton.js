import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import './DropdownButton.scss';
import JobManagementContext from '../../contexts/JobManagementContext';

export default class SearchPanel extends Component {
    static contextType = JobManagementContext;
    constructor(props) {
        super(props);
        this.state = {
            sList: this.props.dropdownList,
            dropdownButtonType: this.props.dropdownType
        };
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
    }

    handleMenuItemClick(e) {
        // console.log('menu item onclick', e.key);
        if(this.state.dropdownButtonType === "STATUS") {
            this.context.status = e.key;
        } else if(this.state.dropdownButtonType === "TYPE") {
            this.context.type = e.key;
        } else if(this.state.dropdownButtonType === "VENDOR") {
            this.context.vendor = e.key;
        } else if(this.state.dropdownButtonType === "SOURCE") {
            this.context.source = e.key;
        }
    }

    _renderDropdownMenu() {
        return this.state.sList.map( (actions, i) => {
            return <Menu.Item onClick={this.handleMenuItemClick} key={actions} icon={<UserOutlined />}>
                {actions}
            </Menu.Item>
        });
    }

    render() {
        const menu = (
            <Menu>
                {this._renderDropdownMenu()}
            </Menu>
        );

        return (
            <Dropdown overlay={menu} className="dropdownStyle">
                <Button>
                {this.state.sList[0] || "Dropdown list"} <DownOutlined />
                </Button>
            </Dropdown>
        );
    }
}

SearchPanel.propTypes = {
    statusList: PropTypes.array,
    dropdownType: PropTypes.oneOf(['STATUS', 'TYPE', 'VENDOR', 'SOURCE'])
};

SearchPanel.defaultProps = {
    statusList: ['status list']
};