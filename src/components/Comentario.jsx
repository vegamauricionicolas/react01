import React, { Fragment } from 'react'
import Avatar from './Avatar';

const Comentario = ({sujeto}) => {
    return ( 
        <Fragment>
            <h1>Comentarios</h1>
            <hr/>
            <div className="media">
                <Avatar urlImagen={sujeto.urlImagen}/>
                <div class="media-body">
                    <h5 class="mt-0">{sujeto.nombre}</h5>
                    {sujeto.texto}
                </div>
            </div>
        </Fragment>
     );
}
 
export default Comentario;