import React from 'react';
import "../App.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



class SelectedBeast extends React.Component {

    render() {
        return (
            <>
                
            
                <Modal show={this.props.show} onHide={this.props.handleCancel}>
                    <Modal.Header closeButton>

                        <Modal.Title>  {this.props.title} </Modal.Title>


                    </Modal.Header>

                    <Modal.Body>
                        <Image variant="top" src={this.props.image_url} alt={"test"} width={300} /><br/>
                        {this.props.description}<br/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.handleCancel}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;