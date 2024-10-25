import { Link } from "react-router-dom";
import Card from "./Card";
import { useRef } from "react";

const DisplaySection = ({ title, productData }) => {
  console.log(`Displaying Section: ${title}`, productData);
  const scrollRef = useRef(null);
  // console.log("PRdata",productData);
  
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="mb-8 relative">
      <h1 className="text-left font-thin text-2xl mb-4">{title}</h1>
      
      <div
        className="flex gap-4 pb-4 overflow-x-auto whitespace-nowrap scroll-hidden"
        ref={scrollRef}
      >
        {productData.map((product, index) => (
          <Link to={`/productDetails/${product.id}`} className="inline-block w-[250px]" key={index}>
            <Card cardData={product} />
          </Link>
        ))}
      </div>
      

      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
        onClick={scrollRight}
      >
        ➡️
      </button>
    </div>
  );
};

export default DisplaySection;
