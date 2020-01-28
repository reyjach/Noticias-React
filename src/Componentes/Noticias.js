import React, { Component } from 'react';
import Notica from './Noticia'


class Noticas extends Component {
    
    render() { 
        return ( 
            <div className="row">
                <Notica></Notica>
            </div>
         );
    }
}
 
export default Noticas;