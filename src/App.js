import React from 'react';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import Button from 'react-bootstrap/Button';
import FilterForm from './components/FilterForm';
import data from './data.json';




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

  handleCancel=()=>{
    this.setState({
      show: false
    })

  }

  handleOpen=()=>{
    this.setState({
      show: true
    })
  }
  
  getData=(image_url,description,title)=>{
    this.setState({
      image_url:image_url,
      description: description,
      title:title,
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main data={data} getData={this.getData} handleOpen={this.handleOpen} />
        <SelectedBeast  show={this.state.show} handleCancel={this.handleCancel} image_url={this.state.image_url} description={this.state.description} title={this.state.title}/>
        <Footer />
      </div>
    )
  }
}

export default App;