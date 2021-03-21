import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //useState mas local de cantidad
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // funcion de onchange
    const definirPresupuesto = (e) =>(
        guardarCantidad ( parseInt(e.target.value, 10))//parse int convierte un string a entero ya que luego vamos a restar (en la consola azules)
    )

    //funcion submit
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        
        //Validar....
        if(cantidad <1 || isNaN(cantidad)) {//isNaN es para si esta vacio y no es un numero...
            guardarError(true)
            return;
        
        }
        

        //Si pasa la validación...
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return(

       <Fragment>
           <h2>Coloca tu presupuesto</h2>
           {error ? <Error mensaje="El presupuesto es incorrecto"/>  : null}
           <form
              onSubmit={agregarPresupuesto}
           >
               <input
                  type="number"
                  className="u-full-width"
                  placeholder="Coloca tu presupuesto"
                  onChange={definirPresupuesto}
               />
               <input
                  type="submit"
                  className="button-primary u-full-width"
                  value="Definir Presupuesto"
               />
           </form>
       </Fragment>

    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;