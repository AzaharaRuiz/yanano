import { useEffect, useState } from "react";
import { type Product } from "../../../config/product";

export type CatalogFilters = {
  sort: string;
  search: string;
};

export default function useCatalog() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<CatalogFilters>({
    sort: "desc",
    search: "",
  });
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      setIsLoading(true);
      const res = await fetch(
        `https://fakestoreapi.com/products/category/jewelery?sort=${filters.sort}`
      );
      const items = await res.json();
      setNewProducts(items);
      setIsLoading(false);
    })();

    (async (): Promise<void> => {
      setIsLoading(true);
      const res = await fetch(
        `https://fakestoreapi.com/products/?sort=${filters.sort}`
      );
      const items = await res.json();
      setProducts(
        items.filter(({ title }: { title: string }) =>
          title.toLowerCase().includes(filters.search.toLowerCase())
        )
      );
      setIsLoading(false);
    })();
  }, [filters]);

  const handleUpdateFilters = (
    key: keyof CatalogFilters,
    value: string
  ): void => {
    setFilters((prevState) => ({ ...prevState, [key]: value }));
  };

  return {
    state: {
      isLoading,
      newProducts,
      products,
      filters,
    },
    actions: {
      setProducts,
      handleUpdateFilters,
    },
  };
}
