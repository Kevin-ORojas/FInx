import { useState } from "react";
import type { Usuario } from "../interfaces/usuario";
import { crearUsuario } from "../api/UsersApi";

export default function Register() {
  const [formDate, setFormDate] = useState<Usuario>({
    nombre: "",
    email: "",
    passwordHash: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mensaje, setMensaje] = useState("");
  // const { nombre, email, password } = formDate;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate({
      ...formDate,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const res = await crearUsuario(formDate);
      setMensaje(`Usuario creado: ${res.nombre}`);
      setFormDate({ nombre: "", email: "", passwordHash: "" });
      console.log(mensaje);
    } catch (error) {
      console.error("Error al registrar usuario", error);
      setMensaje("❌ No se pudo crear el usuario.");
    }
    setIsSubmitted(false);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#363636]">
      <form
        className="min-w-1/2 ml-15 w-[350px] sm:min-w-1/2 md:min-w-1/3 rounded-2xl shadow-2xl  bg-[#ECECEC]"
        onSubmit={onSubmit}
      >
        <p className="text-center mt-4">Register</p>
        <div className="flex flex-col justify-center items-center mt-10 px-4 py-8  ">
          <div className="mb-4 flex flex-col text-center mt-4 w-full ">
            <input
              className="rounded-md border-none py-3 border-amber-700 p-3 "
              placeholder="Name.."
              type="text"
              name="name"
              id="name"
              onChange={onChange}
            />
          </div>
          <div className="mb-4 flex flex-col text-center mt-4 w-full ">
            <input
              className="rounded-md border-none py-3 border-amber-700 p-3"
              placeholder="Email..."
              type="email"
              name="email"
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="mb-4 flex flex-col text-center mt-4 w-full ">
            <input
              className="rounded-md border-none py-3 border-amber-700 p-3"
              placeholder="Password..."
              type="password"
              name="password"
              id="password"
              onSubmit={onChange}
            />
          </div>
          <button
            className="bg-blue-400 px-10 py-4 md:px-16 rounded-md hover:cursor-pointer hover:bg-blue-500"
            type="submit"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Register" : "Login"}{" "}
          </button>
          <p className="mt-4">{"Haz olvidado tu contraseña"}</p>
        </div>
      </form>
    </div>
  );
}
