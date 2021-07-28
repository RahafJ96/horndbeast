import React from 'react';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import Button from 'react-bootstrap/Button';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';



class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      description: '',
      title:'',
      show: false,
    }
  }

  submitButton = (image_url,description,title) => {
  this.setState ({
    image_url: image_url,
    description: description,
    title:title,
    show: true
  })
  console.log(  'x=' ,image_url );

  }

  handleCancel=()=>{
    this.setState({
      show: false
    })
    console.log(  'y=' ,this.state.image_url );

  }
  

  render() {
    return (
      <div>
        <Header />
        <Main submitButton={this.submitButton}/>
        <SelectedBeast  show={this.state.show} handleCancel={this.handleCancel} image_url={this.state.image_url} description={this.state.description} title={this.state.title} />
        <Footer />
      </div>
    )
  }
}

export default App;