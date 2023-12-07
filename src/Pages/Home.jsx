//import React from "react";
import {
  interestedResellers1,
  // julyWebsitebanner,
  diamondDesign,
  interestedResellers2,
  interestedResellers3,
  advisory,
  // backgroundhome,
  plant1,
  plant2,
  // alchoholHandSanitizer,
  brilliantSkinLogo,
} from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
// import { imageCarousel, products } from "src/constants/homeConstants.js";
import { imageCarousel, products } from "../constants/homeConstants.js";

const Home = () => {
  return (
    <>
      <div>
        <Swiper
          className="w-full"
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {imageCarousel?.map((obj, i) => {
            return (
              <div key={i}>
                <SwiperSlide>
                  <img className=" object-cover w-50 h-50" src={obj.image} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl">Brilliant Skin Essentials Inc.</h1>
          <p className="text-sm py-2 font-light">
            The best skin of your life starts here...
          </p>
          <p>
            <img className="py-8" src={diamondDesign} alt="" />
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 mx-36">
          <div>
            <img src={interestedResellers1} alt="" />
          </div>
          <div>
            <img src={interestedResellers2} alt="" />
          </div>
          <div>
            <img src={interestedResellers3} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center py-16 mx-36">
          <img
            className="cursor-pointer hover:scale-110 transition-all delay-100 duration-150"
            src={advisory}
          />
          <div className="text-center py-24">
            <p className="text-2xl">
              All BSEI Authorized Franchisees, Distributors, Sellers and End
              Users
            </p>
            <p className="text-pink-400 mt-8">
              Public Warning Against the Purchases and the Use of Brilliant Skin
              Essentials.
            </p>
            <p className="text-pink-400 mt-2">
              products from Unauthorized Sellers
            </p>
          </div>
        </div>
        <section>
          <div className="testing grid grid-cols-5">
            <div className="">
              <img
                className="w-[100%] h-[90vh] overflow-hidden"
                src={plant1}
                alt=""
              />
            </div>
            <div className="grid col-span-3 items-center justify-center  rounded-lg py-16 ">
              <div className="items-center pl-36">
                <h1 className="ml-36 w-56 text-center text-sm bg-white rounded-3xl border-y-8 border-x-6 border-white">
                  ABOUT BRILLIANT COSMETICS
                </h1>
                <img className="py-8" src={diamondDesign} alt="" />
              </div>
              <p className="text-center font-bold text-lg py-8">
                Brilliant Skin Essentials is a gem in the beauty and cosmetics
                brand in the Philippines. With natural, safe and proven
                formulation offered by Brilliant Skin Essentials, it
                continuously creates accessible beauty products to fulfill the
                skin care needs of Filipinos.
              </p>
              <p className="text-center font-light pb-8">
                In November 2015, a young mother, 19 year old Glenda Dela Cruz
                Victorio from the Province Morong, Rizal, suffered severe skin
                eruptions on her face, This caused the bubbly Glenda to shy away
                from people...
              </p>
              <button className="bg-pink-600 w-52 h-8 rounded-md ml-72 ">
                See All
              </button>
            </div>
            <div>
              <img
                className="w-[100%] h-[90vh] overflow-hidden"
                src={plant2}
                alt=""
              />
            </div>
          </div>
        </section>
        <div className="text-center items-center justify-center  my-24">
          <h1 className="text-lg font-bold">Our Products</h1>
          <p className="font-light py-2">
            Add our products to your weekly lineup
          </p>
          <img
            className="flex items-center py-8 pl-8 ml-96"
            src={diamondDesign}
            alt=""
          />
        </div>
        <div className="grid grid-cols-4">
          {products.map((obj, i) => {
            return (
              <>
                <div key={i}>
                  <div className="ml-6">
                    <img src={obj.items} alt="" />
                    <br />
                    <p className="text-pink-300">{obj.desc}</p>
                    <p className="pb-8">{obj.price}</p>
                    <br />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <footer className="shadow dark:bg-gray-900">
          <hr className="my-6  sm:mx-auto lg:my-8" />
          <div className="grid grid-cols-4 w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="ml-16">
              <img className="mb-6" src={brilliantSkinLogo} alt="" />
              <p className="mb-6">
                35 J.Sta.Catalina St, Sitio Caingin <br /> 1960 Morong,
                Philippines
              </p>
              <p className="mb-6">
                (02) 213-6461 <br /> contact@brilliantskinessentials.ph
              </p>
              <p>Working time 8:00AM-5:00PM</p>
            </div>
            <div className="ml-16">
              <h1 className="mt-8 text-pink-700">Information</h1>
              <ul className="space-y-4 mt-4">
                <li>BSE Collaboration</li>
                <li>Seller Locator</li>
                <li>Brilliant K</li>
                <li>Brilliant Colours</li>
                <li>Skinfit</li>
              </ul>
            </div>
            <div className="ml-16">
              <h1 className="mt-8 text-pink-700">Brilliant Offers</h1>
              <ul className="space-y-4 mt-4">
                <li>Be our Distributor</li>
                <li>Be our Franchisee</li>
                <li>Be our Reseller</li>
              </ul>
            </div>
            <div className="ml-16">
              <h1 className="mt-8 text-pink-700">Privacy Policy</h1>
              <ul className="space-y-4 mt-4">
                <li>Website Privacy Policy</li>
                <li>Request for Return</li>
                <li>Legibility and Validity</li>
                <li>Non-Returnable Items</li>
                <li>Transportation Changes</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
