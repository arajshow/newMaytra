import React from "react";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import {
	FaFacebook,
	FaDiscord,
	FaTwitter,
	FaGithub,
	FaDribbble,
} from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

const Footer = () => {
	return (
		<footer class="bg-black text-white h-[50%]">
			<div class="flex flex-col gap-8 mx-auto w-full max-w-screen-xl p-4 py-20 lg:py-8 ">
				<div class="md:flex md:justify-between gap-16 mt-20">
					<div class="mb-6 md:mb-0">
						<a href="#" class="flex items-center">
							<img src={logo} class="h-8 me-3" alt=" Logo" />
							<span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
								Maytra
							</span>
						</a>
					</div>
					<div class="grid grid-cols-2 gap-20 sm:gap-6 sm:grid-cols-3">
						<div className="w-4/10">
							<p>
								A global advisory, analytics, research, & design firm working on
								human-centric issues through applications of clean technology,
								bio/nanotechnology, advanced materials, econometrics,
								environmental sciences.
							</p>
						</div>
						<div className="flex flex-col w-3/10 items-center">
							<ul class="text-gray-500 dark:text-gray-400 font-semibold ">
								<li class="mb-4">Publications</li>
								<li class="mb-4">News & Media</li>
								<li class="mb-4">Newsletter</li>
							</ul>
						</div>
						<div className="w-2/10">
							<ul class="text-gray-500 font-semibold cursor-pointer">
								<li class="mb-4  hover:font-bold hover:text-PBlue hover:scale-95 transition-all duration-200">
									<Link to={`/blog`}>Maytra Blog</Link>
								</li>
								<li class="mb-4 cursor-pointer hover:font-bold hover:scale-95 hover:text-PBlue transition-all duration-200">
									Expo, Awards, & Events
								</li>
								<li class="mb-4 cursor-pointer hover:font-bold hover:scale-95 hover:text-PBlue transition-all duration-200">
									<Link to={`/blog`}>Careers</Link>
								</li>
								<li class="mb-4 cursor-pointer hover:font-bold hover:scale-95 hover:text-PBlue transition-all duration-200">
									<Link to={`/blog`}>Procurement</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="h-[3px] bg-PWhite rounded-2xl my-6" />
				<div class="sm:flex sm:items-center sm:justify-between">
					<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
						© 2024{" "}
						<a href="https://flowbite.com/" class="hover:underline">
							Maytra™
						</a>
						. All Rights Reserved.
					</span>
					<div class="flex mt-4 gap-2 items-center text-lg sm:justify-center sm:mt-0">
						<Link
							to={"/login"}
							className="text-blue-500 w-4 h-4 mr-4 hover:text-PBlue"
						>
							<MdModeEditOutline />
						</Link>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 hover:text-PBlue transition-all duration-200"
						>
							<IoLogoFacebook className="w-4 h-4" />
							<span className="sr-only">Facebook page</span>
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 hover:text-PBlue transition-all duration-200 ms-5"
						>
							<FaDiscord className="w-4 h-4" />
							<span className="sr-only">Discord community</span>
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 hover:text-PBlue transition-all duration-200 ms-5"
						>
							<FaTwitter className="w-4 h-4" />
							<span className="sr-only">Twitter page</span>
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 hover:text-PBlue transition-all duration-200 ms-5"
						>
							<FaGithub className="w-4 h-4" />
							<span className="sr-only">GitHub account</span>
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-gray-900 hover:text-PBlue transition-all duration-200 ms-5"
						>
							<FaDribbble className="w-4 h-4" />
							<span className="sr-only">Dribbble account</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
