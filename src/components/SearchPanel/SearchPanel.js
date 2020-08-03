import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownButton from '../DropdownButton/DropdownButton';


class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusList: ['Complete', 'Running', 'Error'],
            typeList: ['Face', 'Vehicle'],
            vendorList: ['ST VA', 'Govtech'],
            sourceList: ['']
        }
    }
    
    
    render() {
        return (
            <div>
                <DropdownButton
                    dropdownList={this.state.statusList}
                />
                <DropdownButton
                    dropdownList={this.state.typeList}
                />
                <DropdownButton
                    dropdownList={this.state.vendorList}
                />
                <DropdownButton
                    dropdownList={this.state.sourceList}
                />
            </div>
        );
    }
}

SearchPanel.propTypes = {

};

export default SearchPanel;