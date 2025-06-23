import { useState } from "react";
import type { Finanzas } from "../interfaces/finanzas";

export default function Home() {
  const [inputSaldo, setInputSaldo] = useState(0);
  const [campoSeleccionado, setCampoSeleccionado] =
    useState<keyof Finanzas>("saldoBase");
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
      [campoSeleccionado]: inputSaldo,
    }));
  };

  const formatearCOP = (valor: number): string => {
    return new Intl.NumberFormat("es-CO", {
      style:"currency",
      currency:"COP",
      maximumFractionDigits:0
    }).format(valor)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 min-h-screen ">
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <input
          className="w-full py-4 mb-2 p-4 font-[lato] font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type="number"
          name="saldoBase"
          value={inputSaldo === 0 ? "" : inputSaldo}
          placeholder="ingresa tu valor"
          onChange={handleChange}
        />
        <button
          className=" w-full rounded-md font-[lato] font-bold cursor-pointer py-3 px-8 mb-2 bg-blue-400 hover:bg-blue-600"
          onClick={actualizarSaldo}
        >
          Agregar
        </button>
        <select
          className="border px-2 py-1 w-full cursor-pointer rounded-md"
          value={campoSeleccionado}
          onChange={(e) =>
            setCampoSeleccionado(e.target.value as keyof Finanzas)
          }
        >
          <option className="cursor-pointer" value="saldoBase">
            Saldo Base
          </option>
          <option className="cursor-pointer" value="ingresos">
            Ingresos
          </option>
          <option className="cursor-pointer" value="gastos">
            Gastos
          </option>
          <option className="cursor-pointer" value="ahorros">
            Ahorros
          </option>
        </select>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Saldo Actual:</h2>
        <p className="text-2xl text-green-500 font-semibold">
          {formatearCOP(datosFinancieros.saldoBase)}
        </p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">
          Ingreso Actual:
        </h2>
        <p className="text-2xl text-red-500 font-semibold">
          ${formatearCOP(datosFinancieros.ingresos)}
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">
          Ahorros Actual:
        </h2>
        <p className="text-2xl text-blue-500 font-semibold">
          ${datosFinancieros.gastos}
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <h2 className="text-gray font-[lato] font-bold mb-2">Gastos Actual:</h2>
        <p className="text-2xl text-yellow-500 font-semibold">
          ${datosFinancieros.ahorros}
        </p>
      </div>
    </div>
  );
}
