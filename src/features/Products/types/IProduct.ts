export interface IProductDto {
  content: {
    _uid: string;
    name: string;
    description: string;
    price: number;
    image?: { filename: string; alt?: string };
  };
}

export interface IProductView {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: { filePath: string; alt?: string };
}
