import React from "react";

import { serviceList } from "../../data/serviceList";
import ReadMoreBtn from "../common/ReadMoreBtn";
import { Link } from "react-router-dom";

const ServiceSection = () => {
	return (
		<div className="w-11/12 flex flex-col gap-12 my-32 items-center mx-auto">
			<p className="text-5xl text-black font-bold">
				<span className=" text-PBlue">Services</span>
			</p>
			<div className="flex flex-col md:flex-row flex-wrap justify-center">
				{serviceList.map((data, id) => (
					<Link to={"/services"} class={`w-full lg:w-1/2 px-4 mb-8 `}>
						<div
							class={` group bg-white shadow-md rounded-lg overflow-hidden md:h-[250px] hover:scale-95 shadow-PGray hover:shadow-PGray hover:text-black  transition-all duration-500`}
						>
							<div
								class={`bg-gray-300 text-4xl text-center p-8  transition-all duration-500`}
							>
								{data.icon}
							</div>
							<div class="p-4">
								<h3
									class={`text-xl font-semibold mb-2  transition-all duration-500`}
								>
									{data.heading}
								</h3>
								<p class=" text-galeryBlack">{data.description}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
			<ReadMoreBtn />
		</div>
	);
};

export default ServiceSection;
