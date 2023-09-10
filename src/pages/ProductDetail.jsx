/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => navigate("/not-found", { state: err.response.status }));
  }, []);
  return (
    <>
      <div>
        {!book ? (
          <div className="text-center my-5">Loading</div>
        ) : (
          <div className="row" style={{ minHeight: "85vh" }}>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <img
                src={book.image}
                alt={book.title}
                style={{ maxHeight: "400px" }}
                className="rounded img-fluid shadow"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h1>{book.title}</h1>
              <div className="my-4">
                <p className="fs-5">
                  <span className="badge bg-danger me-3">Author</span>
                  <span>{book.author}</span>
                </p>
                <p className="fs-5">
                  <span className="badge bg-danger me-3">Year</span>
                  <span>{book.year}</span>
                </p>
                <p className="fs-5">
                  <span className="badge bg-danger me-3">Page</span>
                  <span>{book.pagesize}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
