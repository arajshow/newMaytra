import React from "react";
import BlogslistView from "../components/Blog/BlogList";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import Footer from "../components/common/Footer";

const Blog = () => {
	return (
		<div className="w-screen bg-PWhite">
			<div className="flex flex-col gap-8 w-10/12 justify-center items-center mx-auto mb-32">
				<p className="flex gap-2 text-5xl text-black font-bold mt-16 mb-10">
					Our <span className=" text-PBlue">Blog</span>
				</p>
				<BlogslistView />
			</div>
			<Footer />
		</div>
	);
};

export default Blog;
