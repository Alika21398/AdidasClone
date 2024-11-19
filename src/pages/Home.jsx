import React, { useEffect, useState } from "react";
import Bg from "../assets/homebg.avif";
import Logo from "../assets/Logo.jpg";
import { Link, useParams } from "react-router-dom";

function Home({ showNavbar }) {
  const [data, setData] = useState([]);
  const [cdata, setCdata] = useState([]);
  const baseUrl = "http://localhost:3000/";
  useEffect(() => {
    fetch("http://localhost:3000/shoes")
      .then((res) => {
        // console.log(res.json())
        return res.json();
      })
      .then((data) => {
        // console.log("dataa", data)
        setData(data);
      });
  }, []);

  console.log("data", data);
  return (
    <div
      className={`mt-[105px]`}
    >
      {/* Top image part  */}
      <div className="relative">
        <div className="flex">
          <img src={Bg} alt="homepage-image" />
        </div>
        <div className="absolute bottom-3 left-24">
          <div>
            <h2 className="text-4xl text-[#fff] font-bold">
              BACK TO SCHOOL TRENDS
            </h2>
          </div>
          <div className="w-[60%] p-4 pl-0">
            <p className="text-[18px] text-[#ccc]">
              There's no better time to lock in your day one fit. Shop
              head-to-toe looks now.
            </p>
          </div>
          <div className="flex gap-4 font-semibold  ">
            <Link to="/cat/Men's">
              <div className="home-buttons">
                <span className="pr-4">SHOP MEN</span>
                <span>
                  <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
            <Link to="/cat/Women's">
              <div className="home-buttons">
                <span className="pr-4">SHOP WOMEN</span>
                <span>
                  <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
            <Link to="/cat/Kid's">
              <div className="home-buttons">
                <span className="pr-4">SHOP KIDS</span>
                <span>
                  <i class="bi bi-arrow-right"></i>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Still Interested  */}
      <div className="my-5">
        <h2 className="font-bold text-4xl p-6">Still Interested?</h2>
        <div className="flex gap-4 flex-wrap ">
          {data.slice(3, 11).map((items, index) => {
            return (
              <div className=" border hover-border" key={index}>
                <Link to={`/details/${items.category}/${items.id}`}>
                  <div className="w-[365px] h-[350px] border relative">
                    <img
                      className="h-full w-full "
                      src={`${baseUrl}${items.image_name}`}
                      alt=""
                    />
                    <p className="px-4 py-2 bg-white absolute bottom-0 left-6">
                      Rs. {items.price}
                    </p>
                  </div>
              
                <p className="py-4 pl-3">{items.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* About */}
      <div className="bg-black py-8">
        <div className="w-[43%] m-auto text-justify">
          <h2 className="text-white text-3xl font-bold">
            A leader in athletic performance since 1949
          </h2>
          <div className=" py-4">
            <p className="text-white text-[15px]">
              We're inspired by athletes. From the very first track spikes Adi
              Dassler made in his workshop, creating the best gear for the
              athlete is what drives us to pursue technological breakthroughs
              and design innovations. Our sneakers and apparel are worn by
              world-record holders and medal winners, but it's just as important
              that road runners, weekend hikers, recreational soccer players,
              fitness enthusiasts and yogis look to adidas for gear that helps
              them find their personal best. From adidas Boost, the
              game-changing cushioning technology, to the world-beating design
              of Adizero Adios Pro running shoes to Terrex outdoor gear to
              soccer cleats with unbeatable touch, we're always iterating,
              innovating and improving with athletes in mind.
            </p>
            <p className="text-white text-[15px] py-3">
              The drive to create the best products for the athlete is why we
              went back to the drawing board to build the best sports bras in
              the business. Reimagined and redesigned, our sports bras keep
              female athletes comfortable and supported, whatever their sport.
              It's why we developed period-proof technology to encourage more
              women to stay in the game. It's why we partner with designers like
              Stella McCartney who blur the lines between sport and high
              fashion, with sportswear that ensures that athletes look and feel
              great in and out of the gym. Our sneakers and workout clothes are
              designed to get people moving, so they can live life to the
              fullest.
            </p>
          </div>
          <div className="w-[50px] m-auto py-5">
            <img className="w-full" src={Logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
