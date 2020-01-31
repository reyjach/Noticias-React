import React, { Component } from 'react';
import Notica from './Noticia'


class Noticas extends Component {
    
    render() { 
        return ( 
            <div className="row">
               {this.props.noticias.map(noticia => (
                <Notica key={noticia.url} noticia={noticia}></Notica>
               ))}
            </div>
         );
    }
}
 
export default Noticas;