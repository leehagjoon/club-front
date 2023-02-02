/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout/layout";
import axios from "../utils/customAxiosUtil";
import router from "next/router";
import Router from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DaumPostcode from "react-daum-postcode";

export default function signup() {
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formation, setFormation] = useState("");
  const [adress, setadress] = useState("");
  const [Zipcode, setZipcode] = useState("");

  //아이디 중복 체크
  const [idcheckval, setidcheckval] = useState(false);
  //다음 주소 state
  const [openPostcode, setOpenPostcode] = React.useState<boolean>(false);

  const onChangename = (e: { target: { value: any } }) => {
    const currentname = e.target.value;
    setName(currentname);
  };
  const onChangeemail = (e: { target: { value: any } }) => {
    const currentemail = e.target.value;
    setEmail(currentemail);
  };
  const onChangepassward = (e: { target: { value: any } }) => {
    const currentpassward = e.target.value;
    setPassword(currentpassward);
  };
  const onChangegender = (e: { target: { value: any } }) => {
    const currentgender = e.target.value;
    setGender(currentgender);
  };
  const onChangephone = (e: { target: { value: any } }) => {
    const currentphone = e.target.value;
    setPhone(currentphone);
  };
  const onChangeformation = (e: { target: { value: any } }) => {
    const currentformation = e.target.value;
    setFormation(currentformation);
  };
  const onChangepasswordConfirm = (e: { target: { value: any } }) => {
    const currentpasswordConfirm = e.target.value;
    setPasswordConfirm(currentpasswordConfirm);
  };
  const onChangeid = (e: { target: { value: any } }) => {
    const currentid = e.target.value;
    setId(currentid);
  };

  const ok = () => {
    console.log("아아아아아아아아아아아아아아아");
    if (password == passwordConfirm) {
      // const data = await axios.post("/singup");
      axios
        .post("/api/acnt/cstmr/signup", {
          email: email,
          userPswd: password,
          memberName: name,
          genderCd: gender,
          hpno: phone,
          position: formation,
          addr: adress,
          userId: id,
          Zip: Zipcode,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const idcheck = () => {
    setidcheckval(true);
  };

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode((current) => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      console.log(`
            주소: ${data.address},
            우편번호: ${data.zonecode}
        `);
      setadress(data.address);
      setZipcode(data.zonecode);
      setOpenPostcode(false);
    },
  };

  return (
    <Layout>
      <div className="flex justify-center w-full my-10">
        <div className="flex flex-col justify-center items-center max-w-7xl w-[90%]">
          <div className="flex flex-col justify-center text-center space-y-3 my-9">
            <h1 className="text-xl md:text-2xl font-semibold">회원가입</h1>
          </div>
          <div className="flex flex-col justify-center lg:flex-row  items-center lg:space-x-10 xl:space-x-24 ">
            <div className=" shadow-lg  flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0 px-8 py-4 lg:px-4">
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                <h1>이름</h1>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={name}
                  onChange={onChangename}
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0 ">
                <h1>아이디</h1>
                <input
                  type="text"
                  name="id"
                  id="id"
                  className="bg-slate-100  rounded-lg px-1 py-1 placeholder:text-gray-600 w-[45%] ml-20 lg:w-[39%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={id}
                  onChange={onChangeid}
                />
                <button
                  onClick={idcheck}
                  type="submit"
                  className="bg-blue-500 disabled  my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600"
                >
                  확인
                </button>
              </div>

              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>이메일</h1>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={email}
                  onChange={onChangeemail}
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>전화번호</h1>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={phone}
                  onChange={onChangephone}
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>비밀번호</h1>
                <input
                  type="password"
                  name="password"
                  id="passward"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={password}
                  onChange={onChangepassward}
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>비밀번호 확인</h1>
                <input
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={passwordConfirm}
                  onChange={onChangepasswordConfirm}
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>성별</h1>
                <select
                  name="gender"
                  className="bg-slate-100 rounded-lg px-2 py-1 w-[80%] lg:w-[60%] placeholder:text-gray-300 focus:border focus:outline-none focus:border-blue-500"
                  id="gender"
                  defaultValue={gender}
                  onChange={onChangegender}
                >
                  <option
                    value="0"
                    label="성별을 선택해 주세요"
                    selected="selected"
                  ></option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>포지션</h1>
                <select
                  name="formation"
                  className="bg-slate-100 rounded-lg px-2 py-1 w-[80%] lg:w-[60%] placeholder:text-gray-300 focus:border focus:outline-none focus:border-blue-500"
                  id="formation"
                  defaultValue={formation}
                  onChange={onChangeformation}
                >
                  <option
                    value=""
                    label="포지션을 선택해 주세요"
                    selected="selected"
                  ></option>
                  <option value="FW">FW</option>
                  <option value="MF">MF</option>
                  <option value="DF">DF</option>
                  <option value="GK">GK</option>
                </select>
              </div>
              <div className="flex flex-col justify-end lg:flex-row space-y-1 lg:space-y-0">
                <button
                  className="bg-blue-500  my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600"
                  onClick={handle.clickButton}
                >
                  {openPostcode != false ? "닫기" : "우편번호 검색"}
                </button>
              </div>
              {openPostcode && (
                <DaumPostcode
                  className="flex flex-col "
                  onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
                  autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                  defaultQuery="" // 팝업을 열때 기본적으로 입력되는 검색어
                />
              )}
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>주소</h1>
                <input
                  type="text"
                  name="adress"
                  id="adress"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={adress}
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>우편번호</h1>
                <input
                  type="text"
                  name="Zipcode"
                  id="Zipcode"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                  defaultValue={Zipcode}
                />
              </div>
              <div className="text-center md:text-left lg:text-right">
                <button
                  onClick={ok}
                  type="submit"
                  className="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600"
                >
                  회원가입
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
