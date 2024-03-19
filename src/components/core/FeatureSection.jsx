import React, { useRef, useState } from "react";
import desi from "../../assets/Images/desi.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import { featuerList } from "../../data/featureList";

const FeatureSection = () => {
	return (
		<div className="w-11/12 flex md:flex-row flex-col gap-4 mt-32 items-center mx-auto">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				freeMode={true}
				navigation={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[FreeMode, Pagination, Autoplay, Navigation]}
				className="flex justify-center items-center md:w-[45%] w-[80%]"
			>
				{featuerList.map((feature, i) => (
					<SwiperSlide key={i}>
						<div className="flex flex-col items-center justify-center h-[400px] md:w-[70%] w-[50%] gap-8 text-center mx-auto">
							<div className="flex flex-col justify-start">
								<p
									className={`${
										i % 2 == 0 ? "text-black" : "text-PBlue"
									} md:text-4xl text-3xl font-bold`}
								>
									{feature.heading1}
								</p>
								<span
									className={`${
										i % 2 == 0 ? "text-PBlue" : "text-black"
									} md:text-4xl text-3xl font-bold`}
								>
									{feature.heading2}
								</span>
							</div>
							<p className="text-lg font-medium font-inter leading-6">
								{feature.description}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<img
				src={desi}
				className="md:w-[55%] w-[90%] mx-auto items-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] object-contain"
			/>
		</div>
	);
};

export default FeatureSection;
