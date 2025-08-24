export interface IProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: { filePath: string; alt?: string };
}

export interface IProductView {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: { filePath: string; alt?: string };
}
