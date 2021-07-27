import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';



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
  
    // clickFunc = () => {
    //     this.setState({
    //         click: this.state.click + 1
    //     })
    // }
    // cancelFunc = () =>{
    //     this.setState({
    //         click: this.state.click - 1
    //     })
    // }



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
                            <SelectedBeast  image_url={this.props.image_url} description={this.props.description} title={this.props.title} />

                        </Card.Body>
                    </Card>
                </Col>
            </>
        )
    }
};

export default HornedBeasts;