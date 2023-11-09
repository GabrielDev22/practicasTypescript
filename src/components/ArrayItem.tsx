const ArrayItem = () => {

  const arregloNumero:number[] = [1,2,3,4,5,6,7,8,9,10];
  const arregloLetras:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

  console.log(arregloNumero)
  console.log(arregloLetras)

  return (
    <div>
      <h1>ArrayItem</h1>
      {arregloNumero.map(num => (
        <div key={num}>
          <li>{num}</li>
        </div>
      ))}
      <hr />
      {arregloLetras.map(letra => (
        <div key={letra}>
          <li>{letra}</li>
        </div>
      ))}
      
    </div>
  )
}

export default ArrayItem