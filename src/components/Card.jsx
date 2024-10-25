const Card = ({ cardData }) => {
  // console.log(cardData);
  let category = null;
  if(cardData.id<=10){
    category = "Men's Watch"
  }else if(cardData.id<=20){
    category = "Women's Watch"
  }else{
    category = "Kids Watch"
  }
  return (
    <div className="w-52 h-80 bg-gray-300 border rounded-lg">
      {/* Image */}
      <img
        className="w-full h-auto object-cover rounded-md"
        src="https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3df0c06c/images/Fastrack/Catalog/3286KM01_1.jpg?sw=600&sh=600"
        alt={cardData.name}
      />
      <div className="text-left">
      <h1 className="mt-2 font-semibold break-words whitespace-normal">{cardData.name}</h1>
      
      <h3 className="">{category}</h3>
      <h3 className="text-sm font-semibold">₹ {Math.floor(cardData.price)}</h3>
      </div>
    </div>
  );
};

export default Card;
