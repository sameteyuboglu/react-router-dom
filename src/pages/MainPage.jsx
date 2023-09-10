import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="d-flex flex-column align-items-center gap-5 my-5">
      <h1 className="text-center">Welcome</h1>

      <Link to="/products">Products</Link>
      <p className="lead">You can access all new books</p>
    </div>
  );
}

export default MainPage;
