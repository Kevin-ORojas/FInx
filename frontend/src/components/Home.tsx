import { useState } from "react";
import type { Finanzas } from "../interfaces/finanzas";

export default function Home() {
  const [datosFinancieros, setdatosFinancieros] = useState<Finanzas>({
    saldoBase: 0,
    ingresos: 0,
    gastos: 0,
    ahorros: 0,
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Saldo Actual:</h2>
        <p className="text-2xl text-green-500 font-semibold">$3,200</p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Saldo Actual:</h2>
        <p className="text-2xl text-red-500 font-semibold">$3,200</p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Saldo Actual:</h2>
        <p className="text-2xl text-blue-500 font-semibold">$3,200</p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Saldo Actual:</h2>
        <p className="text-2xl text-yellow-500 font-semibold">$3,200</p>
      </div>
    </div>
  );
}
