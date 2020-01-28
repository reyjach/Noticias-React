import React ,{Component} from 'react';
import Header from './Componentes/Header';
import Noticias from './Componentes/Noticias';

class App extends Component{

  state ={
    noticias:[]
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias(){
    let url = `https://newsapi.org/v2/top-headlines?country=co&category=general&apiKey=576b6f45e6644d24babb925a094e28f9`;

    fetch(url).then(respuesta => {
      return respuesta.json();
    }).then(noticias => {
      this.setState({
        noticias:noticias.articles
      })
    })
  }


  render() {
    return (
      <div className="contenedor-app">
        <Header titulo = 'Noticias'></Header>
        <div className="container white contenedor-noticias">
          <Noticias noticas = {this.state.noticias}></Noticias>
        </div>
        
      </div>
    );
  }
  
}

export default App;
