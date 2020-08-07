import React, { Fragment } from 'react'

const Avatar = ({urlImagen}) => {
    return ( 
        <Fragment>
            <img src= {urlImagen} class="mr-3" alt=""/>
        </Fragment>
     );
}
 
export default Avatar;