import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns';
import data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';




class FilterForm extends React.Component {
    
  constructor(props) {
    super(props)
    this.state = {
      numOfHorns:0 ,
    }
  }

    submitForm=(event)=>{
        event.preventDefault();
        this.setState({
          image_url: this.state.image_url,
          description: this.state.description,
          title:this.state.title,
          horns:this.state.horns,
          numOfHorns:event.target.value
        })
        console.log(this.state);
        alert("The form was submitted");
    }

    
    render() {
        return (
            <>
                <Form onSubmit={this.submitForm}>
                    <Form.Label> Number of Horns : </Form.Label>
                    <Form.Control as='select' name='selectForm'>
                        <option>All of Horned Beasts</option>
                        <option value="1">One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='100'>Wow</option>
                    </Form.Control>

                    <Button variant="primary" type="submit">Filter</Button>
                </Form>
            </>
        );
    }


}

export default FilterForm;