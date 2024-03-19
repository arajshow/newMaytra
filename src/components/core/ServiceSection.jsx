import React from "react";

import { serviceList } from "../../data/serviceList";
import ReadMoreBtn from "../common/ReadMoreBtn";

const ServiceSection = () => {
	return (
		<div className="w-11/12 flex flex-col gap-12 my-32 items-center mx-auto">
			<p className="text-5xl text-black font-bold">
				Our <span className=" text-PBlue">Services</span>
			</p>
			<div className="flex flex-col md:flex-row flex-wrap justify-center">
				{serviceList.map((data, id) => (
					<div class={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8 `}>
						<div
							class={` group bg-white shadow-md rounded-lg overflow-hidden md:h-[250px] hover:scale-95 shadow-PGray ${
								id % 2 === 0 ? "hover:shadow-PBlue" : "hover:shadow-Pred"
							} hover:shadow-PBlue hover:text-black  transition-all duration-500`}
						>
							<div
								class={`bg-gray-300 text-4xl text-center p-8 group-hover:text-PBlue ${
									id % 2 === 0
										? "group-hover:text-PBlue"
										: "group-hover:text-Pred"
								} transition-all duration-500`}
							>
								{data.icon}
							</div>
							<div class="p-4">
								<h3
									class={`text-xl font-semibold mb-2 ${
										id % 2 === 0
											? "group-hover:text-PBlue"
											: "group-hover:text-Pred"
									} transition-all duration-500`}
								>
									{data.heading}
								</h3>
								<p class="text-gray-700">{data.description}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<ReadMoreBtn />
		</div>
	);
};

export default ServiceSection;
