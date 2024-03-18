import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/Images/banner1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { bannerList } from "../../data/bannerList";

const BannerSection = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${banner1})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "repeat",
			}}
			className=" flex flex-col items-center w-full justify-center md:h-[800px] h-[550px] "
		>
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
						<div className="flex flex-col items-center w-full gap-12 text-start">
							<div className="flex flex-col justify-start">
								<p className="text-black text-[80px] font-bold">MAYTRA</p>
								<p className="text-white font-semibold text-lg">
									{banner.title}
								</p>
							</div>
							<div className="py-5 px-8 text-xl font-semibold bg-white  text-black hover:text-white hover:bg-black rounded-3xl">
								Read More
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default BannerSection;
