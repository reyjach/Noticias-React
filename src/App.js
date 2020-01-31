import React ,{Component} from 'react';
import Header from './Componentes/Header';
import Noticias from './Componentes/Noticias';
import Formulario from './Componentes/Formulario';

class App extends Component{

  state ={
    noticias :[]
  }

  componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias(categoria = 'general'){

    
    
    let url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=576b6f45e6644d24babb925a094e28f9`;

    console.log(url)
    

    fetch(url)
    .then(respuesta => {
      return respuesta.json();
    })
    .then(noticias => {
      console.log(noticias.articles)
      this.setState({
        noticias : noticias.articles
      })
      
      

    })
  }

  


  render() {
    return (
      <div className="contenedor-app">
        <Header titulo = 'Noticias'></Header>
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias}></Formulario>
          <Noticias noticias = {this.state.noticias}></Noticias>
        </div>
        
      </div>
    );
  }
  
}

export default App;
