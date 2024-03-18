import React from "react";
import { clientsList } from "../../data/clientsList";
import { memberList } from "../../data/memberList";

const Clients = () => {
	return (
		<div
			class={`flex flex-col w-11/12 mx-auto gap-8 items-center justify-center bg-white  rounded-lg overflow-hidden shadow-PGray shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
		>
			<p className="text-5xl text-black font-bold mt-32 ">
				Our <span className=" text-PBlue">Clients</span>
			</p>
			<h4 className="text-xl w-10/12 text-center mx-auto text-PGray font-base leading-8">
				Our clients represent some of the most valuable international companies
				in the public and private sectors, as well as diverse multilateral and
				bilateral institutions creating real impact on societies and the
				environment, international organizations, impact funds and foundations,
				and government ministries and their departments around the world.
			</h4>
			<div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center mb-16">
				{clientsList.map((data, id) => {
					return (
						<div>
							<img
								src={data.img}
								alt={data.alt}
								className="w-[120px] h-[120px] p-4 object-contain"
							/>
						</div>
					);
				})}
			</div>

			<div className="h-[4px] bg-PGray w-11/12 rounded-2xl" />

			{/* Members */}
			<p className="text-5xl text-black font-bold mt-16 ">
				Our <span className=" text-PBlue">Memberships</span>
			</p>
			<h4 className="text-xl w-10/12 text-center mx-auto text-PGray font-base leading-8">
				We have delivered our expertise across institutions. We are also honored
				members of prestigious accrediation bodies and associations.
			</h4>
			<div className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center">
				{memberList.map((data, id) => {
					return (
						<div>
							<img
								src={data.img}
								alt={data.alt}
								className="w-[120px] h-[120px] p-4 object-contain"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Clients;
