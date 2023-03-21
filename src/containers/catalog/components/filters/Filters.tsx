import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import InputSearch from "../../../../components/inputSearch/InputSearch";
import { CatalogFilters } from "../../useCatalog";
import styles from "./Filter.module.css";

interface FiltersProps {
  onChangeFilters: (key: keyof CatalogFilters, value: string) => void;
  sort: string;
}

export default function Filters({ sort, onChangeFilters }: FiltersProps) {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={() => {
          sort === "asc"
            ? onChangeFilters("sort", "desc")
            : onChangeFilters("sort", "asc");
        }}
      >
        Ordenar
        {sort === "asc" ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </button>
      <div className="search">
        <InputSearch onChange={(value) => onChangeFilters("search", value)} />
      </div>
    </div>
  );
}
