import React from 'react';
import "../App.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';



class SelectedBeast extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    handelmodal() {
        this.setItems()
        this.setState({
            show: true
        })
    }
    removeModal = () => {
        this.setState({
            show: false
        })
    }


    setItems = () => {
        this.setState({
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description
        })

    }

    render() {
        return (
            <>
                <Button onClick={() => {this.handelmodal()}}>Display</Button>

                <Modal show={this.state.show} onHide={() => this.removeModal()}>
                    <Modal.Header closeButton>

                        <Modal.Title> {this.state.title} </Modal.Title>


                    </Modal.Header>

                    <Modal.Body>
                        <Image variant="top" src={this.state.image_url} alt={"test"} width={300} /><br/>
                        {this.state.description}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => { this.removeModal() }}>Close</Button></Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default SelectedBeast;