import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


class HornedBeasts extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            numberOfLike: 0,
            numberOfDisLike: 0

        }
    }

    incrementNumber=()=>{
        this.setState(
            {
                numberOfLike: this.state.numberOfLike +1
            }
        )
    }
    // decrementNumber=()=>{
    //     this.setState(
    //         {
    //             numberOfLike: this.state.numberOfLike -1
    //         }
    //     )
    // }
   
    render() {
        return (
            <>
                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} />
                <p>{this.props.description}</p> */}
                <section>
                <Col>

                <Card style={{ width: '18rem' , height: "35rem"  }}>
                    <Card.Img onClick={this.incrementNumber} variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text >
                        {this.props.description}
                        </Card.Text>
                    
                        <Button onClick={this.incrementNumber} variant="primary">
                        Number of likes ❤️: {this.state.numberOfLike}
                        </Button>
                        {/* <Button onClick={this.decrementNumber} variant="primary">💔 - {this.state.numberOfDisike}</Button> */}
                    </Card.Body>
                </Card>
                </Col>
                </section>
            </>
        )
    }
};

export default HornedBeasts;