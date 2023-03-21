import Slider from "react-slick";
import Card from "../card/Card";
import { type Product } from "../../../config/product";
import useCart from "../../libs/hooks/useAddToCart";

interface CarouselProps {
  products: Product[];
}

const settings = {
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Carousel({ products }: CarouselProps) {
  const { addToCart } = useCart();

  return (
    <Slider {...settings}>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCart={() =>
            addToCart({ id: product.id, title: product.title, units: 1 })
          }
        />
      ))}
    </Slider>
  );
}
