import { useState } from "react";
import type { Finanzas } from "../interfaces/finanzas";

export default function Home() {
  const [inputSaldo, setInputSaldo] = useState(0);

  const [datosFinancieros, setdatosFinancieros] = useState<Finanzas>({
    saldoBase: 0,
    ingresos: 0,
    gastos: 0,
    ahorros: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSaldo(Number(e.target.value));
  };

  const actualizarSaldo = () => {
    setdatosFinancieros((prev) => ({
      ...prev,
      saldoBase: inputSaldo,
    }));
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 min-h-screen ">
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <input
          type="number"
          name="saldoBase"
          value={inputSaldo}
          onChange={handleChange}
        />
        <button onClick={actualizarSaldo}>Agregar</button>
        <select className="border px-2 py-1 w-full">
          <option value="saldoBase">Saldo Base</option>
          <option value="ingresos">Ingresos</option>
          <option value="gastos">Gastos</option>
          <option value="ahorros">Ahorros</option>
        </select>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Saldo Actual:</h2>
        <p className="text-2xl text-green-500 font-semibold">
          {datosFinancieros.saldoBase}
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">
          Ingreso Actual:
        </h2>
        <p className="text-2xl text-red-500 font-semibold">$3,200</p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">
          Ahorros Actual:
        </h2>
        <p className="text-2xl text-blue-500 font-semibold">$3,200</p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Gastos Actual:</h2>
        <p className="text-2xl text-yellow-500 font-semibold">$3,200</p>
      </div>
    </div>
  );
}
