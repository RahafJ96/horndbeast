import React from 'react';
import "../App.css";
import HornedBeasts from './HornedBeasts';
import Row from 'react-bootstrap/Row';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data
        };
    }
    
    render() {
        console.log(this.state.data);

        return (

            <main>
                <Row xs={1} md={4} className="g-4">
                    {this.props.data.map(item => {
                        return <>
                            <HornedBeasts handleOpen={this.props.handleOpen} getData={this.props.getData} title={item.title} image_url={item.image_url} description={item.description} />
                        </>
                    })
                    }
                </Row>

            </main>

        )
    }
}

export default Main;