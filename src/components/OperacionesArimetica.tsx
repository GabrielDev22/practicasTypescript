import { useState } from "react"

export const OperacionesArimetica = () => {

    const [inputValue, setInputValue] = useState<number>(0);
    const [inputValue2, setInputValue2] = useState<number>(0);

    const handleForm = () => {
        const numOne : number = inputValue;
        const numTwo : number = inputValue2;

        const sumar : number = numOne + numTwo;
        const resta : number = numOne - numTwo;
        const multiplicacion : number = numOne * numTwo;
        const division : number = numOne / numTwo;

        console.log(sumar)
        console.log(resta)
        console.log(multiplicacion)
        console.log(division)

    }



  return (
    <div>
        <h1>OperacionesArimetica</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Primer Valor" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />
            <input type="text" placeholder="Segundo Valor" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
            <button onClick={handleForm}>enviar</button>
        </form>
    </div>
  )
}