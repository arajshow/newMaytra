import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import fb from "../../firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuthState from "./hooks";

const DB = fb.firestore();
const Blogslist = DB.collection("blogs");

const CreateBlog = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [Author, setAuthor] = useState("");
	const [image, setImage] = useState(null); // State to store the selected image file

	const handleImageChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
	};

	const submit = (e) => {
		e.preventDefault();
		// Check if an image is selected
		if (image) {
			const storageRef = fb.storage().ref(`images/${image.name}`);
			storageRef.put(image).then(() => {
				storageRef.getDownloadURL().then((imageUrl) => {
					// Add blog post to Firestore
					Blogslist.add({
						Title: title,
						Body: body,
						Author: Author,
						ImageUrl: imageUrl, // Save image URL to Firestore
						// published_on: fb.firestore.Timestamp.fromDate(new Date()),
						published_on: new Date().toISOString(),
					})
						.then((docRef) => {
							toast.success("blog posted");
						})
						.catch((error) => {
							toast.error("something went wrong, try again");
						});
					navigate("/blog");
				});
			});
		} else {
			// If no image is selected, add blog post without an image
			Blogslist.add({
				Title: title,
				Author: Author,
				Body: body,
				// published_on: fb.firestore.Timestamp.fromDate(new Date()),
				published_on: new Date().toISOString(),
			})
				.then((docRef) => {
					toast.success("blog posted");
				})
				.catch((error) => {
					console.log("error in blog creation ", error);
				});
			navigate("/blog");
		}
	};

	return (
		<div className="p-8 w-10/12 mx-auto">
			<div className="max-w-xl mx-auto">
				<form
					onSubmit={(event) => {
						submit(event);
					}}
					className="bg-[#F9F6EE] shadow-md rounded px-8 pt-6 pb-8 mb-4"
				>
					<div className="mb-4">
						<label
							htmlFor="title"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							placeholder="Title"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							required
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="Author"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Author
						</label>
						<input
							type="text"
							id="Author"
							name="Author"
							placeholder="Author"
							onChange={(e) => {
								setAuthor(e.target.value);
							}}
							required
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="content"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Content
						</label>
						<textarea
							name="content"
							type="text"
							placeholder="write your content here"
							rows="10"
							cols="150"
							onChange={(e) => {
								setBody(e.target.value);
							}}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							required
						></textarea>
					</div>
					<div className="mb-4">
						<label
							htmlFor="image"
							className="block text-gray-700 text-sm font-bold mb-2"
						>
							Image
						</label>
						<input
							type="file"
							id="image"
							name="image"
							accept="image/*"
							onChange={handleImageChange}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-black bg-[#c3b99d] hover:bg-PGreen transition-all duration-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateBlog;
