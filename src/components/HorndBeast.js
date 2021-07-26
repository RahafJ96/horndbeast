import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ThemeProvider } from 'react-bootstrap';

class HornedBeasts extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            numberOfLike: 0
        }
    }

    incrementNumber=()=>{
        this.setState(
            {
                numberOfLike: this.state.numberOfLike +1
            }
        )
    }
   
    render() {
        return (
            <div>
                {/* <h2>{this.props.title}</h2>
                <img src={this.props.imgUrl} />
                <p>{this.props.description}</p> */}

                <Card style={{ width: '18rem' }}>
                    <Card.Img onClick={this.incrementNumber} variant="top" src={this.props.image_url} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text >
                        {this.props.description}
                        </Card.Text>
                        <Card.Text style={{size: "15px" ,margin:'20px'}}>
                        Number of likes ❤️: {this.state.numberOfLike}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
};

export default HornedBeasts;