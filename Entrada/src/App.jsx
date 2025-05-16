import React, { useState } from 'react';
import './diseno.css'

function App() {
    // 1. Crear un estado llamado miTexto
    const [miTexto, setMiTexto] = useState('');

    // 2. Crear función handleText
    const handleText = (event) => {
        // 3. Tomar el valor del input con event.target.value
        // 4. Actualizar el estado con el nuevo valor
        setMiTexto(event.target.value);
    };

    return (
        <div className="diseno" >
            <div>
                Capture su texto
            </div>
            {/* 5. Pasar el estado como valor y usar onChange */}
            <div className="input">
            <input value={miTexto} onChange={handleText} /></div>
            <h3>Su Texto</h3>
            <p>
                {/* Mostrar el texto de la caja de entrada aquí */}
                {miTexto}
            </p>
        </div>
    );
}

export default App;