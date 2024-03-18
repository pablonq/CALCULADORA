import '../estilos/Pantalla.css'
const Pantalla = ({ input }) =>( /* Se utiliza de esta forma porq se trata de un componente sencillo, q solo es una presentacion. Se define como constante porq no se va a reasignar. "=>" sirve para decirle que vamos a retornar. "{ input }" sintaxis de desestructuracion*/
  <div className='input'>
    {input}
  </div>
);
export default Pantalla;