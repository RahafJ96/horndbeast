import React from 'react';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import Button from 'react-bootstrap/Button';
import FilterForm from './components/FilterForm';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      description: '',
      title:'',
      horns: 0,
      show: false,
    }
  }

  submitButton = (image_url,description,title,horns) => {
  this.setState ({
    image_url: image_url,
    description: description,
    title:title,
    horns:horns,
    show: true
  })
  console.log(  'x=' ,image_url );

  }


  handleCancel=()=>{
    this.setState({
      show: false
    })

  }
  

  render() {
    return (
      <div>
        <Header />
        <FilterForm submitForm={this.submitForm}/>
        <Main submitButton={this.submitButton}/>
        <SelectedBeast  show={this.state.show} handleCancel={this.handleCancel} image_url={this.state.image_url} description={this.state.description} title={this.state.title} horns={this.state.horns}/>
        <Footer />
      </div>
    )
  }
}

export default App;