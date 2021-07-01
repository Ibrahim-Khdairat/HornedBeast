import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedHorned from './components/SelectedHorned';
import Horned from './components/Horned.json';

import './App.css';

class App extends React.Component{
  constructor(props)
  {
    super(props)
     this.state = {
    
      AllHorned: Horned,
      showModal:false,
      selectedAnimal:{}
  }
  }

  renderModal = (key) => {
    let selected = Horned.find(animal=>{
        if(animal.title === key){return animal;} 
    }
    )

    this.setState({
        showModal:true,
        selectedAnimal : selected
    })
  }
  
  handleClose = () => {
    this.setState({
        showModal:false,
        selectedAnimal:{}
    })
  }
  
  render(){
    return(
      <>
        <Header/>
        <Main renderModal={this.renderModal} selectedAnimal={this.state.selectedAnimal}/>
        <SelectedHorned showModal={this.state.showModal} selectedAnimal={this.state.selectedAnimal} handleClose={this.handleClose} />
        <Footer/>
      </>
     
    );
  }
}

export default App;
