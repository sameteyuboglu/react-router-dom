import { useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();
  return (
    <div style={{ height: "80vh" }} className="container my-5">
      <div className="align-items-center justify-content-center">
        <img
          src="https://www.drishtiias.com/hindi/drishti/img/error.png"
          className="rounded img-fluid  mx-auto d-block "
        />
      </div>
      <div>
        {state ? <p className="text-center fs-4 my-4 bg-danger">Error Code : {state}</p> : ""}

        <p className="text-center fs-4 my-4">Sorry, page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
