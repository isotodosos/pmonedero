import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const[nombre, guardarNombre] = useState('');
    const[cantidad, guardarCantidad] = useState('');
    const[error, guardarError] = useState(false);

    
    const agregarGasto = (e) => {
        e.preventDefault();

        //validar
        if(nombre.trim() === '' || cantidad <1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id : shortid()
        }
        
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //limpiar o resetear el formulario
        guardarNombre('');
        guardarCantidad('');
    }

    return(
        <form
           onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="El gasto es incorrecto" />: null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                   type="text"
                   className="u-full-width"
                   placeholder="Ej: transporte"
                   value= {nombre}
                   onChange={e => {guardarNombre(e.target.value)} }
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                   type="number"
                   className="u-full-width"
                   placeholder="Ej: 150"
                   value= {cantidad}
                   onChange={e => {guardarCantidad(parseInt(e.target.value))}}//para aclarar que es un numero
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>

    )


}
Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
export default Formulario;