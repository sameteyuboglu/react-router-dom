import { useEffect } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ book }) => {
  useEffect(() => {
    
  }, []);
  return (
    <>
      <div key={book.id} className="card shadow rounded p-1">
        <img className="rounded" src={book.image} alt={book.title} />
        <div className="card-body">
          <h4>{book.title}</h4>
          <p>{book.author}</p>
          <Link to={`/products/detail/${book.id}`} className="btn btn-primary w-100">Detail
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
