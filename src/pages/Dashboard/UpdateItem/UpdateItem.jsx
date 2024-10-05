import React from "react";
import { FaUtensils } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  //   console.log(name);

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    // image upload an imgBB and than get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    if (res.data.success) {
      // now send the menu item data to the server with image url
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      //   console.log(menuRes);
      //   console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <>
      <SectionTittle
        heading={"ADD AN ITEM"}
        subHeading={"What's New?"}
      ></SectionTittle>
      <div className="shadow-2xl mx-32 p-11">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                defaultValue={name}
                {...register("name", { required: true })}
                type="text"
                placeholder="Recipe Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="flex gap-6">
            {/* category */}
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Recipe Category*</span>
                </div>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value={"default"}>
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                  <option value="offered">Offered</option>
                  <option value="popular">Popular</option>
                </select>
              </label>
            </div>
            {/* price */}
            <div className="w-1/2">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  defaultValue={price}
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                placeholder="Recipe Details"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </label>
          </div>
          <div className="my-4">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">
            {" "}
            <FaUtensils></FaUtensils> Update Recipe
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateItem;
