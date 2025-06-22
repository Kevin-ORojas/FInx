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
        className="w-full h-auto sm:w-90 sm:h-1/2 md:w-1/2 lg:w-1/3 rounded-2xl shadow-2xl shadow- bg-[#ECECEC]"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col justify-center items-center mt-10 px-4 py-8 ">
          <div className="mb-4 border-1 flex flex-col text-center mt-4  ">
            <input
              placeholder="Name.."
              type="text"
              name="name"
              id="name"
              onChange={onChange}
            />
          </div>
          <div className="mb-4 border-1 flex flex-col text-center mt-4 ">
            <input
              placeholder="Email..."
              type="email"
              name="email"
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="mb-4 border-1 flex flex-col text-center mt-4  ">
            <input
              placeholder="Password..."
              type="password"
              name="password"
              id="password"
              onSubmit={onChange}
            />
          </div>
          <button type="submit" disabled={isSubmitted}>
            {isSubmitted ? "Register" : "Login"}{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
