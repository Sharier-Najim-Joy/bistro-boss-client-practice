import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testemonials from "../Testemonials/Testemonials";
import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";
import Loading from "../../../components/Loading/Loading";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Featured></Featured>
      <Testemonials></Testemonials>
    </div>
  );
};

export default Home;
