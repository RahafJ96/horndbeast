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

            title: "",
            image_src: '',
            desc: ''

        }
    }

    handelmodal() {
        this.selectClickFun()
        this.setItems()
        this.setState({
            show: !this.state.show
        })
    }
    removeModal = () => {
        this.setState({
            show: !this.state.show
        })
    }

    selectClickFun = () => {
        this.props.cancelFunc();
        this.props.selectFun();

    }

    setItems = () => {
        this.setState({
            title: this.props.title,
            image_url: this.props.image_url,
            description: this.props.description
        })

    }
    // handleShow=()=>{
    //     this.props.callingFunction();
    // }

    // handleClose=()=>{

    // }
    // show=()=>{
    //     return false;
    // }
    render() {
        return (
            <>
                <Button onClick={() => {this.handelmodal()}}>Display</Button>

                <Modal show={this.state.show} onHide={() => this.removeModal()}>
                    <Modal.Header closeButton>

                        <Modal.Title> {this.state.title} </Modal.Title>


                    </Modal.Header>

                    <Modal.Body>
                        <Image variant="top" src={this.state.image_url} alt={"test"} width={300} />
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