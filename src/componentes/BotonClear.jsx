import '../estilos/BotonClear.css'
const BotonClear = (props) => ( /*"(props)" otra alternativa de notacion*/
  <button className='boton-clear'
  onClick={props.manejarClear}>
    
      {props.children}
  </button>
);
export default BotonClear;