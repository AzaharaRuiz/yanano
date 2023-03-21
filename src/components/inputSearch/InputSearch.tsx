import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface InputSearchProps {
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function InputSearch({
  onChange,
  placeholder = "Buscar",
}: InputSearchProps) {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    return onChange(e.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input placeholder={placeholder} onChange={handleOnChange} />
    </InputGroup>
  );
}
