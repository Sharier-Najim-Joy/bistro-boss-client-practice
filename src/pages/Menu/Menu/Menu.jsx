import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>BISTRO | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      <SectionTittle
        heading={"Do not miss"}
        subHeading={"TODAY'S OFFER"}
      ></SectionTittle>
      <MenuCategory item={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory
        item={dessert}
        img={dessertImg}
        title={"dessert"}
      ></MenuCategory>
      {/* salad */}
      <MenuCategory item={salad} img={saladImg} title={"salad"}></MenuCategory>
      {/* soup */}
      <MenuCategory item={soup} img={soupImg} title={"soup"}></MenuCategory>
      {/* pizza */}
      <MenuCategory item={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
      {/* drinks */}
      <MenuCategory
        item={drinks}
        img={pizzaImg}
        title={"drinks"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
