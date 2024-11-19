import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category({showNavbar}) {
  let {cid}=useParams();
  const [data,setData]=useState([]);
  const baseUrl="http://localhost:3000/";
  useEffect(()=>{
    fetch(`http://localhost:3000/shoes?category=${cid}`)
    .then((res)=>{
    return res.json()
    }
  )
    .then((data)=>{
      setData(data)

    })
    .catch(error => {
      console.error('Error:', error);
    });

  },[cid])

  console.log("dataa",data)
  return (
    <>
    <div className={` mt-[115px] `}>
    <ol class={`flex items-center whitespace-nowrap px-[130px] pt-3`}>
  <li class="inline-flex items-center">
    <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
      Home
    </a>
    <svg class="shrink-0 size-5 text-gray-400 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
    </svg>
  </li>
  <li class="inline-flex items-center">
    <a class="flex items-center text-sm text-blue hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
      {cid} 
      <svg class="shrink-0 size-5 text-gray-400 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 13L10 3" stroke="currentColor" stroke-linecap="round"></path>
      </svg>
    </a>
  </li>
  <li class="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
    Sneakers
  </li>
</ol>

<div className="container-2 ">
  <div><h2 className='text-3xl font-semibold py-6'>{cid} Sneakers: Buy 2 Items, Get 30% Off with Code* SAVINGS </h2></div>
  <div className='w-[50%]'>
    <p>From Ultraboost to Superstar, you can find the perfect men’s athletic shoes to fit your lifestyle. Sneakers made with your comfort in mind so you can put all of your focus into your next session. Gear up on trending styles for summer. Save 30% when you add 2 or more items to your cart. Use code* SAVINGS. Offer ends 07/30. Exclusions apply.</p>
  </div>

  {/* images part */}
  <div className="flex">
    <div className='py-3 flex  flex-wrap justify-center gap-1'>
      {data?.map((items, index)=>{
         return (
         <div className='w-[310px] border h-[330px] my-8 hover-border' key={index}>
           
            <div className='w-full h-[260px] border-b-2 bg-[#EAEEEF] relative'>
              <Link to={`/details/${cid}/${items.id}`}>
           <img className='w-full h-full' src={`${baseUrl}${items.image_name}`} alt="shoe design" />
           </Link>
           <span className='absolute bottom-0 left-2 bg-white p-1'>Rs.{items.price}</span>
           </div>
           <div className='pl-3'>
           <Link to={`/details/${cid}/${items.id}`}>
            <p className='pt-2'>{items?.title}</p>
            </Link>
            <h4>{cid} Sportware</h4>
            </div>

            

          </div>

        )
      })}

    </div>
  </div>
</div>
</div>

      
    </>
  )
}

export default Category
