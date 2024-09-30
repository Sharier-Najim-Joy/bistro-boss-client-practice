import React, { useEffect, useRef, useState } from "react";

import loginImg from "../../assets/others/authentication1.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo)
          .then(() => {
            const userInfo = {
              name: name,
              email: email,
            };
            // create user entry in database
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                form.reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User Created Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>BISTRO | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <img src={loginImg} alt="" />
          </div>
          <div
            onSubmit={handleSignUp}
            className="card bg-base-100 w-1/2 shadow-2xl"
          >
            <form className="card-body">
              <h1 className="text-5xl font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label> */}
              </div>
              {/* <div className="form-control">
          <label className="label">
            <LoadCanvasTemplate />
          </label>
          <input
            ref={captchaRef}
            type="captcha"
            name="captcha"
            placeholder="Type The Captcha Above"
            className="input input-bordered"
            required
          />
          <button
            onClick={handleValidateCaptcha}
            className="btn btn-primary btn-sm"
          >
            Validation
          </button>
        </div> */}
              <div className="form-control mt-6">
                <input
                  // disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="SignUp"
                />
              </div>
              <div>
                <p>
                  Already registered?{" "}
                  <Link to={"/login"} className="text-red-500">
                    Go to log in
                  </Link>
                </p>
                <h5 className="text-center my-3">Or sign in with</h5>
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
