/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function Haooter() {
  return (
    <>
      <div className="">
        <nav className=" w-full ">
          <div className="flex    items-center justify-between ">
            <Link
              href="/"
              className="flex items-center pl-10 justify-center text-2xl"
            >
              <div className="flex title-font font-medium items-center text-gaaAray-900 mb-4 md:mb-0 inline-block pr-3">
                <img src={"./team.png"} style={{ width: "60px" }}></img>
              </div>
              CLUB SOCCER
            </Link>

            <ul className="hidden lg:flex items-center text-[18px] font-semibold ">
              <li className="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="#">검색</Link>
              </li>
              <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link href="/login">로그인</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
