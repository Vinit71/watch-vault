import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200 p-2">
      <Link to="/"><img src="" alt="Logo" /></Link>
      <div className="flex space-x-4">
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <Link to="/mens">Kids</Link>
        <Link to="/mens">Smart Watches</Link>
      </div>
      <div className="hidden sm:block">
        <Link>Contact Us</Link>
      </div>
    </div>
  );
};

export default Header;
