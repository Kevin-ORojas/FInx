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
  const { saldoBase, ingresos, gastos, ahorros } = datosFinancieros;

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
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(valor);
  };
  return (
    <div className="grid  gap-4 p-4 min-h-screen grid-cols-[repeat(auto-fill,_minmax(300px,_2fr))] auto-rows-[1fr]">
      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer">
        <div className="mt-8">
          <input
            className="w-full py-4 mb-2 sm:mb-8 p-4 font-[lato] font-bold [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none hover:rounded-md"
            type="number"
            name="saldoBase"
            value={inputSaldo === 0 ? "" : inputSaldo}
            placeholder="ingresa tu valor"
            onChange={handleChange}
          />
          <button
            className=" w-full rounded-md font-[lato] font-bold cursor-pointer py-3 px-8 mb-2 sm:mb-8 bg-blue-400 hover:bg-blue-600"
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
            <option className="cursor-pointer" value="ahorros">
              Ahorros
            </option>
            <option className="cursor-pointer" value="gastos">
              Gastos
            </option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer flex flex-col justify-between h-full">
        <div>
          <h2 className="text-gray font-[lato] font-bold mb-2">
            Saldo Actual:
          </h2>
          <p className="text-2xl text-green-500 font-semibold">
            {formatearCOP(saldoBase)}
          </p>
        </div>

        <p className="text-right text-sm text-gray-500 hover:cursor-pointer hover:text-blue-400 font-[lato] font-semibold">
          Historial de saldos
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer flex flex-col justify-between h-full">
        <div>
          <h2 className="text-gray font-[lato] font-bold mb-2">
            Ingreso Actual:
          </h2>
          <p className="text-2xl text-red-500 font-semibold">
            {formatearCOP(ingresos)}
          </p>
        </div>

        <p className="text-right hover:cursor-pointer  hover:text-blue-400 text-sm text-gray-500 font-[lato] font-semibold">
          Historial de ingresos
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer flex flex-col justify-between h-full">
        <div>
          <h2 className="text-gray font-[lato] font-bold mb-2">
            Ahorros Actual:
          </h2>
          <p className="text-2xl text-blue-500 font-semibold">
            {formatearCOP(ahorros)}
          </p>
        </div>
        <p className="text-right text-sm text-gray-500 hover:cursor-pointer hover:text-blue-400 font-[lato] font-semibold">
          Historial de Ahorros
        </p>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg hover:scale-90 transition-transform cursor-pointer flex flex-col justify-between h-full">
        <div>
          <h2 className="text-gray font-[lato] font-bold mb-2">
            Gastos Actual:
          </h2>
          <p className="text-2xl text-yellow-500 font-semibold">
            {formatearCOP(gastos)}
          </p>
        </div>
        <p className="text-right text-sm text-gray-500 font-[lato] font-semibold hover:text-blue-500 hover:cursor-pointer">
          Historial de gastos
        </p>
      </div>
    </div>
  );
}
