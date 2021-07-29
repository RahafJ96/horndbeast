import React from 'react';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import data from './data.json';
import Form from 'react-bootstrap/Form';




class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      description: '',
      title: '',
      show: false,
      filteredData: data
    }
  }

  handleCancel = () => {
    this.setState({
      show: false
    })

  }

  handleOpen = () => {
    this.setState({
      show: true
    })
  }

  getData = (image_url, description, title) => {
    this.setState({
      image_url: image_url,
      description: description,
      title: title,
    })
  }

  numberHorns=(event)=>{
    // console.log(event.target.value);
    let horns=event.target.value;
    let filterData1= data.filter((item)=>{
    if (item.horns == horns){
      return true
    }
    if (horns == 'all'){
      return true
    }
  }
  )
  // console.log('Filtered data ==',filterData1);
  this.setState({
    filteredData:filterData1
  })
  
}


  render() {
    return (
      <div>
        <Header />
          <Form.Label> Number of Horns : </Form.Label>
        <Form.Select onChange={this.numberHorns}>
        
            <option value="all">All of Horned Beasts</option>
            <option value="1">One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
            <option value='100'>Wow</option>

        </Form.Select>
        <Main data={this.state.filteredData} getData={this.getData} handleOpen={this.handleOpen} />
        <SelectedBeast show={this.state.show} handleCancel={this.handleCancel} image_url={this.state.image_url} description={this.state.description} title={this.state.title} />
        <Footer />
      </div>
    )
  }
}

export default App;