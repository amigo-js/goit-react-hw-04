import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id} className={css.item}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() =>
              onImageClick({
                regular: image.urls.regular,
                alt: image.alt_description,
                likes: image.likes,
                user: image.user,
              })
            }
          />
        </li>
      ))}
    </ul>
  );
}
