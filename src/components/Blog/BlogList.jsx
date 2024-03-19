import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { GrView } from "react-icons/gr";
import Loading from "../../assets/Images/load.gif";
import { useNavigate } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import fb from "../../firebase";
const DB = fb.firestore();
const Blogslist = DB.collection("blogs");

const BlogslistView = () => {
	const [blogs, setBlogs] = useState([]);
	const navigate = useNavigate();

	const formatPublishedDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-IN", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	};

	useEffect(() => {
		const unsubscribe = Blogslist.onSnapshot((querySnapshot) => {
			const data = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setBlogs(data);
		});
		return unsubscribe;
	}, []);

	console.log("blogs data ", blogs);

	return (
		<div className="items-center mx-auto">
			{blogs.map((blog) => (
				<Link to={"/blog/" + blog.id} key={blog.id} className="cursor-pointer ">
					<Card className="w-full max-w-[48rem] flex-row bg-[#FCF5E5] shadow-lg rounded-lg overflow-hidden mb-8">
						<CardHeader
							shadow={false}
							floated={false}
							className="m-0 w-2/5 shrink-0 rounded-r-none"
						>
							<img
								src={blog.ImageUrl || Loading}
								alt="card-image"
								className="h-full w-full object-contain"
							/>
						</CardHeader>
						<CardBody>
							<Typography variant="h4" color="blue-gray" className="mb-2">
								{blog.Title}
							</Typography>
							<Typography color="gray" className="mb-8 font-normal">
								{blog.Body.split(" ").slice(0, 30).join(" ") +
									(blog.Body.split(" ").length > 30 ? "..." : "")}
							</Typography>
							<div className="flex justify-between items-center text-PGray text-2xl">
								<div>
									<Typography
										variant="body"
										color="gray"
										className="mb-2 font-normal"
									>
										<div className="text-xl">{blog.Author}</div>
										<div className="text-lg">
											{formatPublishedDate(blog.published_on)}
										</div>
									</Typography>
								</div>
							</div>
						</CardBody>
					</Card>
				</Link>
			))}
		</div>
	);
};

export default BlogslistView;
