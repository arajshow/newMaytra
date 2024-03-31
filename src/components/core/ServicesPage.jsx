import React from "react";
import icon1 from "../../assets/icon/advisory.png";
import icon2 from "../../assets/icon/analytics-icon.png";
import icon3 from "../../assets/icon/architectural-icon.png";
import icon4 from "../../assets/icon/engineering.png";

// Service components
const ServiceCard = ({ title, description, image }) => {
	// Split the description into heading, points, and footer
	const [heading, ...rest] = description.split("Points:");
	const [points, footer] = rest.join("Points:").split("Footer:");
	const footerSec = footer.split("new_line");

	// Split the points into individual bullet points
	const pointItems = points.split("\n").map((point, index) => {
		if (index > 0) {
			return <li key={index}>{point}</li>;
		}
	});

	const footerCard = footerSec.map((foot, id) => (
		<div className="py-3">
			<p key={id}>{foot}</p>
		</div>
	));

	return (
		<div className="bg-[#d7e7cf] w-full mx-auto mt-8 shadow-lg rounded-lg overflow-hidden mb-8">
			<div className="flex flex-col gap-4 p-4 items-center">
				<h2 className="text-2xl font-bold text-gray-800 my-3 text-PBlue">
					{title}
				</h2>
				<img
					className="rounded-lg object-center h-[15%] w-[16%] items-start object-cover"
					src={image}
					alt=""
				/>
				<div className="text-lg text-gray-700 leading-7 text-start w-full">
					<p className="mb-4">{heading}</p>
					<ul className="list-disc pl-6 mb-4">
						{/* Render each point as a list item */}
						{pointItems}
					</ul>
					<div>{footerCard}</div>
				</div>
			</div>
		</div>
	);
};

const ServicesPage = () => {
	return (
		<div className="container mx-auto py-8">
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

			<div className="grid grid-cols-1 gap-8">
				{/* Replace the values with your actual service details */}
				<ServiceCard
					title="Advisory Services"
					image={icon1}
					description={`Maytra’s Advisory practice has a focus on technology, finance, policy, & regulatory:- Points:
                    Climate Finance + Financial Engineering + ESG Investment 
                    CCarbon Markets + Environmental Law + Climate Regulations
                    Standards & Accreditations – NBC, ECBC, ASHRAE, LEED, GRIHA, SCR, SuRE, BEE, CIArb, FIDIC, ISO, ESG-PRI Footer:
                    We facilitate Climate Finance to avail opportunities in the shift to a low-carbon global economy through clean technology adaptation, climate action planning, carbon offset assistance, financial engineering for leveraging private sector financing for mitigation actions, advising ESG-focused investors to mitigate climate change risks, protecting portfolios through PRI, and risk management strategies, providing legal & regulatory assistance to international businesses & regulators, and representing clients in international commercial disputes resolution and contracts management. new_line
                    Our advisory services include climate finance, financial engineering, climate risk mitigation, climate conflict resolution, environmental valuation, carbon market analysis, ESG & socially responsible investing, SDG compliance, and project advisory on GEF, GCF, REDD+, etc. new_line
                    To ensure Quality, Standards, and Credentialing, we oversee all project and program activities and tasks needed to maintain a desired level of excellence throughout the project lifecycle and facilitate necessary accreditation.`}
				/>
				<ServiceCard
					title="Analytics Services"
					image={icon2}
					description={`Maytra’s Analytics practice has a focus on research, analysis, and assessments.  Points:
                    Economic Consulting + Econometric Analysis + Impact Evaluations
                    Feasibility Studies & DPR + Diagnostic & Prognostic Research + EIA & EMP
                    Advanced Analytics + Remote Sensing & GIS + Spatial Analysis & Geoinformatics Footer:
                    We uncover patterns, build predictions, and forecast incidences using advanced data science, complex algorithms, machine learning, artificial intelligence, blockchain technology & environmental econometrics, driving innovations in agriculture, energy, natural resources management, and smart development, and help manage performance through value optimization. We also undertake feasibility studies and prepare DPR. We use options valuation techniques and actuary work to determine the economic value of programs, businesses, assets, and enterprises, as well as to understand risks affecting their performance. new_line
                    Monitoring, Evaluation, and Learning practice is to apply knowledge gained from evidence and analysis to improve development outcomes, thus ensuring Accountability for the resources used to achieve these outcomes. We undertake diagnostic studies, deep research, and reviews that examine what works, for whom, why, and at what cost in diverse geographies, thus assisting in program improvement and ensuring greater accountability to beneficiaries. We offer a technology approach to MEAL to improve the accuracy, timeliness, and accessibility of data, effectively developing & applying evidence gap maps to improve decision-making around where to make investments in producing more evidence or synthesizing existing evidence. new_line
                    We offer GIS and geoinformatics services for the visualization of geographic data, analysis of spatial relationships, and accurate, efficient data management, GIS Mapping services, and GIS Remote Sensing services for capturing, storing, integrating, manipulating, analyzing, and displaying data related to positions on the Earth’s surface for numerous socio-commercial applications. We provide spatial computing services and customized solar maps, weather data, and ocean and geological data to support renewable energy, agriculture, water, forests, and minerals.`}
				/>
				<ServiceCard
					title="Architectural Services"
					image={icon3}
					description={`Maytra’s Architectural practice blends traditional artistry, creativity, technical expertise, critical engineering, and functionality. Points:
                    Commercial Green Architecture + Industrial Architecture + Hill Architecture 
                    Resilient Urban Planning + Functional Master Planning + Landscaping
                    Project Management + Disaster Management + Restoration & Renovation Footer:
                    Our architectural design serves as the bridge between the client’s aspirations and the built environment. Our design process involves a deep understanding of the users’ requirements, blending them seamlessly with their surroundings and harmonizing with the natural landscape and its cultural context. These services are offered by professionals trained to translate your ideas into feasible designs. Their expertise extends beyond the drawing board; they take into account factors such as safety, structural integrity, energy efficiency, and local regulations. new_line
                    Urban resilience is an indispensable approach for cities to build sustainable and future-proof environments. By embracing integrated planning, community engagement, and strategic investments, our planning and design approach ensures cities can enhance their capacity to adapt, withstand shocks, and create livable spaces for their residents. As urban built environments face the challenges of extreme climate events, we also provide a foolproof disaster management plan for the cities and communities.`}
				/>
				<ServiceCard
					title="Engineering Services"
					image={icon4}
					description={`Maytra’s Engineering practice focuses on problem-solving through rigorous applications of science and mathematics using the latest technology. Points:
                    Clean Technology Design + Sustainable & Resilient Infrastructure Design
                    CAD & BIM + Front-End Engineering (FEED) + Detailed Engineering Design
                    Structural Designing + HVAC & MEP Design + P&ID Footer:
                    Through integrated engineering, technology, design, and advanced materials, we offer real engineering design solutions for clean technology projects and smart, sustainable infrastructure development. We offer scalable options guided by principles of people and safety first, environmental protection, zero-carbon emission, easy integration, quick turnaround, and low cost/high returns. Our comprehensive services range includes computer-aided design (CAD), building information modeling (BIM), basic engineering and front-end engineering design (FEED), and detailed engineering design. new_line
                    As a deep-research-backed practice of Sustainable Design Engineering (SDE), we create an intersection of engineering and sustainability to transform design and application to address societal challenges. We have solutions for the built environment, public infrastructure, and critical infrastructure for security and resilience.`}
				/>
			</div>
		</div>
	);
};

export default ServicesPage;
