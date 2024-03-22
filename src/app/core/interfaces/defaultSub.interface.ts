export interface IDefaultSub {
  id: number;
  name: string;
  logo: string;
  slug: string;
  colorId: number;
  color: Color;
}

interface Color {
  id: number;
  name: string;
}

export enum Colores {
  amarillo = 'amarillo',
  rojo = 'rojo',
  azul = 'azul',
  verde = 'verde',
  rosa = 'rosa',
  gris = 'gris',
  morado = 'morado',
  naranja = 'naranja',
}
