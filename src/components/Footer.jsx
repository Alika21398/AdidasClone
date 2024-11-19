import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-[#EDE734] py-11 flex gap-5 justify-center">
        <h2 className="font-bold text-4xl">JOIN OUR ADICLUB & GET 15% OFF</h2>
        <span className=" px-8 py-3 bg-black text-white flex justify-between font-bold relative">
          <p>Sign Up For Free</p>
          <span className="pl-5">
            <i class="bi bi-arrow-right"></i>
          </span>
          <span className="w-[100%] px-3 py-6 border-[1px] border-black absolute -bottom-1 -right-1"></span>
        </span>
      </div>

      {/* infor part  */}
      <div className="w-[70%] m-auto flex justify-between">
        <div>
          <h3 className="font-bold text-2xl py-5">Products</h3>
          <ul>
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Release Dates</li>
            <li>Sale</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl py-5">Sports</h3>
          <ul>
            <li>Soccer</li>
            <li>Running</li>
            <li>Basketball</li>
            <li>Football</li>
            <li>Outdoor</li>
            <li>Golf</li>
            <li>Baseball</li>
            <li>Tennis</li>
            <li>Skateboarding</li>
            <li>Training</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl py-5">Company Info</h3>
          <ul>
            <li>About Us </li>

            <li>adidas Stories</li>
            <li>adidas Apps</li>
            <li>Impact</li>
            <li>People</li>
            <li>Planet</li>
            <li>adiClub</li>
            <li>Affiliates</li>
            <li>Press</li>
            <li>Careers</li>

            <li>Country Selector</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl py-5">Follow Us</h3>
          <ul className="leading-loose">
            <li><i class="bi bi-facebook"></i></li>
            <li><i class="bi bi-instagram"></i></li>
            <li><i class="bi bi-youtube"></i></li>
            <li><i class="bi bi-twitter"></i></li>
            <li><i class="bi bi-pinterest"></i></li>
            <li><i class="bi bi-tiktok"></i></li>
          </ul>
        </div>
      </div>

      {/* privacy policy */}
      <div className=" w-full  bg-[#282C31] mt-3">
        <div className="py-6 text-[12px]">
        <div className="flex justify-center gap-5">
        <h4 className="text-white">Privacy Policy</h4>
        <h4 className="text-white">Terms and Conditions</h4>

        </div>
        <div className="text-center pt-4"><p className="text-white">© 2024 adidas America, Inc.</p></div>
      
       </div>

      </div>
    </>
  );
}

export default Footer;
