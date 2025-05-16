import React, { useState } from 'react';
import './diseno.css'

function App() {
    const [miTexto, setMiTexto] = useState('');

    const handleText = (event) => {
        setMiTexto(event.target.value);
    };

    return (
        <div className="diseno" >
            <div>
                Capture su texto
            </div>
            {}
            <div className="input">
            <input value={miTexto} onChange={handleText} /></div>
            <h3>Su Texto</h3>
            <p>
                {}
                {miTexto}
            </p>
        </div>
    );
}

export default App;