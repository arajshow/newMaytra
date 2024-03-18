import React from "react";
import contact from "../../assets/Images/conatct.jpg";

function ContactSection() {
	return (
		<div
			style={{
				backgroundImage: `url(${contact})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "repeat",
			}}
			className=" flex flex-col items-center w-full justify-center md:h-[600px] h-[100vh] mt-40"
		>
			<div className="w-10/12 flex flex-col gap-6 my-16">
				<div className="row">
					<div className="col-md-12">
						<div className=" text-left">
							<h2 className="text-white font-semibold uppercase text-2xl">
								Contact Us
							</h2>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/2 pr-4">
						<form id="request" className="main_form">
							<div className="flex flex-wrap">
								<div className="w-full mb-6">
									<input
										className="contactus border-2 border-white px-3 py-2 w-full rounded"
										placeholder="Name"
										type="text"
										name="Name"
									/>
								</div>
								<div className="w-full mb-6">
									<input
										className="contactus border-2 border-white px-3 py-2 w-full rounded"
										placeholder="Email"
										type="text"
										name="Email"
									/>
								</div>
								<div className="w-full mb-6">
									<input
										className="contactus border-2 border-white px-3 py-2 w-full rounded"
										placeholder="Phone Number"
										type="text"
										name="Phone Number"
									/>
								</div>
								<div className="w-full mb-6">
									<textarea
										className="textarea border-2 border-white px-3 py-2 w-full rounded"
										placeholder="Message"
										name="Message"
									></textarea>
								</div>
								<div className="w-full mb-6">
									<button className="send_btn text-white bg-transparent border-2 border-white px-4 py-2 rounded-full uppercase transition duration-500 ease-in hover:bg-black">
										Send
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="w-full md:w-1/2 pl-4">
						<div className="map_main">
							<div className="map-responsive">
								<iframe
									src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=India+Delhi"
									width="600"
									height="345"
									frameborder="0"
									style={{ border: "0", width: "100%" }}
									allowFullScreen
									title="map"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
