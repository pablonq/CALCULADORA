import '../estilos/Boton.css'
function Boton (props){
  const esOperador = valor => {
    return isNaN(valor) && (valor!== '.') && (valor !== '=');
  };
  if(esOperador (props.children)){
    return (
      <div className='boton-contenedor operador'
      onClick={()=>props.manejarClic(props.children)}> {/* para decirle a "onClic" que llame a la funcion manejarClic debemos hacerlo cona funcion flecha vacia ó anonima (no hay q definirla). De lo contrario va a estar esperando un string */}
        
        {props.children}
    
      </div>
      );
  }else{
    return (
      <div className='boton-contenedor'
      onClick={()=>props.manejarClic(props.children)}> {/* para decirle a "onClic" que llame a la funcion manejarClic debemos hacerlo cona funcion flecha vacia ó anonima (no hay q definirla). De lo contrario va a estar esperando un string */}
        
        {props.children}
    
      </div>
      );

  
  /* ALTERNATIVA DE MENOS CODIGO
  return (
  <div className={ `boton-contenedor ${esOperador (props.children)? 'operador' : ''}`}
  onClick={()=>props.manejarClic(props.children)}> /* para decirle a "onClic" que llame a la funcion manejarClic debemos hacerlo cona funcion flecha vacia ó anonima (no hay q definirla). De lo contrario va a estar esperando un string */
    
/*    {props.children}

  </div>
  ); */
};
}
export default Boton;