export interface ProductDetails {
  display?: string;
  frequency?: string;
  weight?: string;
  security?: string;
  diagonal?: string;
}

export interface ProductType {
  id: number;
  img: string;
  title: string;
  params?: {
    id: string;
  };
  price?: string;
  brand?: string;
  color?: string;
  ram?: string;
  rame?: string;
  geForce?: string;
  core?: string;
  display?: string;
  memory?: string;
  weight?: string;
  frequency?: string;
  security?: string;
  diagonal?: string;
  details?: ProductDetails;
}
export interface ProductCardProps {
  id: number;
  title: string;
  img: string;
  price?: string;
  brand?: string;
  onClick?: () => void;
}
