import React from "react";

export default function Haooter() {
  return (
    <>
      <div className="">
        <nav className=" w-full ">
          <div className="flex   bg-stone-500 items-center justify-between ">
            <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
              CLUB SOCCER
            </h1>

            <ul className="hidden lg:flex items-center text-[18px] font-semibold ">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="#">검색</a>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <a href="/login">로그인</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
