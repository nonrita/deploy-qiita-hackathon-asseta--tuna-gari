import { IoBookmark } from "react-icons/io5";
import TestImg from "../images/scroll-img.jpeg";

const Generate = () => {
  return (
    <main className=" w-full py-8 min-h-screen bg-indigo-950">
      <h1 className=" w-11/12 lg:w-4/5 pb-2 mt-12 lg:mt-0 mx-auto text-xl lg:text-4xl font-semibold text-white border-b-4 border-white">
        アイデア生成
      </h1>

      <section className=" w-11/12 lg:w-4/5 mt-8 mx-auto flex flex-col items-center">
        <button className=" w-fit px-6 py-4 my-2 rounded-lg text-lg lg:text-3xl font-bold text-indigo-950 bg-white">
          ランダム生成
        </button>

        <div className=" min-h-96 p-4 m-2 mt-8 rounded-xl bg-indigo-900 text-sm lg:text-xl flex flex-col gap-4">
          <div className=" w-fit h-fit p-4 bg-indigo-950 rounded-xl flex flex-col lg:flex-row gap-2">
            <div className=" w-full lg:w-1/3 p-2 rounded-xl border-4 border-white grid grid-cols-2 grid-rows-2 gap-2 aspect-square">
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
            </div>
            <div className=" w-full lg:w-2/3 col-span-5 aspect-square lg:aspect-[2/1] border-4 rounded-xl border-white  grid lg:grid-rows-7">
              <div className=" row-span-1 text-white flex flex-row items-center justify-around">
                <div className=" flex flex-col lg:flex-row lg:gap-8">
                  <p className=" text-base lg:text-xl font-bold">
                    単語１ : <span className="text-sm lg:text-lg">ツナ</span>
                  </p>
                  <p className=" text-base lg:text-xl font-bold">
                    単語２ : <span className="text-sm lg:text-lg">ガリ</span>
                  </p>
                </div>
                <div className="">
                  <IoBookmark
                    className={` size-8 ${false ? "text-red-500" : "text-gray-400"} `}
                  />
                </div>
              </div>
              <textarea
                name=""
                id=""
                className=" p-2 row-span-6"
                placeholder="メモしてね！"
              ></textarea>
            </div>
          </div>

          <div className=" w-fit h-fit p-4 bg-indigo-950 rounded-xl flex flex-col lg:flex-row gap-2">
            <div className=" w-full lg:w-1/3 p-2 rounded-xl border-4 border-white grid grid-cols-2 grid-rows-2 gap-2 aspect-square">
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
              <img src={TestImg} alt="" className=" col-span-1 row-span-1" />
            </div>
            <div className=" w-full lg:w-2/3 col-span-5 aspect-square lg:aspect-[2/1] border-4 rounded-xl border-white  grid lg:grid-rows-7">
              <div className=" row-span-1 text-white flex flex-row items-center justify-around">
                <div className=" flex flex-col lg:flex-row lg:gap-8">
                  <p className=" text-base lg:text-xl font-bold">
                    単語１ : <span className="text-sm lg:text-lg">ツナ</span>
                  </p>
                  <p className=" text-base lg:text-xl font-bold">
                    単語２ : <span className="text-sm lg:text-lg">ガリ</span>
                  </p>
                </div>
                <div className="">
                  <IoBookmark
                    className={` size-8 ${false ? "text-red-500" : "text-gray-400"} `}
                  />
                </div>
              </div>
              <textarea
                name=""
                id=""
                className=" p-2 row-span-6"
                placeholder="メモしてね！"
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Generate;
