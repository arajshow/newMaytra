import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fb from "../../firebase";
import useAuthState from "./hooks";
import Loading from "../../assets/Images/load.gif";
import Footer from "../common/Footer";
const DB = fb.firestore();
const Blogslist = DB.collection("blogs");

function LikeBlogButton({ id, likes }) {
	const blogRef = DB.collection("blogs").doc(id);
	const { user } = useAuthState(fb.auth());
	const handleLikes = () => {
		if (likes?.includes(user.uid)) {
			blogRef.update({
				likes: fb.firestore.FieldValue.arrayRemove(user.uid),
			});
		} else {
			blogRef.update({
				likes: fb.firestore.FieldValue.arrayUnion(user.uid),
			});
		}
	};
	return (
		<div>
			{likes?.includes(user.uid) ? (
				<button onClick={handleLikes}>UnLike</button>
			) : (
				<button onClick={handleLikes}>Like</button>
			)}
		</div>
	);
}

const BlogView = () => {
	const { id } = useParams();
	const [blogs, Setblogs] = useState({});
	Blogslist.doc(id)
		.get()
		.then((snapshot) => {
			const data = snapshot.data();
			Setblogs({ ...data, id: id });
		});

	console.log("blog", blogs);

	return (
		<div>
			<div
				key={blogs.id}
				className="bg-[#FCF5E5] w-10/12 mx-auto mt-24 shadow-lg rounded-lg overflow-hidden mb-24"
			>
				<div className="flex flex-col gap-8 p-4 items-center">
					<h2 className="text-4xl font-bold text-gray-800 my-3">
						{blogs.Title}
					</h2>
					<img
						class="rounded-t-lg object-center h-[50%] w-[50%] object-contain"
						src={blogs.ImageUrl || Loading}
						alt=""
					/>
					<div
						className=" leading-8 text-xl text-start w-11/12"
						dangerouslySetInnerHTML={{
							__html: blogs.Body,
						}}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default BlogView;
