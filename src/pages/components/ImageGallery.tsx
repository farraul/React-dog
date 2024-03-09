interface Props {
  images: Array<string>;
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  return (
    <div className="image-container grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
      {images.map((image) => {
        return (
          <img
            src={image}
            key={image}
            className="rounded-lg w-full h-auto object-cover"
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;
