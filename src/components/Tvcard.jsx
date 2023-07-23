import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export function Tvcard({ id, image, name }) {
  return (
    <Link to={`/tvshow/${id}`}>
        <Image src={image.origanal} alt={name} className='tvcard' />
        <p className='text-black text-center fs-5'>{name}</p>
    </Link>
  );
}

export function TvcardB({ id, image, name }) {
  return (
    <Link to={`/tvshow/${id}`}>
        <Image src={image.origanal} alt={name} className='tvcardB' />
    </Link>
  );
}

