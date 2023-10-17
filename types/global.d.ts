export type BrandsProps = {
  brands: BrandProps[];
};

export type BrandProps = {
  id: string;
  name: string;
  country: string;
  logo: Buffer;
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

export type TracksProps = {
  tracks: TrackProps[];
};

export type TrackProps = {
  id: string;
  name: string;
  shortName: string;
  country: string;
  extension: string;
};

export type ImageProps = {
  buffer: ArrayBuffer;
  type: string;
  brandId: string;
};

export type LoginProps = {
  email: string;
  password: string;
};
