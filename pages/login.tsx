/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout/layout";
import Router from "next/router";
import React, { useState } from "react";
import axios from "../utils/customAxiosUtil";

export default function login() {
  function page() {
    Router.push("/signup");
  }
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangid = (e: { target: { value: any } }) => {
    const currentid = e.target.value;
    setId(currentid);
  };
  const onChangepassward = (e: { target: { value: any } }) => {
    const currentpassward = e.target.value;
    setPassword(currentpassward);
  };

  const loginfrm = () => {
    // const data = await axios.post("/singup");
    axios
      .post("/api/acnt/cstmr/signin", {
        id: id,
        password: password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="flex justify-center my-20">
        <div className="flex flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%]  m-2">
          <div className=" w-full md:w-3/4">
            <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0 py-4">
              <h1 className="font-semibold text-xl md:text-5xl text-gray-600 m-2">
                로그인
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center m-2 space-y-6 md:space-y-8">
              <div className="">
                <input
                  type="text"
                  placeholder="id"
                  className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
                  defaultValue={id}
                  onChange={onChangid}
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
            <div className=" flex flex-col justify-center items-center dtext-center mt-7 ">
              <button
                onClick={loginfrm}
                className="px-24 md:px-[118px] lg:w-[340px]	 lg:px-[140px] py-2 rounded-md text-white bg-gradient-to-l bg-blue-500 to-emerald-400  font-medium m-2 mb-6 "
              >
                로그인
              </button>
              <button
                onClick={page}
                className="  px-24 md:px-[118px] lg:w-[340px]  py-2 rounded-md text-white bg-gradient-to-l bg-blue-500 to-emerald-400  font-medium m-2 mb-6 "
              >
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
