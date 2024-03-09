interface Props {
  images: Array<string>;
}

const ImageGallery = ({ images }: Props) => {
  return (
    <div className="image-container grid sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-5 sm:mt-20">
      {images.map((image) => {
        return (
          <img
            src={image}
            key={image}
            className="rounded-lg w-full h-64 object-cover cursor-zoom-in"
          />
        );
      })}
    </div>
  );
};

export default ImageGallery;
