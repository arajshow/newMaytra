import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/Images/banner1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { bannerList } from "../../data/bannerList";
import { Link } from "react-router-dom";

const BannerSection = () => {
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={0}
			loop={true}
			freeMode={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			modules={[FreeMode, Pagination, Autoplay]}
			className="flex justify-center items-center w-full "
		>
			{bannerList.map((banner, i) => (
				<SwiperSlide key={i}>
					<div
						style={{
							backgroundImage: `url(${banner.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "repeat",
						}}
						className=" flex flex-col items-center w-full justify-center md:h-[600px] sm:h-[450px] h-[300px]"
					>
						<div className="flex flex-col items-center w-full gap-12 text-center">
							<div className="flex flex-col justify-center">
								<p className="text-black font-myriad md:text-[70px] sm:text-[50px] text-[35px] font-bold ">
									maytra
								</p>
								<p className={` font-normal leading-6 ${banner.cc} text-xl`}>
									{banner.title}
								</p>
							</div>
							<Link
								to={"/about"}
								className="py-5 px-8 text-lg cursor-pointer font-semibold bg-white  text-black hover:text-white hover:bg-black rounded-3xl"
							>
								Read More
							</Link>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default BannerSection;
