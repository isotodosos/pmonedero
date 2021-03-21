import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // states
  const[presupuesto, guardarPresupuesto] = useState(0);
  const[restante, guardarRestante] = useState(0);
  const[mostrarpregunta, actualizarPregunta] = useState(true);
  const[gastos, guardarGastos]= useState([]);
  const[gasto, guardarGasto]= useState({});
  const[creargasto, guardarCrearGasto]=useState(false);


  //useEffect que actualiza el restante
  useEffect(() => {

    if(creargasto){
      guardarGastos([
        ...gastos, 
        gasto
      ])
      guardarCrearGasto(false);

      const resto = restante - gasto.cantidad;
      guardarRestante(resto);
    }

  }, [gasto,creargasto, restante, gastos]) //como gasto existe desde el principio como una array vacio y useState se actualiza con gasto 
  //tanto la primera vez como cuando hay algun cambio debemos de poner un if y un state nuevo que lo condicione


  
  


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        
        <div className="contenido-principal contenido">
          {// hacemos un ternario para hacer aparecer o desaparecer parte del codigo
            mostrarpregunta 
          ? 
            (<Pregunta
              guardarPresupuesto = {guardarPresupuesto}
              guardarRestante = {guardarRestante}
              actualizarPregunta = {actualizarPregunta}
            />)
          : 
            (<div className="row">
              <div className="one-half column">
                <Formulario
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
                
              </div>
            </div>)        
          }
          
              
        </div>
      </header>
    </div>
  );
}

export default App;
