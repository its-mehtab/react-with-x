import { Link } from "react-router-dom";

const Header = function () {
  return (
    <>
      <header>
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div className="flex">
            <div>
              <a href="" className="font-bold text-3xl">
                MEHTAB
              </a>
            </div>
            <ul className="flex gap-8 ml-auto text-lg font-medium">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              <li>
                <Link to="features">Features</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
