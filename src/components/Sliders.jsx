import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link, useParams } from "react-router-dom";

function Sliders({cdata, baseUrl}) {
  const {cid}=useParams()

  return (
    <>
      <div className="container-2 py-5">
        <div className="py-6">
          <h2 className="font-bold text-4xl">You May Also Like</h2>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {cdata.map((items, indexer) => {
            return (
              <SwiperSlide>
                <div
                  className="w-[310px] border h-[330px] my-8 hover-border"
                  key={indexer}
                >
                  <div className="w-full h-[260px] border-b-2 bg-[#EAEEEF] relative">
                    <Link to={`/details/${cid}/${items.id}`}>
                      <img
                        className="w-full h-full"
                        src={`${baseUrl}${items.image_name}`}
                        alt=""
                      />
                    </Link>
                    <span className="absolute bottom-0 left-2 bg-white p-1 hover-up transitiont">
                      Rs.{items.price}
                    </span>
                  </div>
                  <Link to={`/details/${cid}/${items.id}`}>
                    <p className="pt-5 pl-2">{items?.title}</p>
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Sliders;
