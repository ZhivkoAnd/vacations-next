"use client";
import ImageGallery from "react-image-gallery";

const ImagesGallery = ({ images }) => {
  return <ImageGallery items={images} thumbnailPosition="left" />;
};

export default ImagesGallery;
