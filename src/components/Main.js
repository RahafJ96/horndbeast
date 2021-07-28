import React from 'react';
import "../App.css";
import HornedBeasts from './HornedBeasts';
import data from '../data.json';
import Row from 'react-bootstrap/Row'
import FilterForm from './FilterForm';


class Main extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         filterOption: -1,
    //     };
    // }

    // setFilterOption = (filterOption) => {
    //     this.setState({
    //         filterOption: filterOption,
    //     });
    // }
    
    render() {

        return (

        <main>
        <Row xs={1} md={4} className="g-4">
            { data.map((item, i) => 

            { return <>
            <HornedBeasts key={i} submitButton={this.props.submitButton} horns={item.horns}  title={item.title} image_url={item.image_url} description={item.description} />
          
</>})      
            }
        </Row>

        </main>

        )
    }
}

export default Main;