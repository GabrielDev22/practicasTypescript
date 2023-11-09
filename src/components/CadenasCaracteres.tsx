import { useState } from "react"

export const CadenasCaracteres = () => {

  const [valor, setValor] = useState<string>('');
  const [valor2, setValor2] = useState<string>('');

  const handleForm = () => {
      const nombre: string = valor;
      const apellido: string = valor2;

      const nombreCompleto: string = nombre + ' ' + apellido

      console.log(nombreCompleto)
  }

  return (
    <div>
        <h1>CadenasCaracteres</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="nombre" value={valor} onChange={(e) => setValor(e.target.value)} />
            <input type="text" placeholder="apellido" value={valor2} onChange={(e) => setValor2(e.target.value)} />
            <button onClick={handleForm}>Enviar</button>
        </form>
    </div>
  )
}