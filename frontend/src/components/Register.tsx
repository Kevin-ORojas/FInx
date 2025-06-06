import { useState } from "react";
import type { Usuario } from "../interfaces/usuario";

export default function Register() {
  const [formDate, setFormDate] = useState<Usuario>({
    nombre: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // const { nombre, email, password } = formDate;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDate({
      ...formDate,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      console.log("Formulario enviado", formDate);
      setIsSubmitted(false);
    }, 2000);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Pruebas</label>
          <input type="text" name="name" id="name" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="">Pruebas</label>
          <input type="email" name="email" id="email" onChange={onChange} />
        </div>
        <div>
          <label htmlFor="">Pruebas</label>
          <input
            type="password"
            name="password"
            id="password"
            onSubmit={onChange}
          />
        </div>

        <button type="submit" disabled={isSubmitted}>
          {isSubmitted ? "Register" : "Login"}{" "}
        </button>
      </form>
    </div>
  );
}
