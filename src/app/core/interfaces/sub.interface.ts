export interface ISub {
  id: number;
  nombre: string;
  precio: number;
  logo: string;
  color: Color;
  vencimiento: string;
  // estado: string;
  usuario: string;
  password: string;
}

interface Color {
  id: number;
  name: string;
}
