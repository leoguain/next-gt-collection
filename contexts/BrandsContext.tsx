import axios from "axios";
import { ReactNode, createContext, useContext, useState } from "react";
import { BrandProps } from "types/global";

type BrandContextProps = {
  children: ReactNode;
};

type BrandContextType = {
  brandsList: BrandProps[];
  setBrandsList: (newState: BrandProps[]) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  fetchBrands: () => void;
};

const initialValue = {
  brandsList: [],
  setBrandsList: () => {},
  isLoading: false,
  setIsLoading: () => {},
  fetchBrands: () => {},
};

export const BrandContext = createContext<BrandContextType>(initialValue);

export const useBrands = () => {
  return useContext(BrandContext);
};

export const BrandContextProvider = ({ children }: BrandContextProps) => {
  const [brandsList, setBrandsList] = useState<BrandProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBrands = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/api/brands");
      setBrandsList(res.data.brands);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  return (
    <BrandContext.Provider
      value={{
        brandsList,
        setBrandsList,
        isLoading,
        setIsLoading,
        fetchBrands,
      }}
    >
      {children}
    </BrandContext.Provider>
  );
};
