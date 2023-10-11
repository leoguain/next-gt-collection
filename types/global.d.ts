export type BrandsProps = {
  brands: BrandProps[];
};

export type BrandProps = {
  id: string;
  name: string;
};

export type CarsProps = {
  cars: CarProps[];
};

export type CarProps = {
  id?: string;
  model: string;
  year: string;
  price: number;
  brandId: string;
  drivetrain: string;
  power: number;
  weight: number;
  aspiration: string;
};
export interface IFile {
  url: string;
  name: string;
}

export type LoginProps = {
  email: string;
  password: string;
};
