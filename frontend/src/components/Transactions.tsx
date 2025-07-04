interface Data {
  arroz: string;
  precio: number;
}

export default function Transactions() {
  const data: Data[] = [
    {
      arroz: "arroz",
      precio: 15000,
    },
  ];
  return (
    <div className="p-4  min-h-screen">
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <div className="mt-8">
          <input
            className="w-full py-4 mb-2 sm:mb-8 p-4 font-[lato] font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none hover:rounded-md"
            type="number"
            name="saldoBase"
            placeholder="ingresa tu valor"
          />
          <button className=" w-full rounded-md font-[lato] font-bold cursor-pointer py-3 px-8 mb-2 sm:mb-8 bg-blue-400 hover:bg-blue-600">
            Agregar
          </button>
          {/* <select className="border px-2 py-1 w-full cursor-pointer rounded-md">
            <option className="cursor-pointer" value="saldoBase">
              Saldo Base
            </option>
            <option className="cursor-pointer" value="ingresos">
              Ingresos
            </option>
            <option className="cursor-pointer" value="ahorros">
              Ahorros
            </option>
            <option className="cursor-pointer" value="gastos">
              Gastos
            </option>
          </select> */}
        </div>
      </div>

      <div className="h-auto p-4 mt-8 bg-white transition-transform shadow-md rounded-md">
        <div className="grid grid-cols-2 justify-items-center font-[lato] font-bold">
          <p>Producto</p>
          <p>Precio</p>
        </div>
        {data.map(({ precio, arroz }) => (
          <div className="grid grid-cols-2 justify-items-center mt-6 decoration-0">
            <li>{arroz}</li>
            <li>{precio}</li>
          </div>
        ))}
      </div>
    </div>
  );
}
