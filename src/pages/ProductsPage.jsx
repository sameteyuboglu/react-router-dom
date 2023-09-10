/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

function ProductsPage({ category }) {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams("");

  //catch url params
  const order = searchParams.get("sort");

  useEffect(() => {
    const options = {
      params: {
        _sort: "title",
        _order: order === "a-Z" ? "asc" : "desc",
        category: category,
      },
    };
    axios.get(`http://localhost:3090/books`, options).then((res) => {
      setBooks(res.data);
    });
  }, [order]);
  const sortBy = (e) => {
    setSearchParams({ sort: e.target.value });
  };
  return (
    <>
      {!books && <div className="text-center my-5">Loading</div>}
      <div className="container-fluid">
        <h3 className="mx-5 mt-3">{books?.length} record found</h3>
        <div className="p-5">
          <label htmlFor="">Sort By</label>
          <select onChange={sortBy}>
            <option hidden>Select</option>
            <option>a-Z</option>
            <option>z-a</option>
          </select>
        </div>

        <div className="card-container">
          {books?.map((x, i) => (
            <Card key={i} book={x} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
