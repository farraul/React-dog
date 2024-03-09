import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  src: string;
}

export const LazyImage = ({ src }: Props) => {
  return (
    <LazyLoadImage
      src={src}
      className="h-64 object-cover rounded-lg w-full cursor-zoom-in"
    />
  );
};

export default LazyImage;
