import Layout from "@/components/Layout/layout";

export default function signup() {
  return (
    <Layout>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center max-w-7xl w-[90%]">
          <div className="flex flex-col justify-center text-center space-y-3 my-9">
            <h1 className="text-xl md:text-2xl font-semibold">회원가입</h1>
            <p className="text-gray-600">
              Our team is happy to answer your sales questions. Fill out the
              form and we will be in touch as soon as possible.
            </p>
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
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>이메일</h1>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>전화번호</h1>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>비밀번호</h1>
                <input
                  type="passward"
                  name="passward"
                  id="passward"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>비밀번호 확인</h1>
                <input
                  type="passward"
                  name="passwardok"
                  id="passwardok"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>성별</h1>
                <select
                  name="sex"
                  className="bg-slate-100 rounded-lg px-2 py-1 w-[80%] lg:w-[60%] placeholder:text-gray-300 focus:border focus:outline-none focus:border-blue-500"
                  id="sex"
                >
                  <option value="0" label="" selected="selected"></option>
                  <option value="Afghanistan">남자</option>
                  <option value="Albania">여자</option>
                </select>
              </div>
              <div className="flex flex-col justify-between lg:flex-row space-y-1 lg:space-y-0">
                <h1>주소</h1>
                <textarea
                  name="adress"
                  id="adress"
                  cols="10"
                  rows="3"
                  className="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-300 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <div className="text-center md:text-left lg:text-right">
                <button className="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600">
                  Contact Sales
                </button>
              </div>
            </div>
            <div className="text-gray-800  px-4 py-2 lg:px-7 lg:py-4  flex flex-col md:w-full space-y-3  mb-5 lg:mb-0">
              <h1>With Stripe you can:</h1>
              <div className="flex">
                <input type="checkbox" className="" name="" id="" />
                <p className="text-justify ml-4">
                  Focus critical developer resources on your core business
                </p>
              </div>
              <div className="flex">
                <input type="checkbox" className="" name="" id="" />
                <p className="text-justify ml-4">
                  Launch new products faster with less payments code.
                </p>
              </div>
              <div className="flex">
                <input type="checkbox" className="" name="" id="" />
                <p className="text-justify ml-4">
                  Improve conversion from international customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
