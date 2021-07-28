import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class HornedBeasts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfLike: 0,
        }

    }

    incrementNumber = () => {
        this.setState(
            {
                numberOfLike: this.state.numberOfLike + 1
            }
        )
    }
    modalData=()=>{
        this.props.submitButton(this.props.image_url,this.props.description,this.props.title)

    }
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: '20rem', height: "38rem" }}>
                        <Card.Img onClick={this.incrementNumber} variant="top" src={this.props.image_url} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text >
                                {this.props.description}<br />
                                Number of likes ❤️: {this.state.numberOfLike}
                            </Card.Text>
                        <Button onClick={this.modalData}>Display</Button>
                        </Card.Body>                        
                    </Card>
                </Col>
            </>
        )
    }
};

export default HornedBeasts;