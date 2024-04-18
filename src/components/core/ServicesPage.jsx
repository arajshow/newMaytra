import React from "react";
import icon1 from "../../assets/banner/sec1.jpeg";
import icon2 from "../../assets/banner/sec2.jpeg";
import icon3 from "../../assets/banner/sec3.jpeg";
import icon4 from "../../assets/banner/sec4.jpeg";

// Service components
const ServiceCard = ({ id, title, imageUrl, subtitle, previewText, tags }) => {
	return (
		<div
			className={`flex group gap-3 ${
				id % 2 == 0
					? " flex-row bg-PBlue bg-opacity-10"
					: "flex-row-reverse bg-PGreen bg-opacity-10"
			} shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg m-0 overflow-hidden relative text-black`}
		>
			<div className=" w-[30%]">
				<img
					className="w-full h-full object-cover group-hover:scale-110 transition-all duration-200"
					src={imageUrl}
					alt="Image Title"
				/>
			</div>
			<div className="p-6 w-[70%] text-start relative flex flex-col">
				<h1 className="text-2xl py-2 text-black">{title}</h1>
				<div className=" text-justify h-full">{previewText}</div>
				<ul className="flex flex-row gap-3 text-base justify-start mt-5">
					{tags.map((tag, index) => (
						<li
							key={index}
							className="inline-block bg-PGray bg-opacity-40 hover:bg-opacity-80 rounded-md px-1.5 py-0.5 mr-1 mb-1 cursor-default select-none transition-all duration-300"
						>
							{tag}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

const ServicesPage = () => {
	return (
		<div className="container w-10/12 mx-auto py-8">
			<h1 className="text-3xl font-bold text-center text-PGreen mb-8">
				Our Services
			</h1>

			<div className="flex flex-col justify-around items-center md:w-full gap-10 mx-auto mb-6">
				<p className="text-lg font-light font-acumin leading-8 text-center">
					We specialize in the management of climate change, green growth, and
					carbon footprint. We design and assist in building sustainable
					resilient infrastructure. Our focus is on objective research, strategy
					development, clean technology integration, economic policy advocacy,
					econometric & geospatial analysis, project & program design, green
					architecture & engineering, planning & management, regulatory support
					& assistance, and facilitating sustainable finance to ensure effective
					climate mitigation and adaptation activities for low-carbon and
					climate-resilient economies. We provide technical assistance, program
					design, project management, and capacity building in sectors such as
					agriculture, energy, infrastructure, transportation, forestry, WASH,
					and extractives. We offer our services through the following practice
					areas:
				</p>
			</div>
			<div className="flex flex-col gap-12 justify-center p-10">
				{/* Replace the values with your actual service details */}
				<ServiceCard
					id="1"
					title="Advisory Services"
					imageUrl={icon1}
					tags={["Climate Finance", "Financial Engineering", "ESG Investment"]}
					previewText={`We facilitate Climate Finance to avail opportunities in the shift to a low-carbon global economy through clean technology adaptation, climate action planning, carbon offset assistance, financial engineering for leveraging private sector financing for mitigation actions, advising ESG-focused investors to mitigate climate change risks, protecting portfolios through PRI, and risk management strategies, providing legal & regulatory assistance to international businesses & regulators, and representing clients in international commercial disputes resolution and contracts management.`}
				/>
				<ServiceCard
					id="2"
					title="Analytics Services"
					imageUrl={icon2}
					tags={[
						"Economic Consulting",
						"Econometric Analysis",
						"Impact Evaluations",
					]}
					previewText={`We uncover patterns, build predictions, and forecast incidences using advanced data science, complex algorithms, machine learning, artificial intelligence, blockchain technology & environmental econometrics, driving innovations in agriculture, energy, natural resources management, and smart development, and help manage performance through value optimization. We also undertake feasibility studies and prepare DPR. We use options valuation techniques and actuary work to determine the economic value of programs, businesses, assets, and enterprises, as well as to understand risks affecting their performance.`}
				/>
				<ServiceCard
					id="1"
					title="Architectural Services"
					imageUrl={icon3}
					tags={[
						"Commercial Green Architecture",
						"Industrial Architecture",
						"Hill Architecture",
					]}
					previewText={`Our architectural design serves as the bridge between the client’s aspirations and the built environment. Our design process involves a deep understanding of the users’ requirements, blending them seamlessly with their surroundings and harmonizing with the natural landscape and its cultural context. These services are offered by professionals trained to translate your ideas into feasible designs. Their expertise extends beyond the drawing board; they take into account factors such as safety, structural integrity, energy efficiency, and local regulations.`}
				/>
				<ServiceCard
					id="2"
					title="Engineering Services"
					imageUrl={icon4}
					tags={[
						"Clean Technology Design",
						"Sustainable",
						"Resilient Infrastructure Design",
					]}
					previewText={`Through integrated engineering, technology, design, and advanced materials, we offer real engineering design solutions for clean technology projects and smart, sustainable infrastructure development. We offer scalable options guided by principles of people and safety first, environmental protection, zero-carbon emission, easy integration, quick turnaround, and low cost/high returns. Our comprehensive services range includes computer-aided design (CAD), building information modeling (BIM), basic engineering and front-end engineering design (FEED), and detailed engineering design.`}
				/>
			</div>
		</div>
	);
};

export default ServicesPage;
