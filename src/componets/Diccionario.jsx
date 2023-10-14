import { automoviles, electronics, zapatos } from './Lista.jsx';


function Diccionario() {

    const tipo = electronics.filter(electronics =>
        electronics.tipo === 'smartphone'
      );
      const lista = tipo.map(electronics =>
        
        <li>  
          <p>
            <b>{electronics.sku}</b><br />
              {' ' + electronics.nombre + ' '}<br/>
              {' ' + electronics.descripcion + ' '}<br/>
              {' ' + electronics.ram + ' '}<br/>
              {' ' + electronics.precio + ' '}<br/>
              
          </p>
        </li>
      );
      
      
    const tipoAuto = automoviles.filter(automoviles =>
      automoviles.tipo === 'todo terreno');
    const lista1 = tipoAuto.map(automovil =>
      
      <li>  
        <p>
          <b>{automovil.id}</b><br />
            {' ' + automovil.marca + ' '}<br/>
            {' ' + automovil.color + ' '}<br/>
            {' ' + automovil.precio + ' '}<br/>
            
        </p>
      </li>
    );
   
    const tipoZap = zapatos.filter(zapatos =>
      zapatos.tipo === 'tenis');
    const lista2 = tipoZap.map(zapato =>
      
      <li>  
        <p>
          <b>{zapato.id}</b><br />
            {' ' + zapato.marca + ' '}<br/>
            {' ' + zapato.precio + ' '}<br/>
            {' ' + zapato.color + ' '}<br/>
            
        </p>
      </li>
    );
   
    return(
        <>
            <p>Diccionario</p>
            <div>
                <ul>{lista}</ul>
                
            </div>
            <br />
            <p>Autos</p>
            <div>
                <ul>{lista1}</ul>
                
            </div>
            <br />
            <p>zapatos</p>
            <div>
                <ul>{lista2}</ul>
                
            </div>

            
            



        </>
    )

}

export default Diccionario;