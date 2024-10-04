import React from "react";
import useCart from "../../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTittle from "../../../components/SectionTittle/SectionTittle";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <SectionTittle
        heading={"My Carts"}
        subHeading={"WANNA ADD MORE?"}
      ></SectionTittle>
      <div className="shadow-2xl mx-32 p-11">
        <div className="flex justify-between">
          <h2 className="text-4xl">Total Orders: {cart.length}</h2>
          <h2 className="text-4xl">Total Price: {totalPrice}</h2>
          {cart.length ? (
            <Link to={"/dashboard/payment"}>
              <button className="btn text-4xl">Pay</button>
            </Link>
          ) : (
            <button disabled className="btn text-4xl">
              Pay
            </button>
          )}
        </div>
        <div className="overflow-x-auto my-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <MdDeleteForever className="text-red-600 size-10" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
