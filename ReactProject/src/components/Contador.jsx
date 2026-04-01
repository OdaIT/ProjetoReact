import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const handleclick = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={handleclick}>Incrementar</button>
    </div>
  );
}

export default Contador;