import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { GrView } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import fb from "../../firebase";
const DB = fb.firestore();
const Blogslist = DB.collection("blogs");

const BlogslistView = () => {
	const [blogs, setBlogs] = useState([]);
	const navigate = useNavigate();

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

	const deleteBlog = (id) => {
		Blogslist.doc(id)
			.delete()
			.then(() => {
				toast.success("post deleted successfully");
			})
			.catch((error) => {
				toast.error("something went wrong, try again");
			});
	};

	return (
		<>
			<div className="container mx-auto">
				{blogs.map((blog) => (
					<div
						key={blog.id}
						className="bg-[#FCF5E5] shadow-lg rounded-lg overflow-hidden mb-8"
					>
						<div className="p-4">
							<h2 className="text-2xl font-bold text-gray-800 my-3">
								{blog.Title}
							</h2>
							<div
								dangerouslySetInnerHTML={{
									__html:
										blog.Body.split(" ").slice(0, 30).join(" ") +
										(blog.Body.split(" ").length > 30 ? "..." : ""),
								}}
							/>
						</div>
						<div className="flex justify-between items-center text-PGray text-2xl p-4 transition-all duration-200">
							<div className="flex flex-row items-center">
								<Link
									to={"/blog/" + blog.id}
									className="text-blue-500 hover:text-PBlue mr-4"
								>
									<GrView />
								</Link>
								{/* <Link
								to={"/blog/edit/" + blog.id}
								className="text-blue-500 hover:text-PGreen"
							>
								<MdModeEditOutline />
							</Link> */}
							</div>
							<button
								className="text-3xl text-PGray hover:text-Pred transition-all duration-200"
								onClick={() => {
									// deleteBlog(blog.id);
									const token = localStorage.getItem("maytra");

									if (token !== null) {
										deleteBlog(blog.id);
									} else {
										toast.error("sign up and try again");
										navigate("/login");
									}
								}}
							>
								<MdDelete />
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default BlogslistView;
