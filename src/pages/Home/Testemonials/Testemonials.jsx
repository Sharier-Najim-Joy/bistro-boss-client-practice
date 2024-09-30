import React, { useEffect, useState } from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import img from "../../../assets/home/Vector.png";

const Testemonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mb-6">
      <SectionTittle
        heading={"What Our Clients Say"}
        subHeading={"TESTIMONIALS"}
      ></SectionTittle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="px-32 flex flex-col items-center text-center space-y-6">
              <div className="flex">
                <img src={img} alt="" />
                <img src={img} alt="" />
              </div>
              <Rating style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p>{item.details}</p>
              <h2 className="text-4xl">{item.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testemonials;
