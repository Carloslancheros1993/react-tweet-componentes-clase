import React from 'react';
import './App.css';
import Feed from './components/feed';
import Navbar from './components/navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      profile: "https://cdn.icon-icons.com/icons2/895/PNG/512/Twitter_icon_icon-icons.com_69154.png",
      profileName: "Twitter Safety",
      username : "@TwitterSafety",
      content : "React está basado en un paradigma llamado programación orientada a componentes en el que cada componente es una pieza con la que el usuario puede interactuar. Estas piezas se crean usando una sintaxis llamada JSX permitiendo escribir HTML (y opcionalmente CSS) dentro de objetos JavaScript.",
      display: false
    }
  }

  mostrar = () => {
    this.setState({display: true});//setState metodo para actualizar el estado que tiene declarado
  }

  ocultar = () => {
    this.setState({display: false});//setState metodo para actualizar el estado que tiene declarado
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <h1>Tweeter</h1>
        <Feed datos={this.state} mostrar={this.mostrar} ocultar={this.ocultar}/>
      </div>
    );
   } 
  }



export default App;
