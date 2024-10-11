import { Link } from "react-router-dom";

const Header = function () {
  return (
    <>
      <div className="flex">
        <div>
          <a href="#" className="font-bold text-3xl">
            Mehtab
          </a>
        </div>
        <ul className="flex ml-auto gap-8 text-lg font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
