import DisplaySection from "./DisplaySection";
import HeroCarousel from "./HeroCarousel";
const HomeSection = ({setData}) => {
  
  // Filter for recommended products
  const recommendedProducts = setData.flatMap(category =>
    category.subCategories.flatMap(subCategory =>
      subCategory.products.filter(product => {
        return product.section === "recommended";
      })
    )
  );

  // Filter for most sold products
  const mostSoldProducts = setData.flatMap(category =>
    category.subCategories.flatMap(subCategory =>
      subCategory.products.filter(product => {
        return product.section === "highest-selling";
      })
    )
  );

  // Filter for special offers
  const specialOffer = setData.flatMap(category =>
    category.subCategories.flatMap(subCategory =>
      subCategory.products.filter(product => {
        return product.section === "special-offer";
      })
    )
  );

  console.log("Recommended Products:", recommendedProducts);
  console.log("Most Sold Products:", mostSoldProducts);
  console.log("Special Offers:", specialOffer);

  return (
    <div>
      <HeroCarousel />
<div className="space-y-8 mt-8 mx-4 lg:mx-12">
      <DisplaySection title="Recommended for you" productData={recommendedProducts}/>
      <DisplaySection title="Special Offer" productData={specialOffer}/>
      <DisplaySection title="Most Sold Watches" productData={mostSoldProducts}/>
      </div>
    </div>
  );
};

export default HomeSection;
