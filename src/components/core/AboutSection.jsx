import React from "react";
import about from "../../assets/Images/about.png";
import ReadMoreBtn from "../common/ReadMoreBtn";

const AboutSection = () => {
	return (
		<div className="flex md:flex-row w-10/12 flex-col justify-center items-center mx-auto mt-32 gap-15">
			<div className="flex flex-col justify-center md:items-start items-center md:w-[35%] gap-10 md:ml-20 mx-auto mb-6">
				<p className="text-5xl w-full text-black font-bold">
					About <span className=" text-PBlue">Us</span>
				</p>
				<p className="text-lg font-light font-inter leading-8 text-start">
					At MAYTRA, we work with global businesses, international
					organizations, research institutions, and governments, facilitating
					smart innovations and enabling strategic value propositions through
					advanced technology integration and sharing deep research to attain
					inclusive green growth, impactful development, and market superiority.
					MAYTRA has established an Environmental, Social, and Governance
					Management System (ESGMS) that provides a systematic procedure to
					ensure our project approach is free of environmental, social, &
					governance risks, thus fulfilling the Principles of Responsible
					Investments (PRI) practices. <br /> <br />
					<span className="lg:block hidden">
						{" "}
						We facilitate smart innovations and value creation in two broad
						themes related to Human beings – (1) Clean & healthy consumption in
						terms of climate-smart agriculture, organic food sufficiency, clean
						water & air availability, and inclusive healthcare systems, and (2)
						Sustainable living & development in terms of renewable & clean
						energy access, energy efficiency, natural resources optimization,
						sustainable infrastructure, livable eco-cities, and new frontiers.
					</span>
				</p>
				<ReadMoreBtn />
			</div>
			<img
				src={about}
				className="md:w-[40%] w-[90%] mx-auto items-center shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  h-full"
			/>
		</div>
	);
};

export default AboutSection;
