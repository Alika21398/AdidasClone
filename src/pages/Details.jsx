import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Sliders from "../components/Sliders";

function Details({showNavbar}) {
  const { cid, id } = useParams();
  // console.log("cid", id)
  const [data, setData] = useState({});
  const [cdata, setCdata] = useState([]);
  const [show, setShow] = useState(false);
  // const [swipe, setSwipe]= useState("");
  const baseUrl = "http://localhost:3000/";
  useEffect(() => {
    // console.log(`Fetching data for details: ${id}`);
    if (id)
      {
    fetch(`${baseUrl}shoes/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);

        setData(data);
      })
      .catch((error) => {
        console.log("error:", error);
      });
    }
    if (cid){
      fetch(`${baseUrl}shoes?category=${cid}`).then((res)=>{
        return res.json()
      }).then((cdata)=>{
        setCdata(cdata)
      })
      .catch((error)=>{
        console.log("ciderror", error)
      });
    }
  }, [id,cid]);


  // useEffect(() => {
  //   if (cid){
  //   fetch(`${baseUrl}shoes?category=${cid}`).then((res)=>{
  //     return res.json()
  //   }).then((cdata)=>{
  //     setCdata(cdata)
  //   })
  // }
  //   // console.log("Updated data:", data); // Debugging log to ensure data is updated
  // }, [cid]);
  console.log("cdata:", cdata)
  console.log("data:", data)
  return (
    <>
      <div className={`flex gap-10 mt-[110px] `}>
        <div className="w-[73%] border h-[777px] bg-[#EAEEEF] overflow-hidden relative">
          <img
            className="w-full h-full hover-zoom "
            src={`${baseUrl}${data.image_name}`}
            alt="shoe clse up"
          />

          {/* breadcrumbs  */}
          <ol class="flex items-center whitespace-nowrap absolute left-8 top-10">
            <li class="inline-flex items-center">
              <a
                class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                href="/"
              >
                Home
              </a>
              <svg
                class="shrink-0 size-5 text-gray-400 mx-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 13L10 3"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            </li>
            <li class="inline-flex items-center">
              <a
                class="flex items-center text-sm text-blue hover:text-blue-600 focus:outline-none focus:text-blue-600"
                href="/"
              >
                {cid}
                <svg
                  class="shrink-0 size-5 text-gray-400 mx-2"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6 13L10 3"
                    stroke="currentColor"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </a>
            </li>
            <li
              class="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
              aria-current="page"
            >
              Sneakers
            </li>
          </ol>
        </div>

        {/* next side top */}
        <div className="pt-10  w-[22%]">
          <div>{cid} Sportsware</div>
          <div className="text-4xl font-bold py-2">
            <p>{data?.title}</p>
          </div>
          <div className="font-bold">Rs.{data.price}</div>
          <div className="py-10">
            <p className="font-semibold py-3">Colors</p>
            <div className="w-[100px] h-[100px] hover-bottom">
              <img
                className="w-full h-full"
                src={`${baseUrl}${data.image_name}`}
                alt="shoe"
              />
            </div>
          </div>
          <div className="py-10">
            <p className="font-semibold pb-7">Sizes</p>
            <span className="px-7 py-4 bg-[#EAEEEF] hover-black">{data.size}</span>
          </div>

          {/* cart  */}
          <div className="flex  gap-4 items-center">
            <span className="w-[85%] px-3 py-4 bg-black text-white flex justify-between font-bold relative">
              <p>Add to Bag</p>
              <span>
                <i class="bi bi-arrow-right"></i>
              </span>
              <span className="w-[100%] px-3 py-7 border-[1px] border-black absolute -bottom-2 -right-2"></span>
            </span>
            <span className=" m-5 py-4 px-5 border-[1px] border-black">
              
              <i class="bi bi-suit-heart"></i>
            </span>
          </div>
          <div className="py-2">4 interest-free payments of Rs.1000.00 with Klarna.</div>
          <div className="py-5 border-y-[1px] border-black underline">Check if available in store.</div>
        </div>
      </div>

      {/* description part  */}
      <div className="container-2 py-9">
        <div className="flex justify-between">
           <p className="font-bold text-4xl">Description</p>
           {/* The !show toggles the button  */}
           {/* using ternary opertor to change from up to down arrow c#which is changing class */}
           <button className="" onClick={()=>{setShow(!show)}}><i className={`bi ${show? 'bi-chevron-up' : 'bi-chevron-down'} `}></i></button>
          
           </div>
           {/* max-height for the transition effect if no height the transition is not visible */}
            <div className={` flex justify-between gap-6 my-9 transition-all duration-1000 ease-linear overflow-hidden ${show? 'max-h-[1000px] opacity-100 ' : 'max-h-0 '}`}>
           <div className="w-[45%] leading-10 text-xl font-medium">{data.description}</div> 
           <div className="w-[45%] h-[450px]">
            <img className="w-full h-full" src={`${baseUrl}${data.image_name}`} alt="" />
           </div>
           </div>
           
           
       
      </div>

      {/* slider  */}
      <Sliders cdata={cdata} baseUrl={baseUrl} />

      
    </>
  );
}

export default Details;
