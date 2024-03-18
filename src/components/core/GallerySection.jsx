import React from "react";
import gallery1 from "../../assets/Images/gallery1.jpg";
import gallery2 from "../../assets/Images/gallery2.jpg";
import gallery3 from "../../assets/Images/gallery3.jpg";
import gallery4 from "../../assets/Images/gallery4.jpg";
import gallery5 from "../../assets/Images/gallery5.jpg";
import gallery6 from "../../assets/Images/gallery6.jpg";

const GallerySection = () => {
	return (
		<div className="w-screen bg-Back">
			<div className="flex flex-col gap-3 w-10/12 justify-center items-center mx-auto ">
				<p className="text-5xl text-black font-bold mt-16 ">
					Our <span className=" text-PBlue">Gallery</span>
				</p>
				<p className="text-2xl font-light">
					We question everything, but never doubt patterns
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-16">
					<div className="col-md-4 col-sm-6 bg-galeryBlack flex flex-col justify-center relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
						<div className="gallery_text bg-gray-800 text-white h-64 flex items-center justify-center">
							<div className="text-white leanding-5 flex flex-col justify-center items-start font-medium text-left px-4">
								<h3 className="text-xl font-bold py-4">Clean Technology</h3>
								<p className="font-light text-md">
									Implementing green technology <br />
									for eco-friendly solutions <br />
									through sustainable growth,
									<br />
									and cost-effective measures.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
							<img
								src={gallery1}
								className="max-w-xs transition-all duration-300 ease-in-out hover:scale-110"
								alt="#"
							/>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
							<img
								src={gallery2}
								className="max-w-xs transition-all duration-300 ease-in-out hover:scale-110"
								alt="#"
							/>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
							<img
								src={gallery3}
								className="max-w-xs transition-all duration-300 ease-in-out hover:scale-110"
								alt="#"
							/>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
							<img
								src={gallery4}
								className="max-w-xs transition-all duration-300 ease-in-out hover:scale-110"
								alt="#"
							/>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 bg-galeryBlack flex flex-col justify-center relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
						<div className="gallery_text bg-gray-800 text-white h-64 flex flex-col items-center justify-center">
							<div className="text-white leanding-5  font-medium text-left px-4 flex flex-col justify-center items-start">
								<h3 className="text-xl font-bold py-4">
									Sustainable Investing
								</h3>
								<p className="font-light text-md">
									Expertise in project identification
									<br />
									covering food security, <br />
									and renewable energy <br />
									with ESG integration.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6 bg-galeryBlack flex flex-col justify-center relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
						<div className="gallery_text bg-gray-800  text-white h-64 flex items-center justify-center">
							<div className="text-white leanding-5  font-medium text-left px-4">
								<h3 className="text-xl font-bold py-4">Urban Reforms</h3>
								<p className="font-light text-md">
									Expertise in asset assessment,
									<br />
									feasibility studies, master planning, <br />
									project finance, and <br />
									transaction advisory.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
							<img
								src={gallery5}
								className="max-w-xs transition-all duration-300 ease-in-out hover:scale-110"
								alt="#"
							/>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
							<img
								src={gallery6}
								className="max-w-xs transition-all duration-300 ease-in-out hover:scale-110"
								alt="#"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GallerySection;
