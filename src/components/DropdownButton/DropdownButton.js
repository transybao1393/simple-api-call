import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';

export default class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sList: this.props.dropdownList
        };
    }

    _renderDropdownMenu() {
        return this.state.sList.map( (actions, i) => {
            return <Dropdown.Item href={""} key={i}>{actions}</Dropdown.Item>
        });
    }

    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {this.state.sList[0]}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this._renderDropdownMenu()}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

SearchPanel.propTypes = {
    statusList: PropTypes.array
};

SearchPanel.defaultProps = {
    statusList: ['status list']
};