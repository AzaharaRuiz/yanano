import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Image } from "@chakra-ui/react";
import Button from "../button/Button";
import { type Product } from "../../../config/product";

export const VARIANTS = {
  cream: "cream",
  white: "white",
} as const;

export type VariantsType = keyof typeof VARIANTS;

interface CardProps {
  product: Product;
  variant?: VariantsType;
  addToCart?: () => void;
}

export default function Card({
  product,
  addToCart = () => {},
  variant = "cream",
}: CardProps) {
  return (
    <Box
      borderRadius="1.5rem"
      overflow="hidden"
      margin="30px"
      padding="20px"
      backgroundColor={variant === "cream" ? "#f6f4e8" : "white"}
      width={400}
      minWidth={300}
      height={470}
      borderBottom={
        variant === "cream" ? "1px solid transparent" : "1px solid gray"
      }
    >
      <Image
        borderRadius="1rem"
        objectFit="contain"
        src={product.image}
        alt={product.title}
        boxSize="sm"
        maxWidth="100%"
        minWidth="100%"
        height={220}
        backgroundColor="white"
      />

      <Box p="6">
        {product.category === "jewelery" && (
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>
        )}

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          maxWidth={"90%"}
          noOfLines={2}
        >
          {product.title}
        </Box>

        <Box>{`${product.price}€`}</Box>

        <Box display="flex" mt="2" alignItems="center" marginBottom={6}>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating.rate ? "teal.500" : "gray.300"}
              />
            ))}

          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {product.rating.count} reseñas
          </Box>
        </Box>
        <Button isFullWidth variant="blue" onClick={addToCart}>
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
}
