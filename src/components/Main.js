import React from 'react';
import "../App.css";
import HornedBeasts from './HorndBeast';
import data from '../data.json';
import Row from 'react-bootstrap/Row'



class Main extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {

        return (

        <main>
        <Row xs={1} md={4} className="g-4">
            { data.map((item, i) => 
            { return <><HornedBeasts key={i} submitButton={this.props.submitButton}  title={item.title} image_url={item.image_url} description={item.description} />
          
</>})      
            }
        </Row>

        </main>

        )
    }
}

export default Main;