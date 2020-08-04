import React, {Fragment} from 'react'; 

const Jsx = () => {

    const temperatura = 20;

    return (
        <Fragment>
            <h4>Frío o calor</h4>
            <h5>{temperatura > 20 ? 'calor' : 'frio'}</h5>
        </Fragment>
      );
}

export default Jsx;