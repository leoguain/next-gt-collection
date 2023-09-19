export type BrandsProps = {
  brands: BrandProps[];
};

export type BrandProps = {
  id: string;
  name: string;
};

export interface IFile {
  url: string;
  name: string;
}
