/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout/layout";
import Router from "next/router";
import React, { useState } from "react";
import axios from "../utils/customAxiosUtil";

export default function login() {
  function page() {
    Router.push("/signup");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeemail = (e: { target: { value: any } }) => {
    const currentemail = e.target.value;
    setEmail(currentemail);
  };
  const onChangepassward = (e: { target: { value: any } }) => {
    const currentpassward = e.target.value;
    setPassword(currentpassward);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
          <div className=" w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">
                Login to your account
              </h1>
              <h1 className="text-sm font-medium text-gray-600 m-2">
                Login using Social accounts
              </h1>
              <div className="text-lg lg:text-xl text-center space-x-5 m-2">
                <a href="#">
                  <i className="fa-brands fa-facebook-f text-white  bg-blue-500 rounded-full px-[14px] py-[10px] "></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter text-white bg-cyan-400  rounded-full px-[10px] py-[10px] "></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-google-plus-g text-white bg-red-500 rounded-full px-[10px] py-[10px] "></i>
                </a>
              </div>
              <h1 className="text-sm font-medium text-gray-600 m-2">OR</h1>
            </div>
            <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="email"
                  placeholder="email"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  defaultValue={email}
                  onChange={onChangeemail}
                />
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Password"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  defaultValue={password}
                  onChange={onChangepassward}
                />
              </div>
            </div>
            <div className=" text-center mt-7 ">
              <button className="px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400  font-medium m-2 mb-6 ">
                Sign In
              </button>
              <button
                onClick={page}
                className="flex justify-center items-end  px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l from-blue-400 to-emerald-400  font-medium m-2 mb-6 "
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
