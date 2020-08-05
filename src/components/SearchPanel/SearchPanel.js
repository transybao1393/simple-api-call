import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownButton from '../DropdownButton/DropdownButton';
import SimpleInput from '../../components/SimpleInput/SimpleInput';
import {Row, Col, Button} from 'antd';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusList: ['Complete', 'Running', 'Error'],
            typeList: ['Face', 'Vehicle'],
            vendorList: ['ST VA', 'Govtech'],
            sourceList: ['Source']
        }
    }

    render() {
        return (
            <div className="SearchPanel">
                <Row>
                    <Col span={10}>
                        <DropdownButton
                            dropdownList={this.state.statusList}
                            dropdownType={"STATUS"}
                        />
                        <DropdownButton
                            dropdownList={this.state.typeList}
                            dropdownType={"TYPE"}
                        />
                        <DropdownButton
                            dropdownList={this.state.vendorList}
                            dropdownType={"VENDOR"}
                        />
                        <DropdownButton
                            dropdownList={this.state.sourceList}
                            dropdownType={"SOURCE"}
                        />
                    </Col>
                    <Col span={12}>
                        <SimpleInput 
                            placeholderValue={"Job search"}    
                        />
                        <Button>Clear</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

SearchPanel.propTypes = {

};

export default SearchPanel;