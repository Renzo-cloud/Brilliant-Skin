import Footer from "../Components/footer";
import { brilliantSkinLogo } from "../assets/images";
import AccountForms from "../Components/AccountForms";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { carouselImages } from "../constants/aConstant/accountConstant.js";

const Account = () => {
  return (
    <div>
      <div className="accountBG grid grid-cols-5">
        <div className="card grid-col col-span-2 bg-white w-96 rounded-md my-12 mx-20">
          <div className="flex items-center justify-center">
            <img className="my-8 w-48 h-26" src={brilliantSkinLogo} alt="" />
          </div>
          <p className="flex text-center my-4">
            Log in with your data you entered during your registration
          </p>
          <div className="flex items-center justify-center">
            <AccountForms />
          </div>
        </div>
        <div className="grid-cols col-span-3">
          <Swiper
            className="card w-auto h-screen my-12 mr-12 bg-white"
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
            {carouselImages?.map((obj, i) => {
              return (
                <div key={i}>
                  <SwiperSlide>
                    <img
                      className=" object-cover w-[100%] h-100"
                      src={obj.image}
                    />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
