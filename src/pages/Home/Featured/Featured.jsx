import React from "react";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import featuredImg from "../../../assets/home/featured.jpg";
import "../Featured/Featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured-item md:h-screen bg-center bg-cover bg-no-repeat md:relative my-10 bg-fixed">
      <div className="md:absolute top-0 left-0 w-full h-full bg-[#00000080] text-white  flex justify-center items-center flex-col md:gap-10 gap-4 py-10">
        <SectionTittle
          subHeading={"---Check It Out---"}
          heading={"From Our Menu"}
        ></SectionTittle>

        <div className="lg:w-3/4 w-full flex md:flex-row flex-col justify-center items-center gap-4 px-4">
          <img className="md:w-[45%] w-full" src={featuredImg} alt="" />
          <div className="lg:space-y-3 space-y-2">
            <h3 className="lg:text-2xl text-xl">March 20, 2023</h3>
            <h3 className="lg:text-2xl text-xl">WHERE CAN I GET SOME?</h3>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
