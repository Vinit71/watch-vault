import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // arrows: true,
      };
      return (
        <div className="w-full overflow-hidden bg-gray-600">
          
            <Slider {...settings}>
              <div className="flex justify-center items-center">
                <img
                  className="h-[170px] lg:h-[500px] object-cover w-full"
                  src="https://res.cloudinary.com/dnfhbsbvp/image/upload/v1728058606/carousel2_ppor4f.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="h-[170px] lg:h-[500px] object-cover w-full"
                  src="https://res.cloudinary.com/dnfhbsbvp/image/upload/v1728059397/carousel1_pgqrn5.jpg"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="h-[170px] lg:h-[500px] object-cover w-full"
                  src="https://res.cloudinary.com/dnfhbsbvp/image/upload/v1728058609/carousel3_myi9vk.jpg"
                  alt=""
                />
              </div>
            </Slider>
            {/* <h1>Home section</h1> */}
          </div>
      );
}

export default HeroCarousel
