import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

class BasicModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalContent: this.props.modalContent,
            visible: this.props.isVisible,
        }
        console.log('render basic modal component...', this.props.isVisible);
    }

    componentDidUpdate(prevProps, prevStates) {
        console.log('basic modal update', prevProps, prevStates);
    }
    

    renderModalContent() {
        const {modalContent} = this.props;
        return <p>Nội dung</p>
    }

    handleOk = e => {
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <Fragment>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    // visible={true}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    {this.renderModalContent}
                </Modal>  
            </Fragment>
        );
    }
}

BasicModal.propTypes = {
    modalContent: PropTypes.object,
    isVisible: PropTypes.bool
};

BasicModal.defaultProps = {
    modalContent: {},
    isVisible: false
};  

export default BasicModal;