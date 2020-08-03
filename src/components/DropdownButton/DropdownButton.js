import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import './DropdownButton.scss';

export default class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sList: this.props.dropdownList
        };
    }

    _renderDropdownMenu() {
        return this.state.sList.map( (actions, i) => {
            return <Menu.Item key={i} icon={<UserOutlined />}>
                {actions}
            </Menu.Item>
        });
    }

    handleMenuClick(e) {
        console.info('Click on menu item.');
        console.log('click', e);
    }

    render() {

        const menu = (
            <Menu onClick={this.handleMenuClick()}>
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
    statusList: PropTypes.array
};

SearchPanel.defaultProps = {
    statusList: ['status list']
};