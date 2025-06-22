import axios from "axios";
import type { Usuario } from "../interfaces/usuario";


const API_URL = "http://localhost:5262/api/user";

export const crearUsuario = async (usuario: Usuario) => {
  try {
    const res = await axios.post<Usuario>(API_URL, usuario);
    return res.data;

    console.log("Usuario creado", res.data);
  } catch (error) {
    console.error("error al crear usuario", error);
  }
};

export const obtenerUsuarioId = async (id: number) => {
  try {
    const res = await axios.get<Usuario>(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("error al obtener un usuario", error);
  }
};

export const obtenerUsuarios = async () => {
  try {
    const res = await axios.get<Usuario[]>(API_URL);
    return res.data;
  } catch (error) {
    console.error("el usuario no se obtiene", error);
  }
};
